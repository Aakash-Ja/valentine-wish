import { Heart, Code, Github, Linkedin, Mail, Globe, Coffee, Sparkles, MapPin, ExternalLink, PhoneIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "HTML5", "CSS3/SASS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "NestJS", "REST APIs", "Microservices"] },
  { category: "Database", items: ["MongoDB", "MySQL", "Firebase", "Redis"] },
  { category: "Tools & DevOps", items: ["Docker", "AWS", "GitHub Actions", "CI/CD", "Git"] },
  { category: "Testing", items: ["Jest", "Cypress", "PWA"] }
];

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/Aakash-Ja", label: "Aakash-Ja" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/aakash-jaiswal-1982b6198/", label: "Aakash Jaiswal" },
  { name: "Twitter", icon: ExternalLink, url: "https://x.com/aakash123564", label: "@aakash123564" },
  { name: "Portfolio", icon: Globe, url: "https://aakash-ja.vercel.app", label: "aakash-ja.vercel.app" },
  { name: "Email", icon: Mail, url: "mailto:aakash123564@gmail.com", label: "aakash123564@gmail.com" },
];

const Developer = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-romantic-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <Code className="h-16 w-16 text-primary mx-auto mb-6 heart-float" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Meet <span className="text-gradient">Aakash Jaiswal</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer crafting beautiful, scalable web experiences with passion and precision
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Profile Card */}
          <Card className="mb-12 border-primary/20 overflow-hidden bg-gradient-to-br from-background to-primary/5 shadow-lg shadow-primary/10">
            <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-love/20 h-40" />
            <CardContent className="p-8 -mt-20">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
                {/* Avatar */}
                <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-primary via-accent to-love flex items-center justify-center border-4 border-background shadow-2xl flex-shrink-0">
                  <span className="text-6xl font-bold text-primary-foreground">AJ</span>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <h2 className="text-4xl font-bold mb-2">Aakash Jaiswal</h2>
                    <p className="text-xl text-primary font-semibold mb-3">Full Stack Developer | 4+ Years Experience</p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <Badge variant="secondary" className="gap-2 px-4 py-2 bg-primary/10">
                        <MapPin className="h-4 w-4" />
                        India 🇮🇳
                      </Badge>
                      <Badge variant="secondary" className="gap-2 px-4 py-2 bg-accent/10">
                        <Heart className="h-4 w-4 fill-accent text-accent" />
                        Coffee Enthusiast ☕
                      </Badge>
                      <Badge variant="secondary" className="gap-2 px-4 py-2 bg-primary/10">
                        <Code className="h-4 w-4" />
                        Open Source Contributor
                      </Badge>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <a href="tel:+919580974395" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <PhoneIcon className="h-4 w-4" />
                      +91 9580974395
                    </a>
                    <a href="mailto:aakash123564@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-4 w-4" />
                      aakash123564@gmail.com
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <Button key={link.name} asChild variant="outline" size="sm" className="rounded-full gap-2 hover:border-primary hover:bg-primary/10">
                        <a href={link.url} target="_blank" rel="noopener noreferrer" title={`Visit ${link.name}`}>
                          <link.icon className="h-4 w-4" />
                          <span className="hidden sm:inline">{link.label}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card className="mb-12 border-primary/20 bg-gradient-to-br from-background to-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-primary" />
                Professional Bio
              </h3>
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Detail-oriented <strong className="text-foreground">Full Stack Developer</strong> with 4+ years of experience in building scalable, high-performance web applications using JavaScript and TypeScript. Specialized in crafting modern frontends with React.js, Next.js, Angular, and Stencil.js, and designing robust backend systems with Node.js and NestJS.
                </p>
                <p>
                  Experienced in building APIs, microservices architectures, and integrating third-party services. Proficient in database optimization (MySQL, MongoDB), Docker, Redis, and CI/CD pipelines. Passionate about writing clean, maintainable code and continuously learning new technologies.
                </p>
                <p>
                  Created Valentine Glow to showcase modern web development capabilities combining React, TypeScript, and Tailwind CSS with a focus on romantic user experiences and beautiful animations.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Technologies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-gradient">Skills & Expertise</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category} className="border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 text-lg text-primary">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <Card className="mb-12 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                Work Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 pb-6">
                  <h4 className="text-lg font-semibold mb-1">Software Developer</h4>
                  <p className="text-primary font-medium mb-2">Cyber Infrastructure (P) Ltd</p>
                  <p className="text-sm text-muted-foreground mb-3">Current Position</p>
                  <p className="text-muted-foreground">Building scalable web applications, leading frontend development, and collaborating with cross-functional teams.</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-lg font-semibold mb-1">Software Developer Trainee</h4>
                  <p className="text-primary font-medium mb-2">Cyber Infrastructure (P) Ltd</p>
                  <p className="text-sm text-muted-foreground mb-3">Jan 2022 – Aug 2022</p>
                  <p className="text-muted-foreground">Learned industry best practices and contributed to multiple production projects.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="mb-12 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 pb-6">
                  <h4 className="text-lg font-semibold">Bachelor of Technology in Computer Science</h4>
                  <p className="text-primary font-medium mb-2">Ashoka Institute of Technology and Management (AITM)</p>
                  <p className="text-sm text-muted-foreground">Published in college magazine</p>
                </div>
                <div className="border-l-4 border-accent pl-6 pb-6">
                  <h4 className="text-lg font-semibold">Intermediate School</h4>
                  <p className="text-primary font-medium">National Institute of Open Schooling (NIOS)</p>
                </div>
                <div className="border-l-4 border-love pl-6">
                  <h4 className="text-lg font-semibold">High School</h4>
                  <p className="text-primary font-medium">Divine Sainik School</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About Valentine Glow */}
          <Card className="border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Heart className="h-6 w-6 text-primary fill-primary" />
                About Valentine Glow
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Valentine Glow is a showcase project combining modern web development technologies with a focus on creating beautiful, romantic user experiences. Built with React, TypeScript, and Tailwind CSS, it demonstrates expertise in:
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground mb-6">
                {[
                  "Component-based architecture",
                  "Responsive design patterns",
                  "Beautiful animations & transitions",
                  "SEO optimization",
                  "Dark & Light mode support",
                  "Performance optimization",
                  "Tailwind CSS mastery",
                  "Modern UI/UX principles"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-primary fill-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-center pt-4 border-t border-primary/20">
                <Button asChild className="gap-2 bg-gradient-to-r from-primary to-accent">
                  <a href="https://aakash-ja.vercel.app" target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" />
                    Visit Full Portfolio
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Message */}
          <div className="text-center mt-16">
            <p className="text-xl text-muted-foreground mb-6 font-script">
              "Built with <Heart className="h-5 w-5 text-primary fill-primary inline mx-1" />, TypeScript, and endless ☕"
            </p>
            <div className="flex justify-center gap-3 mb-8">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className="h-6 w-6 text-primary fill-primary animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <p className="text-muted-foreground">
              © 2026 <span className="font-semibold text-foreground">Aakash Jaiswal</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
