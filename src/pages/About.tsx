import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 mb-12">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-gray-600 text-lg mb-8">
              Hi, I'm Jacques, a Business Analyst with experience in biotech and pharmaceutical projects. My focus is on gathering robust requirements, optimizing processes, and ensuring regulatory compliance.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Key Skills</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Tools</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>JIRA</li>
                  <li>Confluence</li>
                  <li>SoftMax</li>
                  <li>Tetra Science</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Methodologies</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Agile/Scrum</li>
                  <li>Stakeholder Management</li>
                  <li>Change Management</li>
                </ul>
              </div>
            </div>

            <h3 className="font-semibold mb-2">Domain Expertise</h3>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              <li>FDA 21 CFR Part 11</li>
              <li>GxP Standards</li>
              <li>Lab Workflows</li>
            </ul>

            <p className="text-lg mb-8">
              Want to learn more about my work or collaborate on future projects? Feel free to connect!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="gap-2">
                <Mail className="w-4 h-4" />
                Email Me
              </Button>
              <Button variant="outline" className="gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}