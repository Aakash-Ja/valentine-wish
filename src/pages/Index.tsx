import { Heart, Sparkles, Gift, Camera, MessageCircleHeart, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Camera,
    title: "Photo Gallery",
    description: "Browse beautiful romantic moments and cherished memories captured in time. Every picture tells a love story.",
    link: "/gallery",
  },
  {
    icon: MessageCircleHeart,
    title: "Love Notes",
    description: "Express your deepest feelings with heartfelt messages. Write, share, and celebrate your love in words.",
    link: "/love-notes",
  },
  {
    icon: Gift,
    title: "Gift Ideas",
    description: "Discover the perfect romantic gifts for your special someone. Thoughtful presents to show your affection.",
    link: "/gifts",
  },
];

const Index = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center bg-romantic-gradient relative overflow-hidden">
        {/* Floating hearts background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] float-hearts" style={{ animationDelay: "0s" }}>
            <Heart className="h-16 w-16 text-primary/20 fill-primary/20" />
          </div>
          <div className="absolute top-40 right-[15%] float-hearts" style={{ animationDelay: "1s" }}>
            <Heart className="h-12 w-12 text-accent/20 fill-accent/20" />
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Heart className="h-24 w-24 text-primary fill-primary pulse-love animate-bounce" />
                <Sparkles className="h-8 w-8 text-accent absolute -top-2 -right-2 sparkle" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-gradient">Happy Valentine's</span>
              <br />
              <span className="font-script text-primary text-6xl">Day 💕</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
              ✨ Celebrate the season of love with beautiful memories, heartfelt messages,
              and romantic moments that last forever.
            </p>
            <p className="text-sm md:text-base text-primary/70 max-w-xl mx-auto mb-10 font-medium">
              "Love is not just what you feel, it's what you do."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 gap-2 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all">
                <Link to="/gallery">
                  <Sparkles className="h-5 w-5" />
                  Explore Gallery
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2 border-primary hover:bg-primary/10">
                <Link to="/love-notes">
                  <Heart className="h-5 w-5" />
                  Send Love
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 opacity-20 pointer-events-none">
          <Heart className="h-32 w-32 text-primary fill-primary animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 pointer-events-none">
          <Flame className="h-24 w-24 text-accent fill-accent animate-pulse" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Celebrate <span className="text-gradient">Love</span> 💗
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Discover beautiful ways to express your affection and make this Valentine's Day unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Link key={feature.title} to={feature.link} className="group">
                <Card
                  className="h-full hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer border-primary/30 bg-gradient-to-br from-background to-primary/5"
                >
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-accent/40 transition-all group-hover:scale-110">
                      <feature.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground flex-grow leading-relaxed">{feature.description}</p>
                    <div className="mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Explore →</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-love/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Heart className="h-64 w-64 text-primary fill-primary" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Heart className="h-12 w-12 text-primary fill-primary mx-auto mb-8 animate-pulse" />
          <blockquote className="text-2xl md:text-4xl font-script text-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            "The best thing to hold onto in life is each other." 💑
          </blockquote>
          <p className="text-muted-foreground text-lg">— Audrey Hepburn</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Share Your <span className="text-gradient">Love Story</span> 📖
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-10"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Every love story is beautiful, but yours is our favorite.
            Let's celebrate your unique journey together and create memories that will last a lifetime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-primary to-accent">
              <Link to="/about">Learn Our Story</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
