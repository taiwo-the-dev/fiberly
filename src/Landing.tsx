import Logo from "./components/Logo";
import Button from "./components/Button";

const foods = [
  { emoji: "🫘", name: "Lentils", g: "15.6g" },
  { emoji: "🥑", name: "Avocado", g: "10g" },
  { emoji: "🍐", name: "Pear", g: "5.5g" },
  { emoji: "🥦", name: "Broccoli", g: "5g" },
  { emoji: "🌾", name: "Oats", g: "4g" },
  { emoji: "🍠", name: "Sweet potato", g: "3.8g" },
];

const steps = [
  {
    n: "1",
    title: "Tell us about you",
    text: "Age and gender give your recommended daily fibre target.",
  },
  {
    n: "2",
    title: "Build your meal",
    text: "Pick a meal of the day and search from hundreds of foods.",
  },
  {
    n: "3",
    title: "See your score",
    text: "Get your meal’s fibre as a share of your daily goal, and share it.",
  },
];

const stats = [
  { value: "~15g", label: "average daily fibre intake in the US" },
  { value: "25–38g", label: "recommended for most adults" },
  { value: "90%", label: "of people fall short of their target" },
];

const benefits = [
  {
    emoji: "🦠",
    title: "Happier gut bacteria",
    text: "Fibre feeds the good microbes that keep your digestion running smoothly.",
  },
  {
    emoji: "🚽",
    title: "Regular digestion",
    text: "Helps prevent constipation and keeps things moving comfortably.",
  },
  {
    emoji: "❤️",
    title: "Heart health",
    text: "Soluble fibre helps lower LDL cholesterol and supports healthy blood pressure.",
  },
  {
    emoji: "🍽️",
    title: "Fuller for longer",
    text: "High-fibre meals keep you satisfied and support healthy weight management.",
  },
  {
    emoji: "📉",
    title: "Steadier blood sugar",
    text: "Fibre slows sugar absorption, avoiding sharp spikes and crashes.",
  },
  {
    emoji: "⚡",
    title: "More steady energy",
    text: "Slow-release carbs mean fewer afternoon slumps.",
  },
];

const targets = [
  { group: "Children 1–3", male: "19g", female: "19g" },
  { group: "Children 4–8", male: "25g", female: "25g" },
  { group: "Ages 9–13", male: "31g", female: "26g" },
  { group: "Ages 14–18", male: "38g", female: "26g" },
  { group: "Ages 19–50", male: "38g", female: "25g" },
  { group: "Ages 51+", male: "30g", female: "21g" },
];

const faqs = [
  {
    q: "What is dietary fibre?",
    a: "Fibre is the part of plant foods your body can’t fully digest. It comes in two kinds: soluble (oats, beans, fruit) and insoluble (whole grains, vegetables), and you need both.",
  },
  {
    q: "Where do the daily targets come from?",
    a: "They follow the Dietary Guidelines for Americans, based on your age and gender.",
  },
  {
    q: "Should I increase fibre quickly?",
    a: "No. Add it gradually over a few weeks and drink plenty of water to avoid bloating and gas.",
  },
  {
    q: "Is my data saved?",
    a: "No. There is no sign-up and nothing is stored. Everything stays in your browser.",
  },
  {
    q: "Is this medical advice?",
    a: "No. Fibrely is an educational tool. Speak to a doctor or dietitian about your individual needs.",
  },
];

const Ring = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
    <circle
      cx="100"
      cy="100"
      r="70"
      fill="none"
      stroke="rgba(255,255,255,.12)"
      strokeWidth="18"
    />
    <circle
      cx="100"
      cy="100"
      r="70"
      fill="none"
      stroke="#F5A524"
      strokeWidth="18"
      strokeLinecap="round"
      strokeDasharray="440"
      className="animate-ring"
    />
  </svg>
);

