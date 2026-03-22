import Link from "next/link";
import SectionObserver from "@/components/SectionObserver";

const valueProps = [
  {
    title: "Proactive Threat Detection",
    description:
      "We identify reputation risks before they surface. Our systems monitor mentions across social, news, dark web, and political channels in real-time.",
  },
  {
    title: "Dedicated Handler",
    description:
      "Every client is assigned a full-time intelligence handler who knows your political landscape intimately.",
  },
  {
    title: "Proprietary AI Models",
    description:
      "Our custom-trained language models analyze political discourse patterns no off-the-shelf tool can detect.",
  },
  {
    title: "Defense-Grade Operations",
    description:
      "Our team applies methodologies from Israeli defense intelligence to the world of political reputation.",
  },
];

const trustSignals = [
  "Founded by veterans of Israeli Defense Intelligence",
  "Serving elected officials across two continents",
  "Monitoring 270,000+ sources in 15+ languages",
  "Custom LLM models trained on political discourse corpora",
];

const team = [
  {
    initials: "M",
    name: "Michal",
    role: "Co-founder & Head of Operations",
    bio: "Former Israeli Defense Intelligence officer. Leads client relationships and operational delivery.",
  },
  {
    initials: "D",
    name: "Dean",
    role: "Co-founder & CTO",
    bio: "Former Israeli Defense Intelligence engineer. Architect of IMD\u2019s real-time monitoring and alert infrastructure.",
  },
  {
    initials: "I",
    name: "Irit",
    role: "Co-founder & Head of Product",
    bio: "Former Israeli Defense Intelligence engineer. Leads the client-facing intelligence dashboard and reporting systems.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        {/* Subtle radar background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
          <svg
            className="radar-sweep w-[800px] h-[800px]"
            viewBox="0 0 800 800"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="400" cy="400" r="380" stroke="white" strokeWidth="1" />
            <circle cx="400" cy="400" r="260" stroke="white" strokeWidth="0.5" />
            <circle cx="400" cy="400" r="140" stroke="white" strokeWidth="0.5" />
            <line x1="400" y1="400" x2="400" y2="20" stroke="white" strokeWidth="1.5" />
            <path
              d="M400 400 L400 20 A380 380 0 0 1 680 200 Z"
              fill="white"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Topo-line pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" aria-hidden="true">
            <pattern
              id="topo"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 100 Q50 80 100 100 T200 100"
                fill="none"
                stroke="white"
                strokeWidth="0.8"
              />
              <path
                d="M0 60 Q50 40 100 60 T200 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
              <path
                d="M0 140 Q50 120 100 140 T200 140"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#topo)" />
          </svg>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 py-28 md:py-40 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Your reputation is an asset. We defend it.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-light max-w-2xl mx-auto">
            Proactive mention intelligence for political leaders. Built by
            former Israeli defense officers.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 bg-white text-primary font-body font-semibold text-lg px-8 py-4 rounded-[4px] hover:bg-primary-light transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>

      {/* ─── What We Do ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionObserver>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center">
              What We Do
            </h2>
            <div className="w-12 h-[3px] bg-accent mx-auto mt-4" />
          </SectionObserver>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueProps.map((prop) => (
              <SectionObserver key={prop.title}>
                <div className="border border-base-light rounded-[4px] p-8 h-full">
                  <h3 className="font-heading text-xl md:text-2xl text-primary">
                    {prop.title}
                  </h3>
                  <p className="mt-3 text-base-dark text-lg leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </SectionObserver>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust Signals ─── */}
      <section className="bg-base-lightest py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionObserver>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center">
              Why IMD
            </h2>
            <div className="w-12 h-[3px] bg-accent mx-auto mt-4" />
          </SectionObserver>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {trustSignals.map((signal) => (
              <SectionObserver key={signal}>
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <p className="text-base-darkest text-lg font-body">{signal}</p>
                </div>
              </SectionObserver>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionObserver>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center">
              Leadership
            </h2>
            <div className="w-12 h-[3px] bg-accent mx-auto mt-4" />
          </SectionObserver>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member) => (
              <SectionObserver key={member.name}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-2xl font-heading font-bold">
                    {member.initials}
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-body font-semibold text-base-dark">
                    {member.role}
                  </p>
                  <p className="mt-3 text-base-dark text-base leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </SectionObserver>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Band ─── */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
            Ready to secure your reputation?
          </h2>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-primary font-body font-semibold text-lg px-8 py-4 rounded-[4px] hover:bg-primary-light transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
