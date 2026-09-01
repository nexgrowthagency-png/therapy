import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const services = [
  'Psychological Assessment',
  'Individual Therapy (Child / Adolescent)',
  'Family or Parent Therapy',
  'Consultation / Questions',
  'Other',
];

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  details: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'A valid email is required.';
    if (!form.service) e.service = 'Please select a service.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // TODO: Connect to a form backend (e.g. Formspree, EmailJS, or server-side endpoint)
    // Example: fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(form) })
    setSubmitted(true);
    setForm(initialForm);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border font-sans text-sm text-sage-dark bg-white outline-none transition-all duration-200
     placeholder-gray-soft/60 focus:border-sage focus:ring-2 focus:ring-sage/20
     ${errors[field] ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-200'}`;

  return (
    <>
      {/* ─── Page Hero ─── */}
      <section className="page-hero">
        <div className="max-w-4xl mx-auto">
          <p className="text-sage/80 text-xs uppercase tracking-[0.3em] font-sans mb-4">Reach Out</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-5 leading-tight">Contact &amp; Book</h1>
          <p className="text-white/70 font-sans text-xl font-light max-w-2xl mx-auto">
            Ready to take the first step? Request a consultation below or call us directly — we're here to help.
          </p>
        </div>
      </section>

      {/* ─── Quick Action Buttons ─── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:6145065976"
                className="flex items-center gap-3 bg-sage text-white px-8 py-4 rounded-full font-sans font-medium text-base hover:bg-sage-dark transition-all duration-200 hover:shadow-lg hover:scale-105 w-full sm:w-auto justify-center"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call (614) 506-5976
              </a>
              <a
                href="#request-quote"
                className="flex items-center gap-3 bg-terracotta text-white px-8 py-4 rounded-full font-sans font-medium text-base hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:scale-105 w-full sm:w-auto justify-center"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Request a Consultation
              </a>
              <a
                href="https://www.therapyappointment.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-2 border-sage-dark text-sage-dark px-8 py-4 rounded-full font-sans font-medium text-base hover:bg-sage-dark hover:text-white transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Schedule Online
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Main Content: Form + Info ─── */}
      <section id="request-quote" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* ─── Contact Form ─── */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <p className="section-label">Request a Consultation</p>
                <h2 className="font-serif text-3xl text-sage-dark mb-2">Tell Us About Your Child</h2>
                <p className="text-gray-soft font-sans text-sm leading-relaxed mb-8">
                  Fill in the form below and Dr. Lofthouse will reach out within 1–2 business days to discuss next steps.
                </p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-sage/10 border border-sage/30 rounded-3xl p-10 text-center"
                    >
                      <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-5">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-2xl text-sage-dark mb-3">Message Received!</h3>
                      <p className="text-gray-soft font-sans text-sm leading-relaxed max-w-sm mx-auto">
                        Thank you for reaching out. Dr. Lofthouse will contact you within 1–2 business days. For urgent matters, please call <a href="tel:6145065976" className="text-terracotta hover:underline">(614) 506-5976</a>.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-terracotta font-sans text-sm hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="bg-white rounded-3xl p-8 shadow-sm border border-sage/8"
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="sm:col-span-2 md:col-span-1">
                          <label className="block font-sans text-sm font-medium text-sage-dark mb-1.5">
                            Full Name <span className="text-terracotta">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className={inputClass('name')}
                          />
                          {errors.name && <p className="mt-1 text-red-500 text-xs font-sans">{errors.name}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block font-sans text-sm font-medium text-sage-dark mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="(614) 000-0000"
                            className={inputClass('phone')}
                          />
                        </div>

                        {/* Email */}
                        <div className="sm:col-span-2">
                          <label className="block font-sans text-sm font-medium text-sage-dark mb-1.5">
                            Email Address <span className="text-terracotta">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className={inputClass('email')}
                          />
                          {errors.email && <p className="mt-1 text-red-500 text-xs font-sans">{errors.email}</p>}
                        </div>

                        {/* Service Needed */}
                        <div className="sm:col-span-2">
                          <label className="block font-sans text-sm font-medium text-sage-dark mb-1.5">
                            Service Needed <span className="text-terracotta">*</span>
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className={`${inputClass('service')} cursor-pointer`}
                          >
                            <option value="">Select a service…</option>
                            {services.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          {errors.service && <p className="mt-1 text-red-500 text-xs font-sans">{errors.service}</p>}
                        </div>

                        {/* Details */}
                        <div className="sm:col-span-2">
                          <label className="block font-sans text-sm font-medium text-sage-dark mb-1.5">
                            About Your Child / Additional Details
                          </label>
                          <textarea
                            name="details"
                            value={form.details}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Tell us a bit about your child's age, current challenges, any prior diagnoses, or anything else you'd like Dr. Lofthouse to know before reaching out…"
                            className={`${inputClass('details')} resize-none`}
                          />
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <button
                          type="submit"
                          className="bg-terracotta text-white px-10 py-3.5 rounded-full font-sans font-medium hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:scale-105"
                        >
                          Send Message
                        </button>
                        <p className="text-gray-soft font-sans text-xs leading-relaxed">
                          We typically respond within 1–2 business days.<br />
                          For urgent matters, call <a href="tel:6145065976" className="text-terracotta hover:underline">(614) 506-5976</a>.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </AnimatedSection>
            </div>

            {/* ─── Contact Info ─── */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right" delay={0.1}>
                <p className="section-label">Get in Touch</p>
                <h2 className="font-serif text-3xl text-sage-dark mb-8">Contact Information</h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-11 h-11 bg-sage/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans font-medium text-sage-dark text-sm mb-0.5">Phone</p>
                      <a href="tel:6145065976" className="font-sans text-terracotta hover:underline">(614) 506-5976</a>
                      <p className="text-gray-soft text-xs mt-0.5 font-sans">Fax: (614) 846-1849</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-11 h-11 bg-sage/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans font-medium text-sage-dark text-sm mb-0.5">Email</p>
                      <a href="mailto:NicholasLofthousePhD@hushmail.com" className="font-sans text-terracotta hover:underline text-sm break-all">
                        NicholasLofthousePhD@hushmail.com
                      </a>
                      <p className="text-gray-soft text-xs mt-0.5 font-sans">HIPAA-compliant secure messaging</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-11 h-11 bg-sage/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans font-medium text-sage-dark text-sm mb-0.5">Office</p>
                      <p className="font-sans text-gray-soft text-sm leading-relaxed">
                        130 Northwood's Blvd, Suite B (2nd floor)<br />
                        Columbus, OH 43235
                      </p>
                      <p className="text-xs text-sage-dark font-sans mt-1">Free parking — 30 feet from door</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="w-11 h-11 bg-sage/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans font-medium text-sage-dark text-sm mb-0.5">Hours</p>
                      <p className="font-sans text-gray-soft text-sm">Mon – Fri: 8:00 am – 5:00 pm</p>
                      <p className="font-sans text-gray-soft text-sm">Tuesday: 1:00 pm – 8:00 pm</p>
                    </div>
                  </div>
                </div>

                {/* Callout box */}
                <div className="mt-8 bg-terracotta/8 border border-terracotta/20 rounded-2xl p-5">
                  <h4 className="font-serif text-sage-dark text-base mb-2">Need to Schedule Online?</h4>
                  <p className="text-gray-soft font-sans text-sm leading-relaxed mb-4">
                    Existing and new clients can book appointments 24/7 through our secure online portal.
                  </p>
                  <a
                    href="https://www.therapyappointment.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terracotta font-sans font-medium text-sm hover:underline"
                  >
                    Go to TherapyAppointment.com →
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
