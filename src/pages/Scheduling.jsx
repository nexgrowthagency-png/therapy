import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const steps = [
  {
    num: '1',
    title: 'Register Online',
    desc: 'Create your account at TherapyAppointment.com with your username, password, email, and contact, insurance, and biographical information.',
  },
  {
    num: '2',
    title: 'Complete Intake Forms',
    desc: 'Intake forms are automatically emailed to you after registration. Complete them and bring to your first session (or submit online).',
  },
  {
    num: '3',
    title: 'Browse Available Times',
    desc: 'Log in to view a calendar of open appointment times and schedule directly. The system calculates the best days and times for recurring appointments.',
  },
  {
    num: '4',
    title: 'Get Reminders',
    desc: 'Automatic appointment reminders are sent via phone call, email, or text — whichever you prefer. Never miss a session.',
  },
  {
    num: '5',
    title: 'Pay Securely',
    desc: 'Pay online via secure credit/debit card processing through Merchant Warehouse, or set up automatic session billing for convenience.',
  },
];

const paperwork = [
  { title: 'HIPAA Notice of Privacy Practices', desc: 'Your rights and our obligations regarding your health information.' },
  { title: 'Treatment Consent Form', desc: 'Consent to psychological assessment and treatment services.' },
  { title: 'Signature on File Form', desc: 'Authorization to bill your insurance company on your behalf.' },
  { title: 'Release of Information Forms', desc: 'Authorization to coordinate care with pediatricians, schools, or other providers.' },
];

export default function Scheduling() {
  return (
    <>
      {/* ─── Page Hero ─── */}
      <section className="page-hero">
        <div className="max-w-4xl mx-auto">
          <p className="text-sage/80 text-xs uppercase tracking-[0.3em] font-sans mb-4">Get Started</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-5 leading-tight">Online Scheduling</h1>
          <p className="text-white/70 font-sans text-xl font-light max-w-2xl">
            Schedule your own appointments 24/7 — no phone tag, no waiting. Simple, secure, and HIPAA-compliant.
          </p>
        </div>
      </section>

      {/* ─── Scheduling System Info ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p className="section-label">Powered By</p>
              <h2 className="font-serif text-3xl text-sage-dark mb-6">TherapyAppointment.com</h2>
              <div className="space-y-4 text-gray-soft font-sans text-sm leading-relaxed">
                <p>
                  Dr. Lofthouse uses the <strong className="text-sage-dark">TherapyAppointment</strong> practice management system — selected for its outstanding reviews, full HIPAA compliance, and ease of use for families.
                </p>
                <p>
                  As a client, you'll register with your own username, password, and email, then complete contact, insurance, and biographical information. The system then lets you schedule or change appointments at any hour of any day, and automatically calculates the best recurring times.
                </p>
                <p>
                  TherapyAppointment also enables Dr. Lofthouse to automatically bill your insurance company and track reimbursements — leaving more time and attention for you.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="https://www.therapyappointment.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Schedule Now →
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-sage/10">
                <h3 className="font-serif text-xl text-sage-dark mb-6">How to Get Started</h3>
                <div className="space-y-5">
                  {steps.map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <div className="w-8 h-8 bg-terracotta text-white rounded-full flex items-center justify-center text-sm font-serif font-bold flex-shrink-0 mt-0.5">
                        {step.num}
                      </div>
                      <div>
                        <p className="font-sans font-medium text-sage-dark text-sm mb-1">{step.title}</p>
                        <p className="font-sans text-gray-soft text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Intake Paperwork ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="section-label">Before Your First Visit</p>
            <h2 className="section-title mb-4">Intake Paperwork</h2>
            <p className="text-gray-soft font-sans max-w-2xl mx-auto leading-relaxed">
              After registering, intake forms are automatically emailed to you. Complete and bring them to your first session, or submit them online in advance.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-5">
            {paperwork.map((doc, i) => (
              <AnimatedSection key={doc.title} delay={i * 0.08} direction="up">
                <div className="card h-full flex items-start gap-4">
                  <div className="w-10 h-10 bg-sage/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-sage-dark text-sm mb-1">{doc.title}</h3>
                    <p className="font-sans text-gray-soft text-xs leading-relaxed">{doc.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-8 text-center">
            <p className="text-gray-soft font-sans text-sm">
              Intake form links will be provided upon registration with TherapyAppointment.com. Questions? Call{' '}
              <a href="tel:6145065976" className="text-terracotta hover:underline font-medium">(614) 506-5976</a>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Hours + Location ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <AnimatedSection direction="left">
              <div className="card h-full">
                <div className="w-12 h-12 bg-sage/10 rounded-2xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-sage-dark mb-5">Business Hours</h3>
                <div className="space-y-3 font-sans text-sm">
                  {[
                    { day: 'Monday', hours: '8:00 am – 5:00 pm' },
                    { day: 'Tuesday', hours: '1:00 pm – 8:00 pm' },
                    { day: 'Wednesday', hours: '8:00 am – 5:00 pm' },
                    { day: 'Thursday', hours: '8:00 am – 5:00 pm' },
                    { day: 'Friday', hours: '8:00 am – 5:00 pm' },
                    { day: 'Saturday – Sunday', hours: 'Closed' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-sage-dark font-medium">{day}</span>
                      <span className={hours === 'Closed' ? 'text-gray-soft' : 'text-terracotta font-medium'}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="card h-full">
                <div className="w-12 h-12 bg-terracotta/10 rounded-2xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-sage-dark mb-5">Office Location</h3>
                <address className="not-italic font-sans text-sm space-y-2 text-gray-soft">
                  <p className="font-medium text-sage-dark text-base">Nicholas Lofthouse, Ph.D., LLC</p>
                  <p>130 Northwood's Blvd</p>
                  <p>Suite B, 2nd Floor</p>
                  <p>Columbus, OH 43235</p>
                  <p className="pt-2 text-xs text-gray-soft">Near the intersection of I-270 and US-23 (north Columbus)</p>
                  <p className="font-medium text-sage-dark">Free parking — 30 feet from door</p>
                </address>
                <div className="mt-6 space-y-2 text-sm font-sans">
                  <a href="tel:6145065976" className="flex items-center gap-2 text-terracotta hover:underline font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    (614) 506-5976
                  </a>
                  <a href="mailto:NicholasLofthousePhD@hushmail.com" className="flex items-center gap-2 text-sage-dark hover:text-terracotta transition-colors break-all">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    NicholasLofthousePhD@hushmail.com
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-sage-dark text-white text-center">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-serif text-4xl md:text-5xl mb-5">Ready to Get Started?</h2>
            <p className="text-white/65 font-sans leading-relaxed mb-8">
              Schedule online 24/7 through our secure portal, or reach out with any questions before booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.therapyappointment.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-terracotta text-white px-10 py-4 rounded-full font-sans font-medium hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg"
              >
                Schedule Online
              </a>
              <Link to="/contact" className="btn-outline-white px-10 py-4">
                Contact Us First
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