const Landing: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="text-left">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-125 h-125 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6">
          <nav className="flex items-center justify-between py-6">
            <Logo light />
            <a
              href="https://aboutguts.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-brand-tint/80 hover:text-white"
            >
              Aboutguts.com
            </a>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center py-14 lg:py-24">
            <div className="animate-fade-up">
              <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm text-accent font-medium">
                🌱 Free · 1 minute · No sign-up
              </span>
              <h1 className="font-display font-extrabold text-5xl lg:text-7xl leading-[1.05] mt-6">
                Know your fibre.
                <br />
                <span className="text-accent">Feed your gut.</span>
              </h1>
              <p className="mt-6 text-lg text-brand-tint/85 max-w-md leading-relaxed">
                Most of us eat half the fibre we need. Build any meal and
                instantly see how much of your daily goal it delivers.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button
                  onClick={onStart}
                  className="bg-accent! text-brand-dark! hover:bg-white! text-2xl px-12 py-4 shadow-xl shadow-accent/20"
                >
                  Start counting →
                </Button>
                <span className="text-sm text-brand-tint/70">
                  Based on US Dietary Guidelines
                </span>
              </div>
            </div>

            {/* Visual */}
            <div className="relative flex justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 animate-float">
                <Ring />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display font-extrabold text-6xl sm:text-7xl">
                    18<span className="text-3xl">g</span>
                  </span>
                  <span className="text-brand-tint/80 text-sm sm:text-base">
                    of 25g daily goal
                  </span>
                </div>
              </div>
              <div className="absolute top-2 right-2 sm:right-10 bg-white text-brand-dark rounded-2xl px-4 py-3 shadow-2xl rotate-6">
                <p className="text-xs text-brand-dark/60">Lunch</p>
                <p className="font-semibold">🥗 Lentil bowl</p>
              </div>
              <div className="absolute bottom-4 left-0 sm:left-6 bg-accent text-brand-dark rounded-2xl px-4 py-3 shadow-2xl -rotate-6 font-semibold">
                +72% of your goal
              </div>
            </div>
          </div>
        </div>

        <svg
          viewBox="0 0 1440 60"
          className="block w-full -mb-px"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 60V30C240 0 480 0 720 25s480 30 720 5v30z"
            fill="#f5faf4"
          />
        </svg>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display font-extrabold text-4xl text-brand-dark text-center">
          Three steps. Zero guesswork.
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-white rounded-3xl p-8 border border-brand/10 shadow-[0_10px_40px_-15px_rgba(15,61,42,0.25)] hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-tint text-brand font-display font-extrabold text-2xl flex items-center justify-center">
                {s.n}
              </div>
              <h3 className="font-semibold text-xl text-brand-dark mt-5">
                {s.title}
              </h3>
              <p className="mt-2 text-brand-dark/70 leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display font-extrabold text-4xl text-brand-dark text-center">
          Why fibre matters
        </h2>
        <p className="text-center text-brand-dark/70 mt-3 max-w-xl mx-auto">
          Small numbers on your plate, big effects on how you feel.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl p-7 bg-white border border-brand/10 hover:border-brand/40 transition-colors"
            >
              <div className="text-3xl w-14 h-14 rounded-2xl bg-accent-tint flex items-center justify-center">
                {b.emoji}
              </div>
              <h3 className="font-semibold text-lg text-brand-dark mt-4">
                {b.title}
              </h3>
              <p className="mt-2 text-brand-dark/70 leading-relaxed">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Food strip */}
      <section className="bg-brand-tint py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-extrabold text-4xl text-brand-dark text-center">
            Fibre is hiding in your favourites
          </h2>
          <p className="text-center text-brand-dark/70 mt-3">
            Typical fibre per serving
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {foods.map((f) => (
              <div
                key={f.name}
                className="bg-white rounded-2xl p-5 text-center shadow-sm"
              >
                <div className="text-4xl">{f.emoji}</div>
                <p className="font-medium text-brand-dark mt-2">{f.name}</p>
                <p className="font-display font-extrabold text-2xl text-brand">
                  {f.g}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily targets */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-display font-extrabold text-4xl text-brand-dark text-center">
          How much do you need?
        </h2>
        <p className="text-center text-brand-dark/70 mt-3">
          Daily fibre targets by age and gender
        </p>
        <div className="mt-10 bg-white rounded-3xl border border-brand/10 overflow-hidden shadow-[0_10px_40px_-15px_rgba(15,61,42,0.25)]">
          <div className="grid grid-cols-3 bg-brand-dark text-white font-semibold px-6 py-4">
            <span>Group</span>
            <span className="text-center">Male</span>
            <span className="text-center">Female</span>
          </div>
          {targets.map((t, i) => (
            <div
              key={t.group}
              className={`grid grid-cols-3 px-6 py-4 ${i % 2 ? "bg-brand-tint/60" : ""}`}
            >
              <span className="text-brand-dark">{t.group}</span>
              <span className="text-center font-display font-extrabold text-brand">
                {t.male}
              </span>
              <span className="text-center font-display font-extrabold text-brand">
                {t.female}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-tint py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-extrabold text-4xl text-brand-dark text-center">
            Questions, answered
          </h2>
          <div className="mt-10 flex flex-col gap-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white rounded-2xl px-6 py-5 border border-brand/10"
              >
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-brand-dark list-none">
                  {f.q}
                  <span className="text-brand text-2xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-brand-dark/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-brand-dark">
          Ready to see where you stand?
        </h2>
        <Button onClick={onStart} className="mt-8">
          Start counting
        </Button>
      </section>

      <footer className="bg-brand-dark py-8">
        <div className="flex flex-col items-center gap-y-2 text-brand-tint/80">
          <Logo light size={32} />
          <p className="text-sm">
            A fibre counter by{" "}
            <span className="text-accent font-semibold">Aboutguts.com</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
