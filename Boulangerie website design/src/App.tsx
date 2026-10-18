import { useEffect, useState } from "react";

const images = {
  hero: "https://images.unsplash.com/photo-1599819055803-717bba43890f?auto=format&fit=crop&w=1800&q=88",
  croissants:
    "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=1200&q=85",
  bread:
    "https://images.unsplash.com/photo-1559811814-e2c57b5e69df?auto=format&fit=crop&w=1200&q=85",
  baker:
    "https://images.unsplash.com/photo-1595801106239-faefa2cdcf75?auto=format&fit=crop&w=1400&q=85",
  cakes:
    "https://images.unsplash.com/photo-1583338917451-face2751d8d5?auto=format&fit=crop&w=1200&q=85",
  lunch:
    "https://images.unsplash.com/photo-1655279562015-047c3da9a271?auto=format&fit=crop&w=1200&q=85",
};

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "size-4 -rotate-45" : "size-4"}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <rect height="17" rx="5" stroke="currentColor" strokeWidth="1.7" width="17" x="3.5" y="3.5" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.7" fill="currentColor" r="1" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
      <path
        d="M8.3 4.5 10 8.3 7.8 10a14.6 14.6 0 0 0 6.2 6.2l1.7-2.2 3.8 1.7v3c0 .5-.4.9-.9.9A14.2 14.2 0 0 1 4.4 5.4c0-.5.4-.9.9-.9h3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function GrainMark({ light = false }: { light?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-9 w-7 ${light ? "text-[#f5eddf]" : "text-[#bc613f]"}`}
      fill="none"
      viewBox="0 0 32 48"
    >
      <path d="M16 46V7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M16 15C10 14 7 10 7 5c6 0 9 4 9 10ZM16 24c-6-1-9-5-9-10 6 0 9 4 9 10ZM16 33c-6-1-9-5-9-10 6 0 9 4 9 10ZM16 15c6-1 9-5 9-10-6 0-9 4-9 10ZM16 24c6-1 9-5 9-10-6 0-9 4-9 10ZM16 33c6-1 9-5 9-10-6 0-9 4-9 10Z" fill="currentColor" />
    </svg>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a aria-label="Le Fournil de Qwartz — Accueil" className="group flex items-center gap-3" href="#accueil">
      <GrainMark light={light} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] tracking-[-0.02em]">Le Fournil</span>
        <span className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.28em] opacity-70">
          de Qwartz
        </span>
      </span>
    </a>
  );
}

