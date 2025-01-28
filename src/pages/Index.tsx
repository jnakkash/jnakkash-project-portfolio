import { Hero } from "@/components/Hero";
import { KPISection } from "@/components/KPISection";
import { RequirementsSection } from "@/components/RequirementsSection";
import { WorkflowSection } from "@/components/WorkflowSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <KPISection />
      <RequirementsSection />
      <WorkflowSection />
    </div>
  );
};

export default Index;