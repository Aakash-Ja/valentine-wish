import { Heart, Code, Github, Linkedin, Mail, Globe, Coffee, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", 
  "JavaScript", "HTML/CSS", "Git", "REST APIs", "UI/UX Design"
];

const Developer = () => {
  return (
    <div className="min-h-screen py-12 bg-romantic-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Code className="h-12 w-12 text-primary mx-auto mb-4 heart-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="text-primary">Developer</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The person behind this Valentine's website
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Profile Card */}
          <Card className="mb-8 border-primary/20 overflow-hidden">
            <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-love/20 h-32" />
            <CardContent className="p-8 -mt-16">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
                {/* Avatar */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center border-4 border-background shadow-xl">
                  <span className="text-4xl font-bold text-primary-foreground">JD</span>
                </div>
                
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-2xl font-bold mb-1">John Doe</h2>
                  <p className="text-muted-foreground mb-3">Full Stack Developer & UI/UX Designer</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <Badge variant="secondary" className="gap-1">
                      <MapPin className="h-3 w-3" />
                      San Francisco, CA
                    </Badge>
                    <Badge variant="secondary" className="gap-1 bg-primary/10 text-primary">
                      <Heart className="h-3 w-3 fill-primary" />
                      Loves Coding
                    </Badge>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="mailto:hello@example.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                      <Globe className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  About Me
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate developer who loves creating beautiful, 
                  user-friendly web applications. This Valentine's website 
                  was built with love to spread joy and celebrate the most 
                  beautiful emotion in the world.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  When I'm not coding, you'll find me exploring new 
                  technologies, contributing to open source projects, 
                  or enjoying a good cup of coffee.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  Fun Facts
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0 fill-primary" />
                    <span>Built my first website at age 14</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0 fill-primary" />
                    <span>Contributed to 50+ open source projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0 fill-primary" />
                    <span>Coffee fueled: 3+ cups daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0 fill-primary" />
                    <span>Believes in clean code & good vibes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <Card className="mb-8 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Info */}
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary fill-primary" />
                About This Project
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Valentine's website was built using modern web technologies 
                including React, TypeScript, and Tailwind CSS. It features:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  Light & Dark Mode
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  Responsive Design
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  Image Gallery with Lightbox
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  Beautiful Animations
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  Romantic Color Theme
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  6 Unique Pages
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Footer Message */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4 font-script text-xl">
              "Built with <Heart className="h-5 w-5 text-primary fill-primary inline mx-1" /> and lots of coffee"
            </p>
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Heart 
                  key={i} 
                  className="h-5 w-5 text-primary fill-primary animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// MapPin component for the badge
const MapPin = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default Developer;
