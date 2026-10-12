import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
export const metadata = { title: "About" };
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8">
      <Reveal dir="up">
        <p className="text-xs uppercase tracking-[0.24em] text-gold">About</p>
        <h1 className="mt-4 font-serif text-5xl">Who we are</h1>
      </Reveal>
      <Reveal dir="left" className="mt-8">
        <p className="leading-relaxed text-mist">Meridian is a Lagos real estate firm. We advise clients on residences, lettings, and a select number of developments across the city’s most established neighbourhoods.</p>
      </Reveal>
      <Reveal dir="right" className="mt-4">
        <p className="leading-relaxed text-mist">Our work is grounded in local knowledge. Every property is reviewed in person, with clear guidance from the first enquiry through to completion.</p>
      </Reveal>
      <div className="mt-16 grid gap-8 border-t border-line pt-10 text-center md:grid-cols-3">
        {[
          { to: 10, suffix: "+", label: "Years experience" },
          { to: 200, suffix: "+", label: "Properties" },
          { to: 5, suffix: "", label: "Prime locations" },
        ].map((s) => (
          <Reveal key={s.label} dir="up">
            <p className="text-center font-serif text-4xl text-gold">
              <CountUp to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-center text-sm text-mist">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
