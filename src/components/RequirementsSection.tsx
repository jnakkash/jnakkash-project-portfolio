import { motion } from "framer-motion";
import { Card } from "./ui/card";

export function RequirementsSection() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Requirements Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our structured approach to gathering and managing requirements ensured project success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Requirements Gathering Process</h3>
              <img
                src="/lovable-uploads/01a47b88-2a09-4dc3-b587-e5d0134fc611.png"
                alt="Requirements gathering process"
                className="w-full max-w-3xl mx-auto rounded-lg mb-4"
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Distribution of Requirements</h3>
              <img
                src="/lovable-uploads/1dc831e8-3d42-4fc7-a0f5-eb7d39d2bcf8.png"
                alt="Requirements distribution"
                className="w-full max-w-3xl mx-auto rounded-lg mb-4"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}