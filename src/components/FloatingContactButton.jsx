import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      label: 'Call Us',
      href: 'tel:6145065976',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      bg: 'bg-sage',
      isLink: false,
    },
    {
      label: 'Schedule',
      href: 'https://api.portal.therapyappointment.com/n/public/findYourTherapist/11ed0243a902c538a8a50e3b532c70b5',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      bg: 'bg-terracotta',
      isLink: false,
      external: true,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:hidden">
      <AnimatePresence>
        {open && actions.map((action, i) => (
          <motion.div
            key={action.label}
            initial={{ opacity: 0, y: 12, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.85 }}
            transition={{ delay: i * 0.06, duration: 0.2 }}
          >
            <a
              href={action.href}
              {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 ${action.bg} text-white pl-4 pr-5 py-3 rounded-full shadow-lg text-sm font-sans font-medium`}
            >
              {action.icon}
              {action.label}
            </a>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* FAB Toggle */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        className="w-14 h-14 bg-terracotta text-white rounded-full shadow-2xl flex items-center justify-center"
        aria-label="Contact options"
      >
        <motion.svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </motion.svg>
      </motion.button>
    </div>
  );
}
