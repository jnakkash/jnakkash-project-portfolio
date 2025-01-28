import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-background py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">
            Migration & Integration of IDBS ELN with SoftMax
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Streamlining Lab Workflows for Enhanced Efficiency and Compliance
          </p>
          <p className="text-lg text-gray-600 mb-12">
            Welcome to my project showcase, detailing how we successfully migrated IDBS Electronic Lab Notebook (ELN) to a web-based platform and integrated SoftMax for real-time data analysis. Discover how these improvements saved time, reduced errors, and increased overall user adoption.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/project-details")}
            className="mb-16"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </div>
  );
}