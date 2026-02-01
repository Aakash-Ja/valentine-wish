import { Heart, Sparkles, Users, Calendar, MapPin, Gift, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-romantic-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <Sparkles className="h-16 w-16 text-primary mx-auto mb-6 heart-float" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-gradient">Valentine Glow</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              ✨ Celebrating the most beautiful emotion in the world – love ✨
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Main Mission */}
        <div className="max-w-4xl mx-auto">
          {/* Story Section */}
          <Card className="mb-12 border-primary/20 bg-gradient-to-br from-background to-primary/5 shadow-lg shadow-primary/10">
            <CardContent className="p-10">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-8 w-8 text-primary fill-primary" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                💝 <strong>Valentine Glow</strong> was created to celebrate the most beautiful
                emotion in the world – <strong>love</strong>. We believe that every love story deserves
                to be cherished, celebrated, and remembered forever.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Whether you're celebrating with your significant other, your family,
                your friends, or practicing the most important love – self-love – this space is for you.
                Our curated collection of romantic imagery, heartfelt messages, and thoughtful gift
                ideas are designed to inspire and help you express your feelings in the most beautiful ways.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                💗 <strong>Love is universal</strong>, and we hope Valentine Glow brings a smile to your
                face and warmth to your heart every single day.
              </p>
            </CardContent>
          </Card>

          {/* Why We Created This */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why We Created <span className="text-gradient">Valentine Glow</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">For Every Love Story</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We celebrate all forms of love – romantic, platonic, family, and the love you have for yourself.
                    Every story is valid and deserves to be celebrated.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Express Your Feelings</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide beautiful tools to share love notes, create galleries of precious memories,
                    and find the perfect gifts to show your affection.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Build Connections</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Connect with your loved ones in meaningful ways. Share moments, exchange heartfelt
                    messages, and strengthen your bonds.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Global Community</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Love knows no boundaries. We celebrate beautiful love stories and romantic traditions
                    from around the world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* What We Offer */}
          <Card className="mb-12 border-primary/20 bg-gradient-to-br from-background to-accent/5 shadow-lg shadow-accent/10">
            <CardContent className="p-10">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Gift className="h-8 w-8 text-primary" />
                What We Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <span className="text-2xl">📸</span>
                    <div>
                      <h4 className="font-semibold mb-1">Beautiful Photo Gallery</h4>
                      <p className="text-muted-foreground text-sm">Curated romantic imagery to inspire your celebration</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-2xl">💌</span>
                    <div>
                      <h4 className="font-semibold mb-1">Love Notes</h4>
                      <p className="text-muted-foreground text-sm">Express and share your deepest feelings with ease</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <span className="text-2xl">🎁</span>
                    <div>
                      <h4 className="font-semibold mb-1">Gift Inspiration</h4>
                      <p className="text-muted-foreground text-sm">Thoughtful present ideas for your special someone</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-2xl">🌙</span>
                    <div>
                      <h4 className="font-semibold mb-1">Beautiful Design</h4>
                      <p className="text-muted-foreground text-sm">Dark and light modes that celebrate romance</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Valentine's Day History */}
          <Card className="mb-12 border-primary/20">
            <CardContent className="p-10">
              <h2 className="text-3xl font-bold mb-6">The History of Valentine's Day 📖</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Valentine's Day, celebrated on February 14th, has its origins in ancient Roman and Christian traditions.
                  The holiday is named after Saint Valentine, a Christian martyr who lived in the 3rd century.
                </p>
                <p>
                  Over the centuries, Valentine's Day evolved from a religious observance into a beautiful celebration
                  of romantic love. Today, it's celebrated worldwide with the exchange of cards, flowers, chocolates,
                  and heartfelt tokens of affection.
                </p>
                <p>
                  Modern Valentine's Day has beautifully expanded to celebrate all forms of love – romantic partners,
                  family bonds, friendships, and even self-love. It reminds us that love is universal and deserves
                  celebration every single day.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12 text-center mb-12">
            <h3 className="text-2xl font-bold mb-6">Ready to Celebrate Love? 💕</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Explore our beautiful features and start sharing your love story today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-primary to-accent">
                <Link to="/gallery">
                  <span>📸 Explore Gallery</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <Link to="/love-notes">
                  <span>💌 Send Love Notes</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="text-center bg-background border border-primary/20 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">💖 Meet the Creator</h3>
            <p className="text-muted-foreground mb-6">
              Valentine Glow was crafted with love and passion to celebrate romance.
            </p>
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
