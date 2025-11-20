import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TrendingUp, Users, Target, Package, Handshake, BarChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import productSplash from "@/assets/product-splash.png";

const Distributor = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", location: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "High Growth Potential",
      description: "Join a rapidly expanding brand in the premium energy drink market.",
    },
    {
      icon: Users,
      title: "Marketing Support",
      description: "Comprehensive marketing materials and promotional campaigns.",
    },
    {
      icon: Target,
      title: "Exclusive Territories",
      description: "Protected distribution areas to maximize your market potential.",
    },
    {
      icon: Package,
      title: "Flexible Ordering",
      description: "Customized order quantities to match your business needs.",
    },
    {
      icon: Handshake,
      title: "Partnership Approach",
      description: "We work together as partners to ensure mutual success.",
    },
    {
      icon: BarChart,
      title: "Competitive Margins",
      description: "Attractive pricing structure with strong profit opportunities.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20 mb-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h1 className="text-5xl md:text-6xl font-black mb-6">
                  Become a RAOZI Distributor
                </h1>
                <p className="text-xl leading-relaxed opacity-90">
                  Partner with a premium energy drink brand that's designed for success. 
                  Build your business with RAOZI and join our network of ambitious distributors.
                </p>
              </div>
              <div className="relative">
                <img
                  src={productSplash}
                  alt="Join RAOZI"
                  className="w-full max-w-md mx-auto animate-float drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-4xl font-black text-center mb-12">Why Partner With RAOZI?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-accent transition-all hover:shadow-xl hover:scale-105"
              >
                <benefit.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-2xl">
              <h2 className="text-3xl font-black mb-6 text-center">Apply Now</h2>
              <p className="text-center text-muted-foreground mb-8">
                Fill out the form below and our team will get in touch with you to discuss partnership opportunities.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="location">Location/Territory of Interest *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="City, State, or Region"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Tell Us About Your Distribution Experience</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="mt-2"
                    placeholder="Share your background, experience, and why you want to distribute RAOZI..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-lg py-6"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Distributor;
