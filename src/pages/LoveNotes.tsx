import { useState } from "react";
import { Heart, Send, Quote, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const loveQuotes = [
  {
    quote: "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.",
    author: "Gabriel García Márquez"
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss"
  },
  {
    quote: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn"
  },
  {
    quote: "I love you not only for what you are, but for what I am when I am with you.",
    author: "Roy Croft"
  },
  {
    quote: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    author: "Maya Angelou"
  },
  {
    quote: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle"
  },
  {
    quote: "Whatever our souls are made of, his and mine are the same.",
    author: "Emily Brontë"
  },
  {
    quote: "I would rather spend one lifetime with you, than face all the ages of this world alone.",
    author: "J.R.R. Tolkien"
  },
];

const LoveNotes = () => {
  const [customNote, setCustomNote] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success("Quote copied to clipboard!");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSendNote = () => {
    if (customNote.trim()) {
      toast.success("Your love note has been created! 💕");
      setCustomNote("");
    }
  };

  return (
    <div className="min-h-screen py-12 bg-romantic-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 text-primary fill-primary mx-auto mb-4 heart-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Love <span className="text-primary">Notes</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Express your love with beautiful quotes and heartfelt messages
          </p>
        </div>

        {/* Custom Note Creator */}
        <Card className="max-w-2xl mx-auto mb-12 border-primary/20">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              Write Your Love Note
            </h2>
            <Textarea
              placeholder="Write your heartfelt message here..."
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              className="min-h-[120px] mb-4 resize-none"
            />
            <Button 
              onClick={handleSendNote}
              className="w-full rounded-full gap-2"
              disabled={!customNote.trim()}
            >
              <Heart className="h-4 w-4" />
              Create Love Note
            </Button>
          </CardContent>
        </Card>

        {/* Quotes Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Quote className="h-6 w-6 text-primary" />
            Romantic Quotes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {loveQuotes.map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground italic leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground font-medium">
                      — {item.author}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => copyToClipboard(`"${item.quote}" — ${item.author}`, index)}
                    >
                      {copiedIndex === index ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Decorative Hearts */}
        <div className="text-center mt-12">
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Heart 
                key={i} 
                className="h-6 w-6 text-primary fill-primary animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveNotes;
