import { Hero } from "@/components/Hero";
import { WorkflowSection } from "@/components/WorkflowSection";
import { RequirementsSection } from "@/components/RequirementsSection";
import { KPISection } from "@/components/KPISection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WorkflowSection />
      <RequirementsSection />
      <KPISection />
    </div>
  );
};

export default Index;