import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const diagnosed = [
  'Acute Stress Disorder', 'Adjustment Disorder', 'Agoraphobia', 'Anger',
  'Anxiety', "Asperger's Disorder", 'Attention-Deficit / Hyperactivity Disorder (ADHD)',
  'Bedwetting (enuresis)', 'Bereavement', 'Bipolar Disorder', 'Conduct Disorder',
  'Defiance', 'Depression', 'Falling Asleep / Primary Insomnia',
  'Generalized Anxiety Disorder', 'Obsessive Compulsive Disorder (OCD)',
  'Oppositional Defiant Disorder (ODD)', 'Panic Disorder',
  'Posttraumatic Stress Disorder (PTSD)', 'Sadness',
  'Self-Injury / Self-Harm ("cutting")', 'Selective Mutism',
  'Separation Anxiety Disorder', 'Sexual Disorders / Problems',
  'Social Phobia / Anxiety', 'Specific Phobias / Fears',
  'Tic / Tourette\'s Disorder', 'Trichotillomania (hairpulling)',
];

const referred = [
  'Autism Spectrum Disorder', 'Dissociative Disorders', 'Eating Disorders (Anorexia / Bulimia)',
  'Language Disorders', 'Learning Disorders', 'Motor Problems',
  'Personality Disorders', 'Reactive Attachment Disorder', 'Schizophrenia',
  'Sexual Offenses', 'Sleep Disorders (except insomnia)', 'Substance Abuse / Dependence',
];

