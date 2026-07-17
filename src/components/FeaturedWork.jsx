import { useState } from "react";
import { portfolio } from "../data/content";
import { workImages } from "../data/images";

export default function FeaturedWork() {
  const [active, setActive] = useState(0);
  const item = portfolio[active];

  const go = (dir) =>
    setActive((v) => (v + dir + portfolio.length) % portfolio.length);

  return (
    <section id="work" className="bg-cream pt-24 md:pt-32 pb-4">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-8">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-ink/50 mb-3">
          Featured Work
        </p>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-ink">
          Work That
          <br />
          Moves Culture.
        </h2>
      </div>

      <div className="max-w-[1920px] mx-auto px-2 sm:px-4">
        <div className="relative aspect-[16/10] sm:aspect-[16/8] w-full overflow-hidden bg-ink">
          <img
            src={workImages[item.id]}
            alt={item.title}
            className="w-full h-full object-cover opacity-80 transition-opacity duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <span className="absolute top-6 right-6 text-cream/50 text-xs font-mono">
            {item.year}
          </span>

          <div className="absolute bottom-0 left-0 p-6 sm:p-10 max-w-lg">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-cream/60 mb-2">
              {item.category}
            </p>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-cream mb-2">
              {item.title}
            </h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="absolute bottom-6 right-6 sm:right-10 flex items-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous project"
              className="w-9 h-9 rounded-full border border-cream/30 text-cream flex items-center justify-center hover:bg-cream hover:text-ink transition-colors"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next project"
              className="w-9 h-9 rounded-full border border-cream/30 text-cream flex items-center justify-center hover:bg-cream hover:text-ink transition-colors"
            >
              →
            </button>
            <span className="text-cream/60 text-xs font-mono ml-2">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(portfolio.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
