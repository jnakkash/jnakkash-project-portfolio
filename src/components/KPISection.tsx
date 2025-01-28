import { motion } from "framer-motion";
import { Card } from "./ui/card";

export function KPISection() {
  const metrics = [
    {
      title: "Time Saved",
      value: "25%",
      description: "in daily workflows"
    },
    {
      title: "Error Reduction",
      value: "40%",
      description: "through integrated data analysis"
    },
    {
      title: "User Adoption",
      value: "95%",
      description: "within six months"
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">{metric.title}</h3>
                <p className="text-4xl font-bold text-primary mb-2">{metric.value}</p>
                <p className="text-gray-600">{metric.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}