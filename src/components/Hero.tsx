import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFire from "@/assets/hero-fire.jpg";
import heroDuoDark from "@/assets/hero-duo-dark.jpg";
import heroDuoLight from "@/assets/hero-duo-light.jpg";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    image: heroFire,
    title: "Energy For Leaders",
    subtitle: "Unleash Your Potential"
  }, {
    image: heroDuoDark,
    title: "Fuel Your Greatness",
    subtitle: "Explore Energy"
  }, {
    image: heroDuoLight,
    title: "Designed For Achievers",
    subtitle: "Premium Energy Experience"
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  return <section className="relative mt-[60px] md:mt-0 min-h-[56.25vw] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/40 via-black/60 to-brand-fire/40 z-10 py-0 px-0 mx-0 my-0" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,100,50,0.15),transparent_60%)] z-10 py-0 mx-0 my-0" />
          <img src={slide.image} alt={slide.title} style={{
        animationPlayState: index === currentSlide ? 'running' : 'paused'
      }} className="w-full h-full animate-[scale_20s_ease-in-out_infinite] [animation-play-state:paused] object-contain md:object-cover" />
        </div>)}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          
          
          
        </div>

        {/* Slide Indicators */}
        
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-br from-accent/30 to-brand-purple/30 hover:from-accent/50 hover:to-brand-purple/50 backdrop-blur-md p-3 rounded-full transition-all border border-white/20 shadow-[0_0_20px_rgba(238,91,43,0.3)] hover:shadow-[0_0_30px_rgba(238,91,43,0.6)] hover:scale-110">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-br from-accent/30 to-brand-purple/30 hover:from-accent/50 hover:to-brand-purple/50 backdrop-blur-md p-3 rounded-full transition-all border border-white/20 shadow-[0_0_20px_rgba(238,91,43,0.3)] hover:shadow-[0_0_30px_rgba(238,91,43,0.6)] hover:scale-110">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>;
};
export default Hero;