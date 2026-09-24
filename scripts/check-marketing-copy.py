"""Verify approved public copy and static-export navigation before review."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json,re,subprocess
ROOT=Path(__file__).resolve().parents[1]
class Page(HTMLParser):
 def __init__(self,path):
  super().__init__();self.text=[];self.links=[];self.ids=set();self.skip=0;self.feed(path.read_text())
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag in ['script','style']:self.skip+=1
  if 'id' in a:self.ids.add(a['id'])
  if tag=='a':self.links.append(a.get('href',''))
 def handle_endtag(self,tag):
  if tag in ['script','style']:self.skip-=1
 def handle_data(self,data):
  if not self.skip:self.text.append(data)
 def content(self):return re.sub(r'\s+',' ',' '.join(self.text)).strip()
paths=list((ROOT/'out').rglob('*.html'));pages={str(p.relative_to(ROOT/'out')):Page(p) for p in paths}
errors=[]
for path,page in pages.items():
 for href in page.links:
  u=urlsplit(href)
  if u.scheme or u.netloc:continue
  target=(u.path.lstrip('/') or 'index.html') if u.path.startswith('/') else str(Path(path).parent/u.path) if u.path else path
  if not Path(target).suffix:target=target.rstrip('/')+'/index.html'
  if target not in pages:
   if not (ROOT/'out'/target).exists():errors.append(f'{path}: missing {href}')
  elif u.fragment and unquote(u.fragment) not in pages[target].ids:errors.append(f'{path}: missing anchor {href}')
 for banned in ['Capture once. Sell more.','Interactive Floorplan','Try it with your media','Request early access','See what your media could create','product library','The products available depend','quality gates','wholesale margin','wholesale costs','partner economics','COGS','resale margin formulas']:
  if banned.lower() in page.content().lower():errors.append(f'{path}: stale language {banned}')
 if path != 'pricing/index.html' and 'wholesale' in page.content().lower():
  errors.append(f'{path}: stale language wholesale')
def module_exports(path):
 js = "const ts=require('typescript'),fs=require('fs'),vm=require('vm');const source=fs.readFileSync(process.argv[1],'utf8');const compiled=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;const scope={exports:{}};vm.runInNewContext(compiled,scope);console.log(JSON.stringify(scope.exports));"
 return json.loads(subprocess.check_output(['node','-e',js,str(path)],cwd=ROOT,text=True))
approved=module_exports(ROOT/'lib/approved-messaging.ts')
def load(name):return approved[name]
def strings(o):
 if isinstance(o,str):yield o
 elif isinstance(o,dict):
  for v in o.values():yield from strings(v)
 else:
  for v in o:yield from strings(v)
for name,path in [('homeCopy','index.html'),('demoCopy','demo/index.html'),('aboutCopy','about/index.html')]:
 copy=load(name)
 # The approved interactive hero replaces the former static showcase block.
 if name=='homeCopy':copy={key:value for key,value in copy.items() if key!='showcase'}
 for text in strings(copy):
  if re.sub(r'\s+',' ',text).strip() not in pages[path].content():errors.append(f'{path}: approved copy missing: {text[:90]}')
if 'See Caplist in action' not in pages['index.html'].content():errors.append('index.html: missing homepage workflow CTA')
products=module_exports(ROOT/'lib/demo-media.ts')['products']
for p in products:
 for key in ['name','purpose','description','client','business','needs','formats']:
  if p[key] not in pages['examples/index.html'].content():errors.append(f'Products: missing {p["name"]} {key}')
assert len(products)==8
canonical=re.sub(r'\s+',' ',(ROOT/'docs/marketing/approved-messaging-v3.md').read_text())
for text in strings(approved):
 if re.sub(r'\s+',' ',text) not in canonical:errors.append('Copy diverges from approved brief: '+text[:90])
for p in products:
 for k in ['name','purpose','description','client','business']:
  if p[k] not in canonical:errors.append('Product copy diverges from approved brief: '+p[k][:90])
result={'pages':len(pages),'productDefinitions':len(products),'internalLinksAndAnchors':'pass' if not errors else 'see errors','approvedHomepageAboutDemoAndProductCopy':'pass' if not errors else 'see errors','errors':errors}
(ROOT/'docs/marketing/pass-1-checks.json').write_text(json.dumps(result,indent=2))
print(json.dumps(result,indent=2));raise SystemExit(bool(errors))
