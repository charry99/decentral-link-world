const stats = [
  { value: "$24.8B", label: "Total Value Locked" },
  { value: "1.2B+", label: "Transactions" },
  { value: "8,400", label: "Validators" },
  { value: "99.99%", label: "Uptime" },
];

const Stats = () => {
  return (
    <section id="stats" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{s.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;