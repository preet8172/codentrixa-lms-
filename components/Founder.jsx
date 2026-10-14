'use client'

import { motion } from 'framer-motion'
import { founder } from '@/lib/data'

export default function Founder() {
  return (
    <section className="relative py-24 border-t border-line">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow text-brassLight">Countersigned</span>
          <p className="font-display italic text-2xl sm:text-3xl leading-relaxed mt-6 text-paper/95">
            "{founder.bio}"
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-9 w-9 rounded-full border border-brass/50 flex items-center justify-center font-display italic text-brassLight">
              P
            </span>
            <div className="text-left">
              <p className="text-sm text-paper">{founder.name}</p>
              <p className="eyebrow text-faint">{founder.title}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
