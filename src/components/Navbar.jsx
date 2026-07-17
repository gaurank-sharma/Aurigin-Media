import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <Logo />

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink/80 hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#contact"
          className="hidden md:inline-flex items-center bg-ink text-cream text-xs font-semibold tracking-wider uppercase px-5 py-3 hover:bg-ink-soft transition-colors"
        >
          Get in Touch
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-px bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-t border-ink/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-base font-medium text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="inline-flex justify-center bg-ink text-cream text-xs font-semibold tracking-wider uppercase px-5 py-3"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
