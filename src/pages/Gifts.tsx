import { Heart, Gift, Flower2, Cake, Gem, Music, Camera, BookHeart, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const giftCategories = [
  {
    icon: Flower2,
    title: "Flowers & Plants",
    description: "Classic romantic gestures that never fail",
    ideas: ["Red Roses Bouquet", "Heart-shaped Arrangement", "Potted Orchids", "Dried Flower Set"],
    priceRange: "$25 - $150",
    romantic: true,
  },
  {
    icon: Gem,
    title: "Jewelry",
    description: "Timeless pieces to treasure forever",
    ideas: ["Heart Pendant Necklace", "Couple's Rings", "Diamond Earrings", "Charm Bracelet"],
    priceRange: "$50 - $500+",
    romantic: true,
  },
  {
    icon: Cake,
    title: "Sweet Treats",
    description: "Delicious ways to say 'I love you'",
    ideas: ["Chocolate Box", "Heart-shaped Cake", "Macarons Set", "Custom Cookies"],
    priceRange: "$20 - $100",
    romantic: false,
  },
  {
    icon: BookHeart,
    title: "Personalized Gifts",
    description: "Unique gifts with a personal touch",
    ideas: ["Photo Album", "Custom Love Letter", "Star Map", "Couple Portrait"],
    priceRange: "$30 - $200",
    romantic: true,
  },
  {
    icon: Music,
    title: "Experiences",
    description: "Create lasting memories together",
    ideas: ["Concert Tickets", "Spa Day", "Cooking Class", "Dance Lessons"],
    priceRange: "$50 - $300",
    romantic: true,
  },
  {
    icon: Camera,
    title: "Tech & Gadgets",
    description: "Modern gifts for modern lovers",
    ideas: ["Instant Camera", "Smart Watch", "Wireless Earbuds", "E-Reader"],
    priceRange: "$50 - $400",
    romantic: false,
  },
  {
    icon: Plane,
    title: "Travel & Adventure",
    description: "Plan your next romantic getaway",
    ideas: ["Weekend Trip", "Hot Air Balloon Ride", "Sunset Cruise", "Staycation"],
    priceRange: "$100 - $1000+",
    romantic: true,
  },
  {
    icon: Gift,
    title: "Gift Baskets",
    description: "Curated collections of love",
    ideas: ["Wine & Cheese", "Spa Essentials", "Movie Night Kit", "Breakfast in Bed"],
    priceRange: "$40 - $150",
    romantic: false,
  },
];

const Gifts = () => {
  return (
    <div className="min-h-screen py-12 bg-romantic-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Gift className="h-12 w-12 text-primary mx-auto mb-4 heart-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gift <span className="text-primary">Ideas</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find the perfect gift to show your love this Valentine's Day
          </p>
        </div>

        {/* Tips Section */}
        <div className="bg-card rounded-2xl p-6 md:p-8 mb-12 max-w-4xl mx-auto border border-primary/20">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary fill-primary" />
            Gift Giving Tips
          </h2>
          <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span>Consider their interests and hobbies</span>
            </li>
            <li className="flex items-start gap-2">
              <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span>Personalization adds extra meaning</span>
            </li>
            <li className="flex items-start gap-2">
              <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span>Experiences create lasting memories</span>
            </li>
            <li className="flex items-start gap-2">
              <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span>It's the thought that counts most</span>
            </li>
          </ul>
        </div>

        {/* Gift Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {giftCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  {category.romantic && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      <Heart className="h-3 w-3 mr-1 fill-primary" />
                      Romantic
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg mt-3">{category.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {category.ideas.map((idea) => (
                      <Badge 
                        key={idea} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-foreground"
                      >
                        {idea}
                      </Badge>
                    ))}
                  </div>
                  {/*<div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Price Range: <span className="font-medium text-foreground">{category.priceRange}</span>
                    </p>
                  </div>*/}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Remember, the best gift is <span className="text-primary font-semibold">your love</span>
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(7)].map((_, i) => (
              <Heart 
                key={i} 
                className="h-5 w-5 text-primary fill-primary animate-pulse"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
