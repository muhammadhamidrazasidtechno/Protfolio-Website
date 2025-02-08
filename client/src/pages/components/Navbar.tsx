import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Home, User, Code, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/about", label: "About", icon: User, isPage: true },
  { href: "/skills", label: "Skills", icon: Code, isPage: true },
  { href: "/projects", label: "Projects", icon: Briefcase, isPage: true },
  { href: "/contact", label: "Contact", icon: Mail, isPage: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 text-lg font-bold">
              <Home className="h-5 w-5" />
              <span>Portfolio</span>
            </Button>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              className={`flex items-center gap-2 ${
                location === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              asChild
            >
              <Link href={link.href}>
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            </Button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {links.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className={`flex items-center gap-2 justify-start ${
                    location === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                  asChild
                >
                  <Link href={link.href}>
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}