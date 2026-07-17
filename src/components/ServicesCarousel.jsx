import { useEffect, useState } from "react";
import { services } from "../data/content";

const tickerItems = services.map((s) => s.title);

export default function ServicesCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % services.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const current = services[active];
  const isDark = current.theme === "dark";

  return (
    <section id="services" className="relative">
      <div
        className={`relative h-[560px] md:h-[620px] transition-colors duration-500 ${
          isDark ? "bg-ink text-cream" : "bg-cream text-ink"
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 w-full h-full cursor-pointer"
          onClick={() => setActive((v) => (v + 1) % services.length)}
          aria-label="Next service"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-full flex flex-col justify-between py-10">
            <div className="flex items-center justify-between">
              <span
                className={`text-xs font-semibold tracking-[0.25em] ${
                  isDark ? "text-cream/50" : "text-ink/50"
                }`}
              >
                {current.index} / 0{services.length}
              </span>
              <span
                className={`text-xs font-semibold tracking-[0.25em] uppercase ${
                  isDark ? "text-cream/50" : "text-ink/50"
                }`}
              >
                Services
              </span>
            </div>

            <div className="text-left">
              <h2
                className={`font-display font-extrabold uppercase leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 ${
                  current.italic ? "italic font-medium normal-case" : ""
                }`}
              >
                {current.title}
              </h2>
              <p
                className={`text-sm md:text-base tracking-wide uppercase ${
                  isDark ? "text-cream/60" : "text-ink/60"
                } ${current.italic ? "normal-case text-base md:text-lg" : ""}`}
              >
                {current.tagline}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {services.map((s, i) => (
                  <span
                    key={s.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(i);
                    }}
                    className={`h-[3px] rounded-full transition-all duration-300 cursor-pointer ${
                      i === active
                        ? `w-8 ${isDark ? "bg-cream" : "bg-ink"}`
                        : `w-3 ${isDark ? "bg-cream/25" : "bg-ink/20"}`
                    }`}
                  />
                ))}
              </div>
              <span
                className={`text-xs font-semibold tracking-[0.25em] uppercase ${
                  isDark ? "text-cream/50" : "text-ink/50"
                }`}
              >
                Tap to Explore
              </span>
            </div>
          </div>
        </button>
      </div>

      <div className="bg-ink text-cream border-t border-cream/10 overflow-hidden">
        <div className="flex whitespace-nowrap py-4 marquee-track w-max">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className={`flex items-center text-xs font-semibold tracking-[0.2em] uppercase px-6 ${
                item === current.title ? "text-cream" : "text-cream/35"
              }`}
            >
              {item}
              <span className="mx-6 text-cream/25" aria-hidden="true">
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