const sessions = [
  {
    num: '01',
    title: 'Initial Session (~50–60 min)',
    points: [
      'Joint introductory meeting with you, your child, and Dr. Lofthouse',
      '"Warm-up" questions about strengths, interests, and what brings you in',
      'Build a full picture of home, school, friends, medical history, and treatment history',
      'Screen for current risk factors (safety planning when needed)',
      'Distribute validated parent, teacher, and youth questionnaires',
    ],
  },
  {
    num: '02',
    title: 'Interview Session (~45 min)',
    points: [
      'Separate interviews with parent and child',
      'In-depth exploration of questionnaire responses and specific symptoms',
      'Identify patterns, severity, and functional impact',
    ],
  },
  {
    num: '03',
    title: 'Feedback Session (~45 min)',
    points: [
      'Joint session with child and parents — knowledge is power',
      'Share your child\'s strengths AND limitations with take-home handouts',
      'Explain diagnoses in accessible language ("your child has ADHD" not "is ADHD")',
      'Discuss what the diagnoses mean, their positives, and their challenges',
      'Frame challenges as no-fault, team-based — not anyone\'s fault',
      'Determine if psychological testing (IQ, academic achievement) is recommended',
    ],
  },
  {
    num: '04',
    title: 'Treatment Options Session (~45 min)',
    points: [
      'Identify 4 shared treatment goals (2 from parent list, 2 from child\'s)',
      'Begin tracking goal progress on a session-by-session graph',
      'Review evidence-based options: psychotherapy, medication, school-based services',
      'You choose — Dr. Lofthouse informs, not prescribes',
    ],
  },
  {
    num: '05+',
    title: 'Ongoing Treatment Sessions',
    points: [
      '5–10 min check-in: mood, home/school/peer functioning, medication responses',
      'Collaborative session agenda set by you and your child',
      'CBT skill-building: individual and family-based techniques',
      'End-of-session summary and therapy "project" to practice at home',
      'Session feedback collected every session — from both parent and child',
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* ─── Page Hero ─── */}
      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-dark to-sage/70 opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-sage/80 text-xs uppercase tracking-[0.3em] font-sans mb-4">Evidence-Based Care</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-5 leading-tight">Services &amp; Diagnoses</h1>
          <p className="text-white/70 font-sans text-xl font-light max-w-2xl mx-auto">
            Comprehensive psychological assessment and therapy using only the most scientifically supported methods.
          </p>
        </div>
      </section>

      {/* ─── Our Approach Banner ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-cream rounded-3xl p-10 border border-sage/10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-sage-dark mb-3">Evidence-Based &amp; Individualized Practice</h2>
                  <p className="text-gray-soft font-sans leading-relaxed text-[0.95rem]">
                    Although there are numerous types of psychological assessments and treatments, only a few have been shown to be effective. Dr. Lofthouse consistently identifies and uses the most scientifically supported methods — and tracks the results of treatment on a session-by-session basis. To provide truly personal care, he develops and shares individual case conceptualizations ("theories") of how and why specific challenges affect each child's life and how they can be overcome.
                  </p>
                  <a
                    href="http://effectivechildtherapy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terracotta text-sm font-sans font-medium hover:underline mt-3 inline-block"
                  >
                    APA Division 53: Effective Child Therapy →
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Conditions Treated ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="section-label">Full List</p>
            <h2 className="section-title mb-4">Conditions We Treat</h2>
            <p className="text-gray-soft font-sans max-w-2xl mx-auto leading-relaxed">
              Using scientifically-supported psychotherapies, Dr. Lofthouse treats the following behavioral, anxiety, and mood-based disorders.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {diagnosed.map((d, i) => (
              <AnimatedSection key={d} delay={i * 0.03} direction="up">
                <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-2.5 shadow-sm hover:shadow-md transition-shadow border border-sage/5">
                  <div className="w-1.5 h-1.5 bg-terracotta rounded-full flex-shrink-0" />
                  <p className="font-sans text-sage-dark text-sm">{d}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Referred Out ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
              <h3 className="font-serif text-2xl text-sage-dark mb-3">When We Refer to Specialists</h3>
              <p className="text-gray-soft font-sans text-sm leading-relaxed mb-5">
                Although Dr. Lofthouse can assess and diagnose the following conditions, he does not treat them if they are the primary concern — and will refer to appropriate specialists:
              </p>
              <div className="flex flex-wrap gap-2">
                {referred.map((r) => (
                  <span key={r} className="bg-white border border-gray-200 text-gray-soft px-3 py-1.5 rounded-full text-xs font-sans">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── How I Work ─── */}
      <section className="py-24 bg-sage-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sage text-xs uppercase tracking-[0.3em] font-sans mb-3">The Process</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-5">How I Work</h2>
            <p className="text-white/65 font-sans max-w-xl mx-auto leading-relaxed">
              A structured, transparent process that keeps both parents and children informed, empowered, and working toward meaningful goals.
            </p>
          </AnimatedSection>
          <div className="space-y-8">
            {sessions.map((session, i) => (
              <AnimatedSection key={session.num} delay={i * 0.1} direction="left">
                <div className="bg-white/8 rounded-2xl p-8 border border-white/10">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-terracotta/20 border border-terracotta/40 flex items-center justify-center">
                      <span className="font-serif text-terracotta font-bold text-sm">{session.num}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl mb-4">{session.title}</h3>
                      <ul className="space-y-2">
                        {session.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5 text-white/70 font-sans text-sm leading-relaxed">
                            <svg className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Therapy Duration Note */}
          <AnimatedSection className="mt-10">
            <div className="bg-terracotta/20 border border-terracotta/30 rounded-2xl p-6">
              <h4 className="font-serif text-lg mb-2">Therapy Duration</h4>
              <p className="text-white/75 font-sans text-sm leading-relaxed">
                Therapy duration varies by the type and number of diagnoses, treatment goals, and life circumstances. Most cognitive behavioral therapies for a single diagnosis take approximately 15–20 sessions. Progress toward goals is continuously assessed and goals are revised collaboratively throughout the process.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-cream text-center">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="section-title mb-4">Have Questions About Our Approach?</h2>
            <p className="text-gray-soft font-sans leading-relaxed mb-8">
              We're happy to talk through what treatment might look like for your child. Schedule a consultation to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.portal.therapyappointment.com/n/public/findYourTherapist/11ed0243a902c538a8a50e3b532c70b5"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book an Appointment
              </a>
              <Link to="/contact" className="btn-outline-sage">Send Us a Question</Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
