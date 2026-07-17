import { Link } from "react-router-dom";
import Logo, { LogoWatermark } from "../components/Logo";
import CTAFooter from "../components/CTAFooter";
import { team } from "../data/content";
import { teamPhotos } from "../data/images";

export default function Team() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-8 pb-24 md:pb-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-ink/60 hover:text-ink transition-colors mb-16 md:mb-20"
        >
          ← Back to Site
        </Link>

        <div className="relative">
          <div
            className="pointer-events-none absolute -right-10 -top-10 w-[420px] h-[420px] hidden lg:block"
            aria-hidden="true"
          >
            <LogoWatermark tone="light" className="w-full h-full opacity-[0.08]" />
          </div>

          <div className="flex items-center gap-3 mb-8">
            <Logo />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-ink/50">
              Meet the Team
            </span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-ink mb-8 max-w-3xl">
            The Minds Behind
            <br />
            the Movement.
          </h1>

          <p className="text-ink/60 leading-relaxed max-w-xl">
            Forty strategists, designers, storytellers, and data obsessives —
            organised around five disciplines, united by one belief: brands
            that lead culture, win.
          </p>
        </div>

        <div className="mt-20 md:mt-24 space-y-16 md:space-y-20">
          {team.map((group, i) => (
            <div key={group.group}>
              <div className="flex items-center gap-6 mb-10">
                <span className="text-xs font-mono text-ink/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 h-px bg-ink/10" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-ink">
                  {group.group}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-12">
                {group.members.map((member) => (
                  <div key={member.name}>
                    <div className="aspect-[3/4] w-full overflow-hidden bg-ink mb-4">
                      <img
                        src={teamPhotos[member.name]}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-display font-bold text-lg text-ink">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold tracking-[0.1em] uppercase text-ink/45 mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm italic text-ink/55 leading-relaxed">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTAFooter />
    </div>
  );
}
