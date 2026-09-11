import { ProjectIntelligence } from "@/components/analysis/ProjectIntelligence";
import { Footer } from "@/components/layout/Footer";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { HeroTransformation } from "@/components/marketing/HeroTransformation";
import { ProductShowcase } from "@/components/marketing/ProductShowcase";
import { QualityDemo } from "@/components/marketing/QualityDemo";
import { WorkflowRail } from "@/components/marketing/WorkflowRail";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollProgress } from "@/components/visual/ScrollProgress";
import { ShaderField } from "@/components/visual/ShaderField";

export default function HomePage() {
  return (
    <MotionProvider>
      <main className="relative isolate overflow-x-clip">
        <ShaderField />
        <ScrollProgress />
        <div className="relative z-10">
          <MarketingHeader />
          <HeroTransformation />
          <WorkflowRail />
          <ProductShowcase />
          <QualityDemo />
          <ProjectIntelligence />
          <Footer />
        </div>
      </main>
    </MotionProvider>
  );
}
