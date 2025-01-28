import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ProjectDetails() {
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
          <h1 className="text-4xl font-bold mb-8">Project Overview</h1>
          
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Objective</h2>
            <p className="text-gray-600 mb-8">
              Our goal was to transition the on-premises IDBS ELN to a secure, web-based solution while integrating SoftMax for seamless, in-platform data analysis. This project required meticulous planning to ensure compliance with FDA regulations, improve user accessibility, and streamline lab workflows.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Scope & Approach</h2>
            <p className="text-gray-600">
              We began by defining clear objectives and success metrics, collaborating with stakeholders across IT, QA, and R&D. Using an iterative approach, we managed requirements in JIRA and maintained transparency through Confluence.
            </p>
          </Card>

          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Key Challenges & Solutions</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
                <p className="text-gray-600 mb-2"><span className="font-medium">Challenge:</span> Ensuring FDA 21 CFR Part 11 and GxP adherence.</p>
                <p className="text-gray-600"><span className="font-medium">Solution:</span> Worked closely with QA to validate workflows, audit trails, and electronic signatures.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">User Resistance</h3>
                <p className="text-gray-600 mb-2"><span className="font-medium">Challenge:</span> Scientists reluctant to adopt a new system.</p>
                <p className="text-gray-600"><span className="font-medium">Solution:</span> Offered live training, user guides, and a phased rollout to ease transition.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Complex Integration</h3>
                <p className="text-gray-600 mb-2"><span className="font-medium">Challenge:</span> Linking SoftMax, IDBS ELN, and Tetra Science with minimal downtime.</p>
                <p className="text-gray-600"><span className="font-medium">Solution:</span> Created clear data flow diagrams, ran iterative testing, and established open lines of communication with each vendor.</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}