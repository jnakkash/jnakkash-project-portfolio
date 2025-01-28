import { motion } from "framer-motion";
import { Card } from "./ui/card";

export function NewRequirementsSection() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Functional User Requirements Gathering</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your section description goes here.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Content Title</h3>
            <p className="text-gray-700">
              Your content goes here.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}