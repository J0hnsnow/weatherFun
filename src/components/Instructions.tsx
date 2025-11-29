import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Github, Code2, Rocket } from "lucide-react";

export const Instructions = () => {
  return (
    <Card className="bg-gradient-card backdrop-blur-lg border-2 shadow-soft mt-12">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-foreground flex items-center justify-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" />
          Getting Started Guide
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Code2 className="w-5 h-5" />
              <h3>1. Setup</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Get your free API key from OpenWeather and add it to your environment variables as VITE_OPENWEATHER_API_KEY.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent font-semibold">
              <Rocket className="w-5 h-5" />
              <h3>2. Deploy</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Click the Publish button in Lovable to deploy your app instantly. Share the live URL with anyone!
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-secondary font-semibold">
              <Github className="w-5 h-5" />
              <h3>3. GitHub</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Connect to GitHub in project settings to push your code and create a portfolio-ready repository.
            </p>
          </div>
        </div>

        <div className="p-4 bg-muted/50 rounded-lg border border-border">
          <h4 className="font-semibold text-foreground mb-2">📚 Complete Documentation</h4>
          <p className="text-sm text-muted-foreground">
            Check the <code className="bg-background px-2 py-1 rounded text-primary">README.md</code> file in your project for:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
            <li>Detailed setup instructions</li>
            <li>API configuration guide</li>
            <li>Environment variable setup</li>
            <li>GitHub integration steps</li>
            <li>Common troubleshooting tips</li>
            <li>AI Prompt Journal examples</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
