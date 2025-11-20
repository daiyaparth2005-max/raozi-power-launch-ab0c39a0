import { Zap, TrendingUp, Shield } from "lucide-react";

const BrandHighlights = () => {
  const highlights = [
    {
      icon: Zap,
      label: "CAFFEINE",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: TrendingUp,
      label: "POWER",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      label: "VITAMINS",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-4 hover:scale-110 transition-transform cursor-pointer"
            >
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${highlight.color} shadow-2xl group-hover:shadow-accent/50 transition-shadow`}>
                <highlight.icon className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-black tracking-wider">{highlight.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandHighlights;
