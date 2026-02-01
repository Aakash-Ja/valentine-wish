import { useState } from "react";
import { Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
    title: "Romantic Sunset",
    category: "nature",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    title: "Love Letters",
    category: "romance",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=800&q=80",
    title: "Red Roses",
    category: "flowers",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=80",
    title: "Heart Shaped",
    category: "romance",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&q=80",
    title: "Couple Silhouette",
    category: "couples",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1455459996098-2e5db9259eba?w=800&q=80",
    title: "Pink Flowers",
    category: "flowers",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    title: "Romantic Dinner",
    category: "romance",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=800&q=80",
    title: "Hearts & Flowers",
    category: "romance",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?w=800&q=80",
    title: "Beach Romance",
    category: "nature",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    title: "Spring Blossoms",
    category: "flowers",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&q=80",
    title: "Valentine Hearts",
    category: "romance",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800&q=80",
    title: "Love Birds",
    category: "nature",
  },
];

const categories = ["all", "romance", "flowers", "nature", "couples"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const currentIndex = selectedImage !== null 
    ? filteredImages.findIndex(img => img.id === selectedImage) 
    : -1;

  const navigateImage = (direction: "prev" | "next") => {
    if (currentIndex === -1) return;
    const newIndex = direction === "prev" 
      ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex].id);
  };

  return (
    <div className="min-h-screen py-12 bg-romantic-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 text-primary fill-primary mx-auto mb-4 heart-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Love <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A collection of beautiful romantic moments and imagery to inspire love
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="rounded-full capitalize"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <p className="text-white/70 text-sm capitalize">{image.category}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="h-6 w-6 text-white fill-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {selectedImage && (
                <img
                  src={filteredImages.find(img => img.id === selectedImage)?.url}
                  alt={filteredImages.find(img => img.id === selectedImage)?.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Gallery;
