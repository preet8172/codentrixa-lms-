'use client'

import { motion } from 'framer-motion'
import { contact, company } from '@/lib/data'

export default function CTA() {
  return (
    <section id="contact" className="relative py-28 border-t border-line overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-brass/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow text-brassLight mb-5">Final File</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">{contact.heading}</h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10">{contact.sub}</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto flex flex-col sm:flex-row gap-3 max-w-md"
          >
            <input
              type="email"
              required
              placeholder="you@business.com"
              className="flex-1 rounded-full bg-panel border border-line2 px-5 py-3.5 text-sm text-paper placeholder:text-faint focus:outline-none focus:border-brass/60"
            />
            <button
              type="submit"
              className="rounded-full bg-brass px-6 py-3.5 font-semibold text-ink hover:bg-brassLight transition-colors whitespace-nowrap"
            >
              Request a demo
            </button>
          </form>

          <p className="mt-6 text-sm text-faint">
            or write to{' '}
            <a href={`mailto:${contact.email}`} className="text-brassLight hover:underline">
              {contact.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
