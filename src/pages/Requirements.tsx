import { RequirementsSection } from "@/components/RequirementsSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Requirements = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8"
        >
          ← Back to Overview
        </Button>
      </div>
      <RequirementsSection />
    </div>
  );
};

export default Requirements;