const products = [
  {
    title: "Nos pains",
    items: ["Baguette tradition", "Pain de campagne", "Pains spéciaux"],
    image: images.bread,
    alt: "Pain au levain tranché sur une table en bois",
  },
  {
    title: "Viennoiseries",
    items: ["Croissant au beurre", "Pain au chocolat", "Brioches & suisses"],
    image: images.croissants,
    alt: "Croissants dorés tout juste sortis du four",
  },
  {
    title: "Gâteaux & pâtisseries",
    items: ["Tartes de saison", "Éclairs & choux", "Gâteaux à partager"],
    image: images.cakes,
    alt: "Gâteaux et tartes aux fruits en vitrine",
  },
  {
    title: "Le salé",
    items: ["Sandwichs du jour", "Quiches maison", "Formules déjeuner"],
    image: images.lunch,
    alt: "Sandwich frais préparé pour le déjeuner",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden bg-[#f5eddf] text-[#2c211b]">
      <header className="absolute inset-x-0 top-0 z-40 border-b border-white/25 text-[#fffaf0]">
        <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
          <Brand light />

          <nav aria-label="Navigation principale" className="hidden items-center gap-9 lg:flex">
            {[
              ["Nos créations", "#creations"],
              ["Notre histoire", "#histoire"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                className="text-xs font-bold uppercase tracking-[0.16em] transition-opacity hover:opacity-60"
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a aria-label="Instagram" className="transition-opacity hover:opacity-60" href="https://www.instagram.com/le_fournil_de_qwartz" rel="noreferrer" target="_blank">
              <InstagramIcon />
            </a>
            <a
              className="flex items-center gap-3 border border-white/70 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-white hover:text-[#2c211b]"
              href="#visite"
            >
              Nous trouver
              <ArrowIcon diagonal />
            </a>
          </div>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="relative z-50 flex size-11 items-center justify-center border border-white/50 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className={`h-px w-full bg-current transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px w-full bg-current transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        <div
          className={`fixed inset-0 z-40 flex flex-col bg-[#3b563f] px-6 pb-10 pt-32 transition-transform duration-500 lg:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav aria-label="Navigation mobile" className="flex flex-col">
            {[
              ["Nos créations", "#creations"],
              ["Notre histoire", "#histoire"],
              ["Horaires", "#visite"],
              ["Contact", "#contact"],
            ].map(([label, href], index) => (
              <a
                className="font-display flex items-center justify-between border-b border-white/20 py-5 text-4xl"
                href={href}
                key={label}
                onClick={closeMenu}
              >
                {label}
                <span className="font-sans text-xs opacity-50">0{index + 1}</span>
              </a>
            ))}
          </nav>
          <p className="mt-auto max-w-xs text-sm leading-6 text-white/65">
            Du bon pain, du beurre et beaucoup de patience.
          </p>
        </div>
      </header>

      <section className="relative flex min-h-[640px] items-end bg-[#392a21] md:min-h-[760px]" id="accueil">
        <img
          alt="Pains artisanaux du Fournil de Qwartz"
          className="absolute inset-0 size-full object-cover object-center"
          src={images.hero}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,24,18,.82)_0%,rgba(34,24,18,.38)_58%,rgba(34,24,18,.16)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#211813]/55 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-10 pt-32 md:px-10 md:pb-20 md:pt-40 lg:px-16">
          <div className="max-w-5xl">
            <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3 md:mb-7">
              <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#f0c49b] md:text-xs">
              <span className="h-px w-8 bg-current" />
              Boulangerie artisanale
              </p>
              <a className="flex items-center gap-2 text-xs font-bold text-white" href="#avis">
                <span className="tracking-[0.12em] text-[#f2b46f]" aria-label="5 étoiles">★★★★★</span>
                <span>4,9/5</span>
                <span className="font-normal text-white/60">avis clients</span>
              </a>
            </div>
            <h1 className="font-display max-w-4xl text-[clamp(3.75rem,10vw,9rem)] leading-[0.78] tracking-[-0.055em] text-[#fffaf0]">
              Douceurs
              <span className="block pl-[12%] italic text-[#e9ad77]">& pains</span>
            </h1>
            <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:gap-14 md:mt-11">
              <p className="max-w-sm text-sm leading-6 text-white/78 md:text-lg md:leading-7">
                Du levain vivant, des ingrédients choisis et des mains passionnées. Ici, chaque journée commence au fournil.
              </p>
              <a
                className="group flex shrink-0 items-center gap-5 border-b border-white/55 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-white"
                href="#creations"
              >
                Découvrir nos créations
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 hidden size-28 items-center justify-center rounded-full border border-white/35 text-center text-[0.58rem] font-bold uppercase leading-4 tracking-[0.18em] text-white lg:flex">
            <span>
              Fait maison
              <br />
              chaque jour
            </span>
            <span className="absolute -bottom-1 right-3 size-3 rounded-full bg-[#d78057]" />
          </div>
        </div>
      </section>

      <div className="border-b border-[#cdbca9]/60 bg-[#efe2d0] py-4">
        <div className="marquee flex w-max items-center gap-10 whitespace-nowrap text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#6a5548]">
          {[0, 1].map((group) => (
            <div className="flex items-center gap-10" key={group}>
              <span>Pétris sur place</span><span className="text-[#bc613f]">✦</span>
              <span>Farines françaises</span><span className="text-[#bc613f]">✦</span>
              <span>Levain naturel</span><span className="text-[#bc613f]">✦</span>
              <span>Beurre AOP</span><span className="text-[#bc613f]">✦</span>
              <span>Fait avec patience</span><span className="text-[#bc613f]">✦</span>
            </div>
          ))}
        </div>
      </div>

      <section className="px-5 py-16 md:px-10 md:py-28 lg:px-16" id="creations">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-9 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Tout ce qu'on propose</p>
              <h2 className="font-display mt-4 text-4xl leading-none tracking-tight md:text-7xl">
                Du fournil <span className="italic text-[#9d593d]">à la vitrine.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#705e52] md:text-base">
              Du petit-déjeuner au déjeuner, tout est préparé sur place au fil de la journée.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-7 md:grid-cols-4 md:gap-5">
            {products.map((product, index) => (
              <article className="product-card group" key={product.title}>
                <div className="relative aspect-square overflow-hidden bg-[#d7c5af] md:aspect-[4/5]">
                  <img
                    alt={product.alt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    loading="lazy"
                    src={product.image}
                  />
                  <span className="absolute left-2 top-2 flex size-7 items-center justify-center rounded-full bg-[#f5eddf] text-[0.55rem] font-bold md:left-4 md:top-4 md:size-10 md:text-[0.62rem]">
                    0{index + 1}
                  </span>
                </div>
                <div className="border-b border-[#b9a895] py-4 md:py-6">
                  <div>
                    <h3 className="font-display text-xl leading-6 tracking-tight md:text-3xl">{product.title}</h3>
                    <ul className="mt-2 space-y-1 text-[0.68rem] leading-4 text-[#756156] md:text-sm md:leading-5">
                      {product.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3b563f] text-[#f8f0e5]" id="histoire">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden md:min-h-[460px] lg:min-h-[680px]">
            <img
              alt="Boulanger travaillant la pâte à la main"
              className="absolute inset-0 size-full object-cover object-center"
              loading="lazy"
              src={images.baker}
            />
            <div className="absolute inset-0 bg-[#2c211b]/10" />
            <div className="absolute bottom-6 left-6 border border-white/60 bg-[#3b563f]/85 px-5 py-4 backdrop-blur-sm">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em]">Le geste juste</p>
              <p className="font-display mt-1 text-2xl italic">depuis la première fournée</p>
            </div>
          </div>

          <div className="flex items-center px-6 py-14 md:px-14 md:py-20 lg:px-20 lg:py-24">
            <div className="max-w-xl">
              <p className="eyebrow text-[#e8ad77]">Notre histoire</p>
              <h2 className="font-display mt-4 text-4xl leading-[0.95] tracking-tight md:mt-5 md:text-7xl">
                Le temps fait
                <br />
                <span className="italic">bien les choses.</span>
              </h2>
              <p className="mt-6 text-sm leading-6 text-white/70 md:mt-9 md:text-lg md:leading-8">
                Au Fournil de Qwartz, nous croyons aux choses simples, quand elles sont bien faites. Une farine choisie avec soin, un levain nourri chaque jour, une pâte qui repose longtemps.
              </p>
              <p className="mt-5 hidden text-base leading-8 text-white/70 md:block md:text-lg">
                Nos pains et douceurs sont façonnés sur place, à la main, avec cette petite part d'imprévu qui rend l'artisanat si vivant.
              </p>
              <a className="group mt-7 inline-flex items-center gap-5 border-b border-white/40 pb-2 text-xs font-bold uppercase tracking-[0.18em] md:mt-10" href="#contact">
                Nous contacter
                <span className="transition-transform group-hover:translate-x-1"><ArrowIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d77f58] px-5 py-14 text-[#2c211b] md:px-10 md:py-20 lg:px-16" id="visite">
        <div className="mx-auto grid max-w-[1312px] gap-9 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em]">Passez nous voir</p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[0.92] tracking-tight md:mt-5 md:text-7xl">
              On garde votre
              <br />
              pain <span className="italic">au chaud.</span>
            </h2>
            <div className="mt-7 flex flex-wrap gap-3" id="contact">
              <a className="inline-flex items-center gap-3 bg-[#2c211b] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#f5eddf]" href="tel:+33141118000">
                <PhoneIcon /> 01 41 11 80 00
              </a>
              <a className="inline-flex items-center gap-3 border border-[#2c211b] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em]" href="https://www.instagram.com/le_fournil_de_qwartz" rel="noreferrer" target="_blank">
                <InstagramIcon /> Instagram
              </a>
            </div>
          </div>
          <div className="border-l border-[#2c211b]/35 pl-7 md:pl-10">
            <p className="font-display text-2xl">Ouvert du mardi au dimanche</p>
            <dl className="mt-7 space-y-3 text-sm">
              <div className="flex justify-between gap-6 border-b border-[#2c211b]/20 pb-3">
                <dt>Mardi — Vendredi</dt>
                <dd className="font-bold">6h30 — 19h30</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-[#2c211b]/20 pb-3">
                <dt>Samedi</dt>
                <dd className="font-bold">7h00 — 19h00</dd>
              </div>
              <div className="flex justify-between gap-6 pb-3">
                <dt>Dimanche</dt>
                <dd className="font-bold">7h00 — 13h00</dd>
              </div>
            </dl>
            <a className="mt-6 inline-flex items-center gap-4 border-b border-[#2c211b] pb-2 text-xs font-bold uppercase tracking-[0.15em]" href="https://maps.google.com/?q=55+Boulevard+Gallieni,+92390+Villeneuve-la-Garenne" rel="noreferrer" target="_blank">
              Itinéraire
              <ArrowIcon diagonal />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#efe2d0] px-5 py-10 md:px-10 md:py-14 lg:px-16" id="avis">
        <div className="mx-auto flex max-w-[1312px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm tracking-[0.14em] text-[#d77f58]" aria-label="5 étoiles">★★★★★</p>
            <p className="font-display mt-2 text-3xl md:text-4xl">Noté 4,9 sur 5 par nos clients</p>
          </div>
          <blockquote className="max-w-xl border-l border-[#bca995] pl-5 text-sm leading-6 text-[#705e52] md:text-base">
            "Une équipe accueillante, des viennoiseries généreuses et un pain qui reste excellent jusqu'au lendemain."
          </blockquote>
        </div>
      </section>

      <footer className="bg-[#2c211b] px-5 pb-24 pt-12 text-[#f5eddf] md:px-10 md:pb-8 md:pt-16 lg:px-16">
        <div className="mx-auto max-w-[1312px]">
          <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-3">
            <div>
              <Brand light />
              <p className="mt-6 max-w-xs text-sm leading-6 text-white/55">
                Douceurs, pains au levain et gourmandises artisanales façonnés avec cœur.
              </p>
            </div>
            <div>
              <p className="footer-label">Navigation</p>
              <div className="mt-5 flex flex-col items-start gap-3 text-sm text-white/70">
                <a className="hover:text-white" href="#creations">Nos créations</a>
                <a className="hover:text-white" href="#histoire">Notre histoire</a>
                <a className="hover:text-white" href="#contact">Nous contacter</a>
              </div>
            </div>
            <div id="instagram">
              <p className="footer-label">Restons gourmands</p>
              <a className="font-display mt-5 inline-flex items-center gap-3 text-2xl hover:text-[#e8ad77]" href="https://www.instagram.com/le_fournil_de_qwartz" rel="noreferrer" target="_blank">
                <InstagramIcon />
                @lefournildeqwartz
              </a>
              <p className="mt-3 text-sm text-white/50">Les coulisses du fournil, au quotidien.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-[0.62rem] uppercase tracking-[0.15em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 Le Fournil de Qwartz</p>
            <p>Artisan boulanger · Douceurs & pains</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/15 bg-[#2c211b] p-2 text-[#f5eddf] shadow-2xl md:hidden">
        <a className="flex items-center justify-center gap-3 py-3 text-xs font-bold uppercase tracking-[0.12em]" href="tel:+33141118000">
          <PhoneIcon /> Appeler · 01 41 11 80 00
        </a>
      </div>
    </main>
  );
}
