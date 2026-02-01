import { Heart, Sparkles, Users, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen py-12 bg-romantic-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-4 heart-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Celebrating love and spreading joy this Valentine's Day
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Story Section */}
          <Card className="mb-8 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary fill-primary" />
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Valentine's website was created to celebrate the most beautiful 
                emotion in the world – love. We believe that every love story deserves 
                to be cherished and celebrated.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Whether you're celebrating with your significant other, your family, 
                your friends, or practicing self-love, this space is for you. Our 
                curated collection of romantic imagery, heartfelt quotes, and gift 
                ideas are designed to inspire and help you express your feelings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Love is universal, and we hope this website brings a smile to your 
                face and warmth to your heart.
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">For Everyone</h3>
                <p className="text-muted-foreground text-sm">
                  Whether you're in a relationship or celebrating friendship and 
                  family, our content is designed to spread love in all its forms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <Calendar className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Valentine's Day 2026</h3>
                <p className="text-muted-foreground text-sm">
                  February 14th is just around the corner! Plan your perfect 
                  celebration with our gift ideas and romantic inspiration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <Sparkles className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Inspiration</h3>
                <p className="text-muted-foreground text-sm">
                  Browse our gallery of romantic images, read beautiful quotes, 
                  and find the perfect way to express your love.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Global Love</h3>
                <p className="text-muted-foreground text-sm">
                  Love knows no boundaries. We celebrate love stories from 
                  around the world and across all cultures.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Valentine's History */}
          <Card className="mb-8 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">The History of Valentine's Day</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Valentine's Day, celebrated on February 14th, has its origins in 
                ancient Roman and Christian traditions. The holiday is named after 
                Saint Valentine, a Christian martyr who lived in the 3rd century.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the centuries, Valentine's Day evolved from a religious 
                observance into a celebration of romantic love. Today, it's 
                celebrated worldwide with the exchange of cards, flowers, 
                chocolates, and other tokens of affection.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Modern Valentine's Day has expanded to celebrate all forms of 
                love – romantic partners, family, friends, and even pets!
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">
              Meet the Developer
            </h3>
            <Button asChild size="lg" className="rounded-full px-8 gap-2">
              <Link to="/developer">
                <Heart className="h-5 w-5" />
                View Developer Profile
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
