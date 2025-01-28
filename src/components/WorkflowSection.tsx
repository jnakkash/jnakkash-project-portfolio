import { motion } from "framer-motion";
import { Card } from "./ui/card";

export function WorkflowSection() {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Process Transformation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we transformed the workflow from a locally-hosted solution to a modern, integrated web platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-4">Previous Workflow</h3>
              <img
                src="/lovable-uploads/0e480948-6e2d-44e1-a01c-c2b29a8e3c07.png"
                alt="Previous workflow diagram"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-600">
                Scientists had to manually transfer data between local systems, leading to inefficiencies and potential errors.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-4">New Workflow</h3>
              <img
                src="/lovable-uploads/2b503265-63b2-4fb9-ae87-7eeb4485ea16.png"
                alt="New workflow diagram"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-600">
                The new integrated system enables seamless data flow and real-time analysis through web-based interfaces.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}