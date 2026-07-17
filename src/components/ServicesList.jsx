import { useState } from "react";
import { services } from "../data/content";

export default function ServicesList() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-ink">
            Engineered
            <br />
            for Influence.
          </h2>
          <p className="text-ink/60 max-w-xs leading-relaxed">
            Five integrated disciplines working in concert to build brands
            that lead culture rather than follow it.
          </p>
        </div>

        <div className="border-t border-ink/10">
          {services.map((s, i) => (
            <a
              href="#work"
              key={s.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group flex items-center gap-6 md:gap-10 py-7 border-b border-ink/10 transition-colors hover:bg-ink hover:text-cream -mx-6 px-6 md:-mx-10 md:px-10"
            >
              <span
                className={`text-xs font-mono ${
                  hovered === i ? "text-cream/60" : "text-ink/40"
                }`}
              >
                {s.index}
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl flex-1">
                {s.title}
              </h3>
              <p
                className={`hidden md:block text-sm max-w-sm text-right ${
                  hovered === i ? "text-cream/70" : "text-ink/50"
                }`}
              >
                {s.description}
              </p>
              <span
                className={`text-xl transition-transform duration-300 ${
                  hovered === i ? "translate-x-1" : ""
                }`}
                aria-hidden="true"
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
