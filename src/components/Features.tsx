type Feature = {
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    title: "Simple",
    description: "Focus on opportunities, not fees.",
  },
  {
    title: "Convenient",
    description: "One wallet for all your crypto.",
  },
  {
    title: "Multichain",
    description: "Connect to every dapp across 2,300+ chains.",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


