import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import productSpotlight from "@/assets/product-spotlight.png";

const DistributorCTA = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "High Growth Market",
      description: "Join a rapidly expanding energy drink brand",
    },
    {
      icon: Users,
      title: "Strong Support",
      description: "Comprehensive training and marketing support",
    },
    {
      icon: Target,
      title: "Premium Margins",
      description: "Competitive pricing and profit opportunities",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Start Your Journey With Us
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the RAOZI family and become part of an energetic, ambitious network of 
              distributors. Build your business with a premium brand that stands out.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                    <p className="opacity-80">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/distributor">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-lg shadow-2xl hover:scale-105 transition-all group"
              >
                Become a Distributor
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full" />
            <img
              src={productSpotlight}
              alt="Join RAOZI"
              className="relative z-10 w-full max-w-md mx-auto animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributorCTA;
