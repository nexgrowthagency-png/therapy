import { Link } from 'react-router-dom';

const navLinks = [
  { path: '/',               label: 'Home' },
  { path: '/about',          label: 'About Dr. Lofthouse' },
  { path: '/services',       label: 'Services & Diagnoses' },
  { path: '/insurance-fees', label: 'Insurance & Fees' },
  { path: '/schedule',       label: 'Schedule Online' },
  { path: '/contact',        label: 'General Inquiries' },
];

export default function Footer() {
  return (
    <footer className="bg-sage-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/Nick.png"
                alt="Nicholas Lofthouse PhD"
                className="h-10 w-auto brightness-0 invert"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <p className="font-serif font-semibold leading-tight">Nicholas Lofthouse, Ph.D., LLC</p>
                <p className="text-white/60 text-xs font-sans mt-0.5">Licensed Child & Adolescent Psychologist</p>
              </div>
            </div>
            <p className="text-white/65 text-sm font-sans leading-relaxed">
              Evidence-based psychological assessment and therapy for children, adolescents, and families in Columbus, Ohio.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="tel:6145065976"
                className="bg-terracotta text-white px-4 py-2 rounded-full text-sm font-sans font-medium hover:opacity-90 transition-all"
              >
                Call Now
              </a>
              <a
                href="https://api.portal.therapyappointment.com/n/public/findYourTherapist/11ed0243a902c538a8a50e3b532c70b5"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/40 text-white px-4 py-2 rounded-full text-sm font-sans font-medium hover:border-white transition-all"
              >
                Book Online
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-5">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-white/65 text-sm font-sans hover:text-terracotta transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-5">Contact</h4>
            <address className="not-italic space-y-2.5 text-sm font-sans text-white/65">
              <p>130 Northwood's Blvd, Suite B (2nd floor)</p>
              <p>Columbus, OH 43235</p>
              <a href="tel:6145065976" className="block hover:text-terracotta transition-colors">
                Phone: (614) 506-5976
              </a>
              <p>Fax: (614) 846-1849</p>
              <a
                href="mailto:NicholasLofthousePhD@hushmail.com"
                className="block hover:text-terracotta transition-colors break-all"
              >
                NicholasLofthousePhD@hushmail.com
              </a>
              <div className="pt-3 border-t border-white/10 space-y-1">
                <p>Mon – Fri: 8:00 am – 5:00 pm</p>
                <p>Tuesday: 1:00 pm – 8:00 pm</p>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-sans text-white/40">
          <p>© {new Date().getFullYear()} Nicholas Lofthouse, Ph.D., LLC. All rights reserved.</p>
          <p>Serving Columbus, Ohio &amp; surrounding areas</p>
        </div>
      </div>
    </footer>
  );
}
