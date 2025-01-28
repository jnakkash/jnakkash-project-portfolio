import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetails from "./pages/ProjectDetails";
import Requirements from "./pages/Requirements";
import Workflow from "./pages/Workflow";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex space-x-6 text-lg font-medium">
              <li><a href="/" className="hover:text-blue-600 transition-colors">Overview</a></li>
              <li><a href="/project-details" className="hover:text-blue-600 transition-colors">Project Details</a></li>
              <li><a href="/requirements" className="hover:text-blue-600 transition-colors">Requirements</a></li>
              <li><a href="/workflow" className="hover:text-blue-600 transition-colors">Workflow</a></li>
              <li><a href="/about" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/requirements" element={<Requirements />} />
            <Route path="/workflow" element={<Workflow />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;