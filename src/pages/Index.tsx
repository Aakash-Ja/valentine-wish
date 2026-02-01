import { Heart, Sparkles, Gift, Camera, MessageCircleHeart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Camera,
    title: "Photo Gallery",
    description: "Browse beautiful romantic moments captured in time",
    link: "/gallery",
  },
  {
    icon: MessageCircleHeart,
    title: "Love Notes",
    description: "Express your feelings with heartfelt messages",
    link: "/love-notes",
  },
  {
    icon: Gift,
    title: "Gift Ideas",
    description: "Find the perfect gift for your special someone",
    link: "/gifts",
  },
];

const Index = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center bg-romantic-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-6">
              <Heart className="h-20 w-20 text-primary fill-primary pulse-love" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Happy Valentine's</span>
              <br />
              <span className="font-script text-primary">Day</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Celebrate the season of love with beautiful memories, heartfelt messages, 
              and romantic moments that last forever.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 gap-2">
                <Link to="/gallery">
                  <Sparkles className="h-5 w-5" />
                  Explore Gallery
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2">
                <Link to="/love-notes">
                  <Heart className="h-5 w-5" />
                  Send Love
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Heart className="h-32 w-32 text-primary fill-primary animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Heart className="h-24 w-24 text-accent fill-accent animate-pulse" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Celebrate <span className="text-primary">Love</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover ways to make this Valentine's Day unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Link key={feature.title} to={feature.link}>
                <Card 
                  className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-romantic-gradient">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-12 w-12 text-primary fill-primary mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-script text-foreground max-w-3xl mx-auto leading-relaxed">
            "The best thing to hold onto in life is each other."
          </blockquote>
          <p className="text-muted-foreground mt-4">— Audrey Hepburn</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Share Your <span className="text-primary">Love Story</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Every love story is beautiful, but yours is our favorite. 
            Let's celebrate it together.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
