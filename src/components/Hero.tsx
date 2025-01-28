import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const metrics = [
  { label: "Time Saved", value: "25%", description: "in daily workflows" },
  { label: "Error Reduction", value: "40%", description: "through integrated analysis" },
  { label: "User Adoption", value: "95%", description: "within six months" },
];

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-background pt-20 pb-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50" />
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Migration & Integration of IDBS ELN with SoftMax
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Welcome to our project showcase, detailing how we successfully migrated Regeneron's IDBS Electronic Lab Notebook (ELN) to a web-based platform and integrated SoftMax for real-time data analysis.
          </p>
          <Button 
            onClick={() => navigate("/project-details")}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
          >
            Learn More
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center bg-white/50 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</h3>
                <p className="text-lg font-semibold text-gray-800 mb-1">{metric.label}</p>
                <p className="text-gray-600">{metric.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}