import Link from "next/link";
import SectionObserver from "@/components/SectionObserver";

const valueProps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    title: "Proactive Threat Detection",
    description:
      "We identify reputation risks before they surface. Our systems monitor mentions across social, news, dark web, and political channels in real-time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "Dedicated Handler",
    description:
      "Every client is assigned a full-time intelligence handler who knows your political landscape intimately.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "Proprietary AI Models",
    description:
      "Our custom-trained language models analyze political discourse patterns no off-the-shelf tool can detect.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Defense-Grade Operations",
    description:
      "Our team applies methodologies from Israeli defense intelligence to the world of political reputation.",
  },
];

const trustSignals = [
  { number: "8200", label: "Unit pedigree in our founding team" },
  { number: "2", label: "Continents served" },
  { number: "270K+", label: "Sources monitored in real-time" },
  { number: "15+", label: "Languages analyzed" },
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
      <section className="relative bg-primary-dark text-white overflow-hidden min-h-[85vh] flex items-center">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <svg width="100%" height="100%" aria-hidden="true">
            <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0V60H0" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Radar sweep */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
          <svg className="radar-sweep w-[900px] h-[900px]" viewBox="0 0 800 800" fill="none" aria-hidden="true">
            <circle cx="400" cy="400" r="380" stroke="white" strokeWidth="0.5" />
            <circle cx="400" cy="400" r="280" stroke="white" strokeWidth="0.3" />
            <circle cx="400" cy="400" r="180" stroke="white" strokeWidth="0.3" />
            <circle cx="400" cy="400" r="80" stroke="white" strokeWidth="0.3" />
            <line x1="400" y1="400" x2="400" y2="20" stroke="white" strokeWidth="1" />
            <path d="M400 400 L400 20 A380 380 0 0 1 680 200 Z" fill="white" opacity="0.2" />
          </svg>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-dark to-transparent pointer-events-none" />

        <div className="relative max-w-[1200px] mx-auto px-6 py-32 md:py-44 text-center w-full">
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-5 py-2 mb-8 text-sm text-primary-light tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            Defense Intelligence for Political Leaders
          </div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto">
            Your reputation is an asset.
            <br />
            <span className="text-primary-light">We defend it.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-primary-light/80 max-w-2xl mx-auto leading-relaxed">
            Proactive mention intelligence for political leaders. Built by
            former Israeli defense officers. Absolute discretion guaranteed.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary font-body font-semibold text-lg px-10 py-4 rounded-[4px] hover:bg-primary-light transition-colors"
            >
              Request a Consultation
            </Link>
            <a
              href="#what-we-do"
              className="inline-block border border-white/30 text-white font-body font-semibold text-lg px-10 py-4 rounded-[4px] hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ─── What We Do ─── */}
      <section id="what-we-do" className="bg-white py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionObserver>
            <p className="text-center text-sm font-semibold tracking-widest uppercase text-accent mb-3">
              Capabilities
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center">
              What We Do
            </h2>
            <div className="w-12 h-[3px] bg-accent mx-auto mt-4" />
          </SectionObserver>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            {valueProps.map((prop) => (
              <SectionObserver key={prop.title}>
                <div className="border border-base-light rounded-[4px] p-10 h-full hover:border-primary/30 transition-colors group">
                  <div className="text-primary mb-5 group-hover:text-accent transition-colors">
                    {prop.icon}
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl text-primary font-bold">
                    {prop.title}
                  </h3>
                  <p className="mt-4 text-base-dark text-lg leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </SectionObserver>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Numbers / Trust ─── */}
      <section className="bg-primary py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {trustSignals.map((signal) => (
              <SectionObserver key={signal.label}>
                <div className="text-center">
                  <p className="font-heading text-4xl md:text-5xl font-bold text-white">
                    {signal.number}
                  </p>
                  <p className="mt-3 text-primary-light text-sm md:text-base tracking-wide uppercase">
                    {signal.label}
                  </p>
                </div>
              </SectionObserver>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust Credentials ─── */}
      <section className="bg-base-lightest py-24 md:py-32">
        <div className="max-w-[900px] mx-auto px-6">
          <SectionObserver>
            <p className="text-center text-sm font-semibold tracking-widest uppercase text-accent mb-3">
              Credentials
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center">
              Why IMD
            </h2>
            <div className="w-12 h-[3px] bg-accent mx-auto mt-4" />
          </SectionObserver>

          <div className="mt-16 space-y-6">
            {[
              "Founded by veterans of Israeli Defense Intelligence",
              "Serving elected officials across two continents",
              "Custom LLM models trained on political discourse corpora",
              "Defense-grade operational security for every engagement",
            ].map((signal) => (
              <SectionObserver key={signal}>
                <div className="flex items-center gap-5 bg-white rounded-[4px] px-8 py-5 border border-base-light">
                  <div className="w-1 h-8 bg-accent rounded-full shrink-0" />
                  <p className="text-base-darkest text-lg font-body">{signal}</p>
                </div>
              </SectionObserver>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionObserver>
            <p className="text-center text-sm font-semibold tracking-widest uppercase text-accent mb-3">
              Our Team
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center">
              Leadership
            </h2>
            <div className="w-12 h-[3px] bg-accent mx-auto mt-4" />
          </SectionObserver>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member) => (
              <SectionObserver key={member.name}>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-3xl font-heading font-bold border-4 border-primary-light">
                    {member.initials}
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm font-body font-semibold text-accent uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="mt-4 text-base-dark text-base leading-relaxed max-w-xs mx-auto">
                    {member.bio}
                  </p>
                </div>
              </SectionObserver>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Band ─── */}
      <section className="relative bg-primary-dark py-24 md:py-28 text-center overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <svg width="100%" height="100%" aria-hidden="true">
            <pattern id="grid2" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0V60H0" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid2)" />
          </svg>
        </div>

        <div className="relative max-w-[800px] mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
            Your reputation cannot afford to be reactive.
          </h2>
          <p className="mt-6 text-primary-light/80 text-lg max-w-xl mx-auto">
            Join the political leaders who trust IMD to monitor, detect, and
            defend their public standing.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 bg-white text-primary font-body font-semibold text-lg px-10 py-4 rounded-[4px] hover:bg-primary-light transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
