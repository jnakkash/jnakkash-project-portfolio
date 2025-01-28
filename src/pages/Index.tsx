import { Hero } from "@/components/Hero";
import { KPISection } from "@/components/KPISection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <KPISection />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <Button
            onClick={() => navigate("/requirements")}
            variant="outline"
            size="lg"
          >
            View Requirements Process
          </Button>
          <Button
            onClick={() => navigate("/workflow")}
            variant="outline"
            size="lg"
          >
            View Workflow Details
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;