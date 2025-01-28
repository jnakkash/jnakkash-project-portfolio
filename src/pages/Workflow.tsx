import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Workflow = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8"
        >
          ← Back to Overview
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Process Mapping</h1>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Requirements Gathering Process</h2>
            <img
              src="/lovable-uploads/00635224-8c91-4aae-aafa-94c90864f1f7.png"
              alt="Requirements gathering process diagram"
              className="w-full rounded-lg mb-6"
            />
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">As-Is Workflow</h2>
            <p className="text-gray-600 mb-6">
              Previously, scientists recorded data in a locally-hosted ELN, then switched to SoftMax on a separate server for analysis, leading to manual data transfers and potential errors.
            </p>
            <img
              src="/lovable-uploads/73c84d85-d875-4fb6-bc0a-063cfe963269.png"
              alt="Previous workflow diagram"
              className="w-full rounded-lg mb-4"
            />
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">To-Be Workflow</h2>
            <p className="text-gray-600 mb-6">
              In the new system, scientists access the ELN via a web portal. SoftMax is fully integrated, allowing real-time data analysis and automatic data capture, significantly reducing manual steps.
            </p>
            <img
              src="/lovable-uploads/fcab90a1-790f-4f91-91f0-4851ac95f433.png"
              alt="New workflow diagram"
              className="w-full rounded-lg mb-4"
            />
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Key Improvements</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Single Login for ELN & SoftMax
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Automatic Data Ingestion with Tetra Science
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Reduced Error Rate & Enhanced Traceability
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Workflow;