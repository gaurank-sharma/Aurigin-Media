import { storyImage } from "../data/images";

const stats = [
  { value: "2026", label: "Founded" },
  { value: "40+", label: "Team Members" },
  { value: "3", label: "Continents" },
];

export default function BrandStory() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-ink/50 mb-6">
            Brand Story
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-ink mb-8">
            The Origin
            <br />
            of Influence.
          </h2>

          <div className="space-y-5 text-ink/65 leading-relaxed max-w-lg">
            <p>
              We exist at the intersection of culture and commerce. Aurigin
              was founded on the belief that great brands don&rsquo;t just
              sell products — they create movements, spark conversations, and
              leave a permanent mark on the cultural landscape.
            </p>
            <p>
              Our work spans strategy to execution, concept to culture. Every
              campaign we engineer is designed to transcend content and
              become something people actually feel.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 mt-12">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-extrabold text-3xl md:text-4xl text-ink">
                  {s.value}
                </div>
                <div className="text-xs font-semibold tracking-[0.15em] uppercase text-ink/45 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden bg-ink">
            <img
              src={storyImage}
              alt="Aurigin Media creative direction"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 left-6 bg-ink text-cream px-5 py-4 max-w-[220px]">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase leading-relaxed">
              Engineered
              <br />
              for Influence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
