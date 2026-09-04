import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    title: 'Psychological Assessment',
    desc: 'Comprehensive, scientifically-supported evaluations to understand your child\'s unique challenges, strengths, and how they can thrive.',
    link: '/services',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    title: 'Individual Therapy',
    desc: 'Evidence-based cognitive behavioral therapy (CBT) tailored specifically to each child or adolescent\'s goals and diagnosis.',
    link: '/services',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: 'Family Therapy',
    desc: 'Collaborative sessions that strengthen family dynamics and equip parents with practical, research-backed strategies.',
    link: '/services',
  },
];

const steps = [
  {
    num: '01',
    title: 'Initial Assessment',
    desc: 'Dr. Lofthouse meets with you and your child to build a full picture of their life — home, school, friendships, and challenges.',
  },
  {
    num: '02',
    title: 'In-Depth Interview',
    desc: 'Separate detailed interviews and validated questionnaires reveal specific symptoms and patterns unique to your child.',
  },
  {
    num: '03',
    title: 'Feedback & Clarity',
    desc: 'A full feedback session shares diagnoses, what they mean, and a clear roadmap — because knowledge is the foundation of change.',
  },
  {
    num: '04',
    title: 'Treatment & Progress',
    desc: 'Collaborative goal-setting, evidence-based CBT sessions, and session-by-session progress tracking toward your family\'s goals.',
  },
];

const conditions = [
  'ADHD', 'Anxiety', 'Depression', 'OCD', 'PTSD', 'Bipolar Disorder',
  'Oppositional Defiant Disorder', 'Social Phobia', 'Panic Disorder',
  'Selective Mutism', 'Self-Injury', 'Tic Disorders', 'Separation Anxiety',
  'Generalized Anxiety', 'Conduct Disorder', 'Adjustment Disorder',
  'Bereavement', 'Anger', 'Bedwetting', 'Trichotillomania',
];

const testimonials = [
  {
    quote: 'Dr. Lofthouse has been incredible with our son. His approach is warm, structured, and we\'ve seen real progress in just a few months.',
    author: 'Parent of a 10-year-old',
  },
  {
    quote: 'We finally got answers after years of struggle. The assessment was thorough and everything was explained in a way we could truly understand.',
    author: 'Parent of a 14-year-old',
  },
  {
    quote: 'My daughter actually looks forward to her sessions. The CBT tools she\'s learned have made a huge difference at home and at school.',
    author: 'Parent of an 8-year-old',
  },
];

const stats = [
  { value: 'Ph.D.', label: 'Indiana University' },
  { value: '8+ Yrs', label: 'OSU Faculty' },
  { value: '24', label: 'Published Works' },
  { value: 'CBT', label: 'Evidence-Based' },
];

