import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Requirements() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Requirements Process</h1>
          
          <div className="flex flex-col items-center space-y-8 mb-12">
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

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-12">
            <h3 className="text-xl font-semibold mb-4">Tools Used:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-semibold mr-2">JIRA:</span>
                <span className="text-gray-600">Requirements management, sprint planning, backlog creation.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Confluence:</span>
                <span className="text-gray-600">Single source of truth for documentation, meeting notes, and stakeholder comments.</span>
              </li>
            </ul>
          </div>
          
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Business Requirements Gathering Process</h2>
            <img
              src="/lovable-uploads/8e36ecc6-f44d-4177-8c7f-eda6f1e3cc9c.png"
              alt="Requirements gathering process"
              className="w-full max-w-3xl mx-auto rounded-lg mb-8"
            />
            
            <h4 className="text-lg font-semibold mb-4">Results of the Requirements Gathering Process</h4>
            <ul className="space-y-3 text-gray-700">
              <li>• Captured one hundred percent of critical requirements in JIRA with full traceability.</li>
              <li>• Delivered a transparent communication pipeline through Confluence, leading to improved stakeholder satisfaction.</li>
              <li>• Avoided scope creep by documenting and prioritizing all requirements effectively.</li>
              <li>• Ensured seamless alignment of business and user needs, enabling a smooth project rollout.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 mt-8">Distribution of Requirements</h3>
            <img
              src="/lovable-uploads/ca804ca9-4c64-4a2b-81ea-0a1f68a2de4d.png"
              alt="Requirements distribution"
              className="w-full max-w-3xl mx-auto rounded-lg mb-8"
            />

            <h3 className="text-xl font-semibold mb-4">Business Requirements</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Requirement Type</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Functional</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4">
                      <li>"Migrate ELN to web"</li>
                      <li>"Integrate SoftMax for real-time data"</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Non-Functional</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4">
                      <li>"99% system uptime"</li>
                      <li>"Latency under 2 seconds"</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Regulatory</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4">
                      <li>"FDA 21 CFR Part 11 compliance"</li>
                      <li>"Maintain audit trails"</li>
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>

          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Process Mapping</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">As-Is Workflow</h3>
                <p className="text-gray-600 mb-4">
                  Previously, scientists recorded data in a locally-hosted ELN, then switched to SoftMax on a separate server for analysis, leading to manual data transfers and potential errors.
                </p>
                <img
                  src="/lovable-uploads/6dec936b-7498-4e6d-8811-f4222f7853dd.png"
                  alt="As-Is Workflow Process Map"
                  className="w-full rounded-lg mb-8"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">To-Be Workflow</h3>
                <p className="text-gray-600 mb-4">
                  In the new system, scientists access the ELN via a web portal. SoftMax is fully integrated, allowing real-time data analysis and automatic data capture, significantly reducing manual steps.
                </p>
                <img
                  src="/lovable-uploads/ac0e01a0-c9be-427d-9d18-22b969b7a468.png"
                  alt="To-Be Workflow Process Map"
                  className="w-full rounded-lg mb-8"
                />
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">KPI Improvements</h2>
            <img
              src="/lovable-uploads/faaeb2e6-3e9c-49b7-9fef-ab1d1bcbdfe9.png"
              alt="Project KPI Improvements"
              className="w-full rounded-lg mb-8"
            />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metrics</TableHead>
                  <TableHead>Before Implementation</TableHead>
                  <TableHead>After Implementation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Time Saved (%)</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Error Reduction (%)</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>40</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>User Adoption (%)</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>95</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}