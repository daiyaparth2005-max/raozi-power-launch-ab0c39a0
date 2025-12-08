import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMain from "@/assets/logo-main.png";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Become a Distributor", path: "/distributor" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 md:bg-transparent bg-background/95 backdrop-blur-md md:backdrop-blur-none border-b md:border-b-0 border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center transition-all duration-300 hover:scale-105 group"
          >
            <div className="relative">
              <img 
                alt="RAOZI Energy Drink" 
                className="h-12 md:h-14 relative z-10" 
                src={logoMain} 
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-6 py-2.5 rounded-full backdrop-blur-md border font-semibold text-sm tracking-wide transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-accent/30 to-brand-fire/30 border-accent/50 text-foreground shadow-[0_0_20px_rgba(238,91,43,0.4)]' 
                      : 'bg-white/10 dark:bg-white/5 border-white/10 text-foreground/90 hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle - Right Side */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-white/10 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-semibold text-sm tracking-wide hover:translate-x-2 transition-all duration-300 py-2 ${
                    isActive 
                      ? 'text-accent font-bold' 
                      : 'text-foreground/90 hover:text-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;