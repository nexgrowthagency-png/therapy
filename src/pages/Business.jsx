import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const insurances = [
  'Aetna',
  'Medical Mutual of Ohio (MMO)',
  'Ohio Prime',
  'NGS Coresource',
  'United Behavioral Health Care (UBH)',
];

const fees = [
  { service: 'Initial Appointment (60 min)', cost: '$200' },
  { service: 'Individual Therapy (60 min)', cost: '$170' },
  { service: 'Family or Parent Therapy (60 min)', cost: '$170' },
  { service: 'Half Session (30 min)', cost: '$85' },
];

const webServices = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Video Introduction',
    desc: 'Parent and youth-friendly introductory videos from Dr. Lofthouse about his approach and practice.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Online Scheduling 24/7',
    desc: 'Schedule or change appointments online at any hour — no phone tag needed.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
    title: 'Automatic Appointment Reminders',
    desc: 'Receive reminders via phone call, email, or text message — never miss a session.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Secure HIPAA-Compliant Email',
    desc: 'Send encrypted, non-emergency questions or updates via HIPAA-compliant messaging.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
    title: 'Secure Online Payments',
    desc: 'Make secure one-time payments or set up automatic session billing — no checks needed.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: 'Electronic Insurance Billing',
    desc: 'Dr. Lofthouse files insurance claims on your behalf — you only pay your co-pay.',
  },
];

export default function Business() {
  return (
    <>
      {/* ─── Page Hero ─── */}
      <section className="page-hero">
        <div className="max-w-4xl mx-auto">
          <p className="text-sage/80 text-xs uppercase tracking-[0.3em] font-sans mb-4">Practical Information</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-5 leading-tight">Insurance &amp; Fees</h1>
          <p className="text-white/70 font-sans text-xl font-light max-w-2xl mx-auto">
            Transparent pricing, accepted insurance plans, and convenient services designed to make care as accessible as possible.
          </p>
        </div>
      </section>

      {/* ─── Insurance ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* In-Network */}
            <AnimatedSection direction="left">
              <p className="section-label">In-Network Plans</p>
              <h2 className="font-serif text-3xl text-sage-dark mb-6">Insurance Accepted</h2>
              <p className="text-gray-soft font-sans text-sm leading-relaxed mb-6">
                Dr. Lofthouse is an in-network provider for the following plans. As a courtesy, he files electronic claims directly and only asks for your co-payment at the time of service — though the full bill remains your responsibility.
              </p>
              <div className="space-y-3">
                {insurances.map((ins) => (
                  <div key={ins} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm border border-sage/5">
                    <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0" />
                    <p className="font-sans text-sage-dark font-medium text-sm">{ins}</p>
                    <span className="ml-auto text-xs text-sage bg-sage/10 px-2 py-0.5 rounded-full">In-Network</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Out-of-Network */}
            <AnimatedSection direction="right">
              <p className="section-label">Out-of-Network</p>
              <h2 className="font-serif text-3xl text-sage-dark mb-6">Other Insurance Plans</h2>
              <div className="space-y-5 text-gray-soft font-sans text-sm leading-relaxed">
                <div className="card">
                  <h3 className="font-serif text-lg text-sage-dark mb-2">Out-of-Network Coverage</h3>
                  <p>
                    Most insurance companies will authorize and cover some costs for an out-of-network provider — you pay the remaining balance depending on your policy. <strong className="text-sage-dark">Call your insurance company</strong> to ask about out-of-network benefits and authorization before your first session.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-serif text-lg text-sage-dark mb-2">Fee-for-Service (No Insurance)</h3>
                  <p>
                    Some families choose not to involve insurance due to privacy concerns or to avoid insurance control over treatment decisions. In this case, you pay the full fee directly. We recommend verifying your mental health benefits (max sessions/year, deductible, co-pay) with your insurer regardless.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Fee Schedule ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="section-label">Transparent Pricing</p>
            <h2 className="section-title mb-4">Session Fees</h2>
            <p className="text-gray-soft font-sans max-w-xl mx-auto leading-relaxed">
              All fees listed are per-session. If using insurance, you typically only pay your co-payment — Dr. Lofthouse handles filing the rest.
            </p>
          </AnimatedSection>
          <div className="space-y-3">
            {fees.map((f, i) => (
              <AnimatedSection key={f.service} delay={i * 0.08} direction="up">
                <div className="flex items-center justify-between bg-cream rounded-2xl px-8 py-5 border border-sage/10">
                  <p className="font-sans text-sage-dark font-medium">{f.service}</p>
                  <p className="font-serif text-2xl text-terracotta font-semibold">{f.cost}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-6">
            <div className="bg-sage/10 rounded-2xl px-8 py-5 border border-sage/20">
              <p className="text-sage-dark font-sans text-sm leading-relaxed">
                <strong>Insurance filing:</strong> Dr. Lofthouse files electronic claims as a courtesy — you only pay your co-payment at the time of service. It remains your responsibility to ensure the full balance is paid. We recommend verifying your mental health benefits before your first appointment.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Practical Perks ─── */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label">Office Experience</p>
            <h2 className="section-title mb-4">A Practice Built for Families</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="card h-full">
                <div className="w-12 h-12 bg-sage/10 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-sage-dark mb-3">Convenient Free Parking</h3>
                <p className="text-gray-soft font-sans text-sm leading-relaxed">
                  Parking is always free, readily available, and just 30 feet from the office door. Located near the intersection of 270 and 23 at 130 Northwood's Blvd, Suite B (2nd floor), Columbus, OH 43235.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="card h-full">
                <div className="w-12 h-12 bg-terracotta/10 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-sage-dark mb-3">Comfortable Environment</h3>
                <p className="text-gray-soft font-sans text-sm leading-relaxed">
                  From the courtyard walk-through to the waiting room and office, the space has been thoughtfully designed as a family-friendly, calming place to receive therapy — comfortable seating, warm tones, and a welcoming atmosphere.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Web-Based Services ─── */}
      <section className="py-24 bg-sage-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sage text-xs uppercase tracking-[0.3em] font-sans mb-3">Modern &amp; Convenient</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-5">Web-Based Client Services</h2>
            <p className="text-white/65 font-sans max-w-2xl mx-auto leading-relaxed">
              To make the practice as user-friendly as possible, Dr. Lofthouse has added several services designed to save time and reduce stress for families.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webServices.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.08} direction="up">
                <div className="bg-white/8 rounded-2xl p-7 border border-white/10 hover:bg-white/12 transition-colors h-full">
                  <div className="w-12 h-12 bg-terracotta/20 rounded-xl flex items-center justify-center text-terracotta mb-4">
                    {svc.icon}
                  </div>
                  <h3 className="font-serif text-lg mb-2">{svc.title}</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-cream text-center">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="section-title mb-4">Questions About Coverage or Fees?</h2>
            <p className="text-gray-soft font-sans leading-relaxed mb-8">
              We're happy to help you understand your options. Reach out to discuss insurance, fees, or anything else before booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
              <a href="tel:6145065976" className="btn-outline-sage">Call (614) 506-5976</a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
