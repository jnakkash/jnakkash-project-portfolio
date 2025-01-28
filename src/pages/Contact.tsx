import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8">
            <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input id="name" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" required className="min-h-[150px]" />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Connect with me</h2>
              <div className="flex flex-col space-y-2">
                <a href="mailto:contact@jacquesnakkash.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Mail className="w-4 h-4" />
                  contact@jacquesnakkash.com
                </a>
                <a href="https://linkedin.com/in/jacquesnakkash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-4 h-4" />
                  linkedin.com/in/jacquesnakkash
                </a>
                <a href="https://github.com/jacquesnakkash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Github className="w-4 h-4" />
                  github.com/jacquesnakkash
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}