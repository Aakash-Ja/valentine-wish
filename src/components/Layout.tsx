import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingHearts } from "./FloatingHearts";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <FloatingHearts />
      <Navbar />
      <main className="flex-1 pt-16 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
