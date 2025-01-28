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
            </ul>
          </div>

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