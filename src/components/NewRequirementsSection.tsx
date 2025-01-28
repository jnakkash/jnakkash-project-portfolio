import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";

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
            Interacting with actual users in the lab to understand their needs and wants
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">User Requirement Gathering Process</h3>
            <div className="space-y-8 text-gray-700">
              <div>
                <h4 className="text-lg font-semibold mb-4">Process and Tools Visualization</h4>
              </div>

              <div className="flex flex-col items-center space-y-8">
                {[
                  {
                    step: "Stakeholder Workshops",
                    description: "Lab analysts, IT teams, regulatory personnel",
                    icon: "👥"
                  },
                  {
                    step: "Interviews & Surveys",
                    description: "Pain points & feature requirements",
                    icon: "📝"
                  },
                  {
                    step: "JIRA Documentation",
                    description: "User stories & epics",
                    icon: "📊"
                  },
                  {
                    step: "Confluence Updates",
                    description: "Status updates & feedback",
                    icon: "🔄"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative w-full max-w-md"
                  >
                    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full text-2xl">
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold">{item.step}</h5>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    {index < 3 && (
                      <div className="absolute left-6 -bottom-8 h-8 w-0.5 bg-gray-200" />
                    )}
                  </motion.div>
                ))}
              </div>

              <Separator className="my-8" />

              <div>
                <h4 className="text-lg font-semibold mb-3">Tools Used:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>JIRA: Requirements management, sprint planning, backlog creation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Confluence: Single source of truth for documentation, meeting notes, and stakeholder comments.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}