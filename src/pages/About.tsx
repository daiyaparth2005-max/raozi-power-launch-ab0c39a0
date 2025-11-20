import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Award, Zap } from "lucide-react";
import productDark from "@/assets/product-dark.png";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower leaders and achievers with premium energy solutions that fuel success.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a network of ambitious individuals who strive for excellence.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Uncompromising standards in every can we produce.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving to deliver the best energy experience.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 text-foreground">
                Energy For Leaders
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                RAOZI was born from a simple vision: to create an energy drink that matches 
                the intensity and ambition of modern leaders, athletes, and achievers.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We don't just provide energy – we fuel the relentless pursuit of excellence. 
                Every can is crafted with premium ingredients, delivering powerful performance 
                without compromise.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full animate-pulse-glow" />
              <img
                src={productDark}
                alt="RAOZI Energy Drink"
                className="relative z-10 w-full max-w-md mx-auto animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-black text-center mb-12">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-8 bg-card rounded-2xl border border-border hover:border-accent transition-all hover:shadow-xl hover:scale-105"
                >
                  <value.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="container mx-auto px-4 mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-8 text-center">What Makes RAOZI Powerful</h2>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent">High Caffeine Content</h3>
                  <p className="text-muted-foreground">
                    Optimized caffeine levels to provide sustained energy and focus without the crash.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent">Sugar-Free Formula</h3>
                  <p className="text-muted-foreground">
                    Zero sugar means pure energy without unnecessary calories or sugar crashes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent">Essential Vitamins</h3>
                  <p className="text-muted-foreground">
                    B-vitamins and essential nutrients to support peak physical and mental performance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent">Premium Flavor</h3>
                  <p className="text-muted-foreground">
                    Our mixed fruit flavor delivers a delicious taste experience that keeps you coming back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
