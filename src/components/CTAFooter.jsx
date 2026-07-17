import { LogoWatermark } from "./Logo";

export default function CTAFooter() {
  return (
    <footer id="contact" className="relative bg-ink text-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-28 pb-14 relative">
        <div
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-cream/10 hidden lg:flex items-center justify-center"
          aria-hidden="true"
        >
          <LogoWatermark tone="dark" className="w-40 h-40 opacity-[0.2]" />
        </div>

        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-cream/50 mb-6">
          Let&rsquo;s Work Together
        </p>
        <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[0.95] mb-10 max-w-2xl">
          Ready to go
          <br />
          beyond content?
        </h2>

        <a
          href="mailto:hello@auriginmedia.com"
          className="inline-flex items-center gap-2 bg-cream text-ink text-xs font-semibold tracking-wider uppercase px-6 py-4 hover:bg-white transition-colors"
        >
          Start a Project <span aria-hidden="true">→</span>
        </a>

        <div className="mt-20 pt-8 border-t border-cream/15 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-cream/60">
          <a
            href="mailto:hello@auriginmedia.com"
            className="hover:text-cream transition-colors"
          >
            hello@auriginmedia.com
          </a>
          <a href="#" className="hover:text-cream transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-cream transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-cream transition-colors">
            Behance
          </a>
          <span className="ml-auto text-cream/30">
            © {new Date().getFullYear()} Aurigin Media
          </span>
        </div>
      </div>
    </footer>
  );
}
