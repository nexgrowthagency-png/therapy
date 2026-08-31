import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const credentials = [
  { label: 'License', value: 'Licensed Clinical Psychologist — State of Ohio' },
  { label: 'Specialty', value: 'Cognitive Behavioral Therapy (CBT) for Youth' },
  { label: 'Academic Appointment', value: 'Former Assistant Professor-Clinical, OSU Dept. of Psychiatry (8 years)' },
  { label: 'Publications', value: '24 book chapters and journal articles' },
  { label: 'Presentations', value: '59 conference presentations · 28 community presentations' },
];

const education = [
  {
    degree: 'B.S. Psychology (with honors)',
    institution: 'University of York, England',
    detail: 'Born in England; foundational training in psychology with honors distinction.',
  },
  {
    degree: 'UCLA Research Projects',
    institution: 'University of California, Los Angeles',
    detail: 'Conducted autism research projects prior to doctoral training.',
  },
  {
    degree: 'Ph.D. in Clinical Psychology',
    institution: 'Indiana University',
    detail: 'Doctoral training in clinical psychology with a focus on child and adolescent populations.',
  },
  {
    degree: 'Clinical Internship',
    institution: 'Indiana',
    detail: 'Completed supervised clinical internship following doctoral program.',
  },
  {
    degree: 'Postdoctoral Residency',
    institution: 'The Ohio State University — Child Psychiatric Residency',
    detail: 'Specialized postdoctoral training in child psychiatry at OSU.',
  },
  {
    degree: 'Assistant Professor-Clinical',
    institution: 'OSU Department of Psychiatry',
    detail: '8-year faculty appointment; teaching, research, and clinical practice before transitioning to private practice.',
  },
];

const memberships = [
  'American Psychological Association (APA)',
  'APA Division 42 — Psychologists in Independent Practice',
  'APA Division 53 — Society of Clinical Child and Adolescent Psychology',
  'Professional Advisory Board, ChADD (Children & Adults with ADHD)',
];

const expertise = [
  'Child & Adolescent ADHD', 'Bipolar Disorder in Youth', 'Self-Injury / Self-Harm',
  'Cognitive Behavioral Therapy', 'Psychological Assessment', 'Family-Based Treatment',
];

export default function About() {
  return (
    <>
      {/* ─── Page Hero ─── */}
      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-sage/80 text-xs uppercase tracking-[0.3em] font-sans mb-4">Therapist Profile</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-5 leading-tight">
            Nicholas Lofthouse, Ph.D.
          </h1>
          <p className="text-white/70 font-sans text-xl font-light max-w-2xl">
            Licensed Child &amp; Adolescent Clinical Psychologist — Bringing evidence-based care and genuine compassion to every family.
          </p>
        </div>
      </section>

      {/* ─── Bio + Photo ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-sage/10 border-2 border-dashed border-sage/30 flex flex-col items-center justify-center text-center p-8">
                  <svg className="w-16 h-16 text-sage/40 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-sage/60 font-sans text-sm">
                    Add your photo here<br />
                    <span className="text-xs text-gray-soft">(Place image as <code className="bg-sage/10 px-1 rounded">public/dr-lofthouse.jpg</code>)</span>
                  </p>
                </div>
                {/* Floating credential badge */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-lg border border-sage/10">
                  <p className="font-serif text-2xl font-bold text-sage-dark">8+</p>
                  <p className="text-xs font-sans text-gray-soft">Years at OSU</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Bio text */}
            <AnimatedSection direction="right">
              <p className="section-label">About Dr. Lofthouse</p>
              <h2 className="section-title mb-6">A Career Built on Science &amp; Compassion</h2>
              <div className="space-y-4 text-gray-soft font-sans leading-relaxed text-[0.95rem]">
                <p>
                  Dr. Nicholas Lofthouse is a licensed clinical psychologist with deep expertise in cognitive behavioral therapy (CBT) for children and adolescents. Before entering private practice, he served for 8 years as an Assistant Professor-Clinical in the <strong className="text-sage-dark">Ohio State University Department of Psychiatry</strong> — teaching, conducting research, and treating youth with a wide range of psychiatric challenges.
                </p>
                <p>
                  Born in England, Dr. Lofthouse earned his Bachelor of Science with honors in psychology from the <strong className="text-sage-dark">University of York</strong>. After autism research work at UCLA, he completed his Ph.D. in clinical psychology at <strong className="text-sage-dark">Indiana University</strong>, followed by a clinical internship and postdoctoral child psychiatric residency at OSU.
                </p>
                <p>
                  Throughout his career, Dr. Lofthouse has successfully treated hundreds of children, adolescents, and families using scientifically-supported methods — across multiple treatment settings and for a wide variety of diagnoses. His research has produced <strong className="text-sage-dark">24 published works</strong>, <strong className="text-sage-dark">59 conference presentations</strong>, and <strong className="text-sage-dark">28 community talks</strong> on child and adolescent bipolar disorder, self-injury, and ADHD.
                </p>
                <p>
                  His practice is built on two pillars: using only what science has proven effective, and treating every child as a whole person — not just a diagnosis.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {expertise.map((e) => (
                  <span key={e} className="bg-sage/10 text-sage-dark px-4 py-2 rounded-full text-xs font-sans font-medium">
                    {e}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Credentials ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="section-label">Credentials</p>
            <h2 className="section-title">Professional Qualifications</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {credentials.map((c, i) => (
              <AnimatedSection key={c.label} delay={i * 0.08} direction="up">
                <div className="card h-full">
                  <p className="section-label !mb-1">{c.label}</p>
                  <p className="font-sans text-sage-dark text-sm leading-relaxed">{c.value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Education Timeline ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label">Academic Background</p>
            <h2 className="section-title">Education &amp; Training</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-sage/20 -translate-x-1/2" />
            <div className="space-y-10">
              {education.map((edu, i) => (
                <AnimatedSection key={edu.degree} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-terracotta rounded-full -translate-x-1/2 mt-1.5 flex-shrink-0 shadow-md" />
                    {/* Card */}
                    <div className={`ml-10 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="card">
                        <h3 className="font-serif text-lg text-sage-dark mb-1">{edu.degree}</h3>
                        <p className="text-terracotta text-sm font-sans font-medium mb-2">{edu.institution}</p>
                        <p className="text-gray-soft text-sm font-sans leading-relaxed">{edu.detail}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Memberships ─── */}
      <section className="py-24 bg-sage-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-sage text-xs uppercase tracking-[0.3em] font-sans mb-3">Affiliations</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-12">Professional Memberships</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {memberships.map((m, i) => (
                <AnimatedSection key={m} delay={i * 0.1} direction="up">
                  <div className="bg-white/10 rounded-xl px-6 py-4 text-left flex items-start gap-3">
                    <div className="w-2 h-2 bg-terracotta rounded-full mt-1.5 flex-shrink-0" />
                    <p className="font-sans text-white/85 text-sm leading-relaxed">{m}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-cream text-center">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="section-title mb-4">Ready to Connect?</h2>
            <p className="text-gray-soft font-sans leading-relaxed mb-8">
              Schedule a consultation with Dr. Lofthouse and take the first step toward clarity and lasting change for your child and family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">Request a Consultation</Link>
              <a href="tel:6145065976" className="btn-outline-sage">Call (614) 506-5976</a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
