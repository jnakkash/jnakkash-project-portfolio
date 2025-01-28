import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

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
          <h2 className="text-3xl font-bold mb-4">Business Requirements Gathering Process</h2>
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
      </div>
    </div>
  );
}