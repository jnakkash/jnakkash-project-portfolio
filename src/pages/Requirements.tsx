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
          <h1 className="text-4xl font-bold mb-8">Requirement Gathering Process</h1>
          
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
              <li className="flex items-start">
                <span className="font-semibold mr-2">Lucidchart:</span>
                <span className="text-gray-600">Designing Process Maps and Process Flows.</span>
              </li>
            </ul>
          </div>

          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Requirements Gathering Flow</h2>
            <img
              src="/lovable-uploads/8aa54f93-c6aa-44ac-9a1e-af0280ea5c74.png"
              alt="Requirements gathering process flow"
              className="w-full rounded-lg mb-8"
            />
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Business Requirements Table</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* High-level Requirements Table */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">High-Level Requirements</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Requirement Type</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Functional</TableCell>
                        <TableCell>
                          <div>"Migrate ELN to web"</div>
                          <div>"Integrate SoftMax for real-time data"</div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Non-Functional</TableCell>
                        <TableCell>
                          <div>"99% system uptime"</div>
                          <div>"Latency under 2 seconds"</div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Regulatory</TableCell>
                        <TableCell>
                          <div>"FDA 21 CFR Part 11 compliance"</div>
                          <div>"Maintain audit trails"</div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* Detailed Requirements Table */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Detailed Requirements</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Functional</TableCell>
                        <TableCell>Migrate ELN to web-based platform accessible globally</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>Functional</TableCell>
                        <TableCell>Integrate SoftMax for real-time data analysis</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>Functional</TableCell>
                        <TableCell>Enable automatic data ingestion via Tetra Science</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>Non-Functional</TableCell>
                        <TableCell>Ensure system supports 100 simultaneous users with minimal latency</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>Non-Functional</TableCell>
                        <TableCell>Guarantee 99% system uptime</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>6</TableCell>
                        <TableCell>Regulatory</TableCell>
                        <TableCell>Maintain audit trails for all data changes</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>7</TableCell>
                        <TableCell>Regulatory</TableCell>
                        <TableCell>Validate workflows to meet FDA compliance standards</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>8</TableCell>
                        <TableCell>User Experience</TableCell>
                        <TableCell>Simplify navigation and provide responsive design for users</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Card>
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
                  src="/lovable-uploads/ca804ca9-4c64-4a2b-81ea-0a1f68a2de4d.png"
                  alt="Requirements distribution"
                  className="w-full max-w-3xl mx-auto rounded-lg mb-8"
                />
                
                <h4 className="text-lg font-semibold mb-4">Detailed Business Requirements</h4>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Functional</TableCell>
                        <TableCell>Migrate ELN to web-based platform accessible globally</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>Functional</TableCell>
                        <TableCell>Integrate SoftMax for real-time data analysis</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>Functional</TableCell>
                        <TableCell>Enable automatic data ingestion via Tetra Science</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>Non-Functional</TableCell>
                        <TableCell>Ensure system supports 100 simultaneous users with minimal latency</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>Non-Functional</TableCell>
                        <TableCell>Guarantee 99% system uptime</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>6</TableCell>
                        <TableCell>Regulatory</TableCell>
                        <TableCell>Maintain audit trails for all data changes</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>7</TableCell>
                        <TableCell>Regulatory</TableCell>
                        <TableCell>Validate workflows to meet FDA compliance standards</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>8</TableCell>
                        <TableCell>User Experience</TableCell>
                        <TableCell>Simplify navigation and provide responsive design for users</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
