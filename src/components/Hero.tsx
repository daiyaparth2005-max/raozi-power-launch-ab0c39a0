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
  return <section className="relative aspect-video md:aspect-auto md:min-h-screen flex items-center justify-center overflow-hidden mt-[60px] md:mt-0">
      {/* Background Slides */}
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/40 via-black/60 to-brand-fire/40 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,100,50,0.15),transparent_60%)] z-10" />
          <img src={slide.image} alt={slide.title} style={{
        animationPlayState: index === currentSlide ? 'running' : 'paused'
      }} className="w-full h-full animate-[scale_20s_ease-in-out_infinite] [animation-play-state:paused] object-cover" />
        </div>)}

      {/* Content */}
      <div className="relative z-20 container mx-auto text-center px-0">
        

        {/* Slide Indicators */}
        
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-transparent hover:bg-white/10 p-2 md:p-3 rounded-lg md:rounded-full transition-all border-2 border-white/60 hover:border-white">
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-transparent hover:bg-white/10 p-2 md:p-3 rounded-lg md:rounded-full transition-all border-2 border-white/60 hover:border-white">
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>
    </section>;
};
export default Hero;