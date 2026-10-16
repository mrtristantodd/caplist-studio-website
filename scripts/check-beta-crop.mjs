import assert from 'node:assert/strict';
import { getCropRect, CROP_LEFT_FRACTION, CROP_WIDTH_FRACTION } from '../components/founding-beta/crop-geometry.ts';
const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-8, `${actual} != ${expected}`);
// Native landscape footage: source outline and output use exactly these pixels.
assert.deepEqual(getCropRect(1280, 720), {x:437.5,y:0,width:405,height:720});
// Cover-fit poster/source cases must stay centred and retain a 9:16 output.
for (const [width,height] of [[1920,1080],[1536,1024],[1024,1536],[2048,1024],[640,480]]) {
  const crop=getCropRect(width,height);
  near(crop.width/crop.height,9/16);
  near(crop.x+crop.width/2,width/2);
  near(crop.y+crop.height/2,height/2);
  assert.ok(crop.x>=0 && crop.y>=0 && crop.x+crop.width<=width && crop.y+crop.height<=height);
  const visibleWidth=crop.height*16/9;
  near(crop.width/visibleWidth,CROP_WIDTH_FRACTION);
  near((crop.x-(width-visibleWidth)/2)/visibleWidth,CROP_LEFT_FRACTION);
}
for (const dimensions of [[0,720],[-1,10],[Infinity,720],[1280,NaN]]) assert.throws(()=>getCropRect(...dimensions),RangeError);
console.log('PASS: exact crop geometry, source/poster cover fit, invalid dimensions');
