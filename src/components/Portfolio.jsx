import { useState } from "react";
import { portfolio, workCategories, stats } from "../data/content";
import { workImages } from "../data/images";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? portfolio
      : portfolio.filter((p) => p.category === filter);

  return (
    <section className="bg-cream pt-16 md:pt-20 pb-24 md:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-ink/50">
            Full Portfolio
          </p>
          <div className="flex flex-wrap gap-2">
            {workCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`text-xs font-semibold tracking-wider uppercase px-4 py-2.5 border transition-colors ${
                  filter === cat
                    ? "bg-ink text-cream border-ink"
                    : "border-ink/20 text-ink/60 hover:border-ink/50 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/5] bg-ink overflow-hidden group"
            >
              <img
                src={workImages[item.id]}
                alt={item.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute top-4 left-4 text-cream/50 text-[11px] font-mono">
                {item.year}
              </span>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-cream/60 mb-1">
                  {item.category}
                </p>
                <h3 className="font-display font-bold text-lg sm:text-xl text-cream">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-20 md:mt-28">
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-ink/10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-r border-b border-ink/10 px-6 py-10 md:py-14 text-center"
            >
              <div className="font-display font-extrabold text-4xl md:text-5xl text-ink mb-2">
                {s.value}
              </div>
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-ink/45">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
