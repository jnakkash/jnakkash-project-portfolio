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
          
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Requirements Gathering Process</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Stakeholder Workshops: Identified lab analysts, IT teams, regulatory personnel.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Interviews & Surveys: Captured pain points, desired features, and compliance considerations.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Documentation in JIRA: Created user stories, epics, and a traceability matrix.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Transparency via Confluence: Provided live status updates, collected feedback from end-users.</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Tools Used</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>JIRA: Requirements management, sprint planning, backlog creation.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Confluence: Single source of truth for documentation, meeting notes, and stakeholder comments.</span>
              </li>
            </ul>

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