export default function Home() {
  const imgControls = useAnimation();

  useEffect(() => {
    const run = async () => {
      await imgControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
      });
      imgControls.start({
        scale: 1.07,
        transition: { duration: 24, ease: 'linear', repeat: Infinity, repeatType: 'reverse' },
      });
    };
    run();
  }, [imgControls]);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero image — Ken Burns + fade-in scale */}
        <motion.img
          src="/Homepage.jpeg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={imgControls}
          style={{ willChange: 'transform, opacity' }}
        />

        {/* Sage gradient overlay — keeps text legible, stays on-palette */}
        <div className="absolute inset-0 bg-gradient-to-b from-sage-dark/45 via-sage-dark/55 to-sage-dark/80" />
        {/* Radial vignette for depth */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(74,93,78,0.40) 100%)' }}
        />

        {/* Decorative glows */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-sage/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sage/80 text-xs uppercase tracking-[0.3em] font-sans mb-6">
              Compassionate Care for Growing Minds
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
              Child &amp; Adolescent<br />
              <span className="text-terracotta italic">Clinical Psychologist</span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Evidence-based psychological assessment and therapy for children, adolescents, and families — tailored to each child's unique story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-base px-10 py-4">
                Schedule a Consultation
              </Link>
              <Link to="/about" className="btn-outline-white text-base px-10 py-4">
                Meet Dr. Lofthouse
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll nudge */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <span className="text-white/40 text-xs font-sans tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* ─── Trust Bar ─── */}
      <section className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
            {stats.map(({ value, label }) => (
              <div key={value} className="text-center">
                <p className="font-serif text-2xl font-semibold text-sage-dark">{value}</p>
                <p className="text-xs font-sans text-gray-soft mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label">Specialized Services</p>
            <h2 className="section-title mb-4">How We Can Help</h2>
            <p className="text-gray-soft font-sans max-w-2xl mx-auto leading-relaxed">
              Only the most scientifically supported assessments and treatments — individually tailored and progress-tracked every session.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.12} direction="up">
                <div className="card h-full flex flex-col group hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center mb-5 text-sage group-hover:bg-sage group-hover:text-white transition-all duration-300">
                    {svc.icon}
                  </div>
                  <h3 className="font-serif text-xl text-sage-dark mb-3">{svc.title}</h3>
                  <p className="text-gray-soft font-sans text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <Link to={svc.link} className="mt-5 text-terracotta text-sm font-sans font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How We Work ─── */}
      <section className="py-28 bg-sage-dark text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sage text-xs uppercase tracking-[0.3em] font-sans mb-3">Our Process</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-5">How We Work Together</h2>
            <p className="text-white/65 font-sans max-w-2xl mx-auto leading-relaxed">
              A structured, collaborative approach that empowers children and families with clarity, tools, and lasting change.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.12} direction="up">
                <div className="relative">
                  <p className="font-serif text-7xl font-bold text-sage/20 leading-none mb-3">{step.num}</p>
                  <div className="w-8 h-0.5 bg-terracotta mb-4" />
                  <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-14">
            <Link to="/services" className="btn-outline-white inline-block">
              Learn More About Our Approach
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Conditions ─── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="section-label">Areas of Expertise</p>
            <h2 className="section-title mb-4">Conditions We Treat</h2>
            <p className="text-gray-soft font-sans max-w-xl mx-auto leading-relaxed">
              Using evidence-based treatments for a full spectrum of behavioral, anxiety, and mood-based challenges in youth.
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {conditions.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.035, duration: 0.3, ease: 'easeOut' }}
                className="bg-cream text-sage-dark px-5 py-2 rounded-full text-sm font-sans font-medium border border-sage/20
                           hover:bg-sage hover:text-white hover:border-sage transition-all duration-200 cursor-default"
              >
                {c}
              </motion.span>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link to="/services" className="text-terracotta text-sm font-sans font-medium hover:underline">
              View full list of diagnoses &amp; conditions →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label">Families We've Helped</p>
            <h2 className="section-title">What Parents Say</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.12} direction="up">
                <div className="card h-full flex flex-col">
                  <div className="flex text-terracotta text-lg mb-4 gap-0.5">
                    {'★★★★★'.split('').map((s, j) => <span key={j}>{s}</span>)}
                  </div>
                  <p className="text-gray-soft font-sans text-sm leading-relaxed flex-1 italic">
                    "{t.quote}"
                  </p>
                  <p className="text-sage-dark font-sans font-medium text-sm mt-6">— {t.author}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-24 bg-terracotta text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection direction="up">
            <h2 className="font-serif text-4xl md:text-5xl mb-5 leading-tight">
              Ready to Take the First Step?
            </h2>
            <p className="font-sans text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation today. We're here to support your child and family with compassionate, science-backed care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-terracotta px-10 py-4 rounded-full font-sans font-medium text-base hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Request a Consultation
              </Link>
              <a
                href="tel:6145065976"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-sans font-medium text-base hover:bg-white hover:text-terracotta transition-all duration-200"
              >
                Call (614) 506-5976
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
