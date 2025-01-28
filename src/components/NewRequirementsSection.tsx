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
            <div className="space-y-6 text-gray-700">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">1.</span>
                    <span>Stakeholder Workshops: Identified lab analysts, IT teams, regulatory personnel.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">2.</span>
                    <span>Interviews & Surveys: Captured pain points, desired features, and compliance considerations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">3.</span>
                    <span>Documentation in JIRA: Created user stories, epics, and a traceability matrix.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">4.</span>
                    <span>Transparency via Confluence: Provided live status updates, collected feedback from end-users.</span>
                  </li>
                </ul>
              </div>

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

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Process and Tools Visualization</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      step: "Stakeholder Workshops",
                      tools: "Confluence for meeting notes and documentation",
                      icon: "👥"
                    },
                    {
                      step: "Interviews & Surveys",
                      tools: "Confluence for survey results and feedback collection",
                      icon: "📝"
                    },
                    {
                      step: "Documentation in JIRA",
                      tools: "JIRA for user stories, epics, and traceability",
                      icon: "📊"
                    },
                    {
                      step: "Transparency via Confluence",
                      tools: "Confluence for status updates and feedback",
                      icon: "🔄"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <h5 className="font-semibold mb-2">{item.step}</h5>
                      <p className="text-sm text-gray-600">{item.tools}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}