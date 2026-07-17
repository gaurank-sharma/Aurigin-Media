import { LogoWatermark } from "./Logo";

export default function Hero() {
  return (
    <section className="relative bg-cream pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div
        className="pointer-events-none absolute hidden lg:block -right-24 top-1/2 -translate-y-1/2 w-[620px] h-[620px]"
        aria-hidden="true"
      >
        <LogoWatermark tone="light" className="w-full h-full opacity-[0.08]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <div className="flex items-center justify-between mb-16 md:mb-24">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-ink/50">
            Est. 2026 — New Delhi, India
          </p>
          <p className="hidden md:block text-xs font-semibold tracking-[0.25em] uppercase text-ink/50 text-right">
            Digital Marketing
            <br />& Media House
          </p>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center lg:hidden"
            aria-hidden="true"
          >
            <LogoWatermark
              tone="light"
              className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] opacity-[0.15]"
            />
          </div>

          <h1 className="relative z-10 font-display font-extrabold leading-[0.9] tracking-tight">
            <span className="block text-ink text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem]">
              Beyond
            </span>
            <span className="block text-ink text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem]">
              Content.
            </span>
            <span className="block text-stone text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem]">
              Into Culture.
            </span>
          </h1>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-6">
          <a
            href="#work"
            className="inline-flex items-center border border-ink text-ink text-xs font-semibold tracking-wider uppercase px-6 py-4 hover:bg-ink hover:text-cream transition-colors"
          >
            View Our Work
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-ink transition-colors"
          >
            Our Story <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/40">
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase">
          Scroll
        </span>
        <span className="w-px h-8 bg-ink/20" />
      </div>
    </section>
  );
}
