'use client'

import { motion } from 'framer-motion'
import { security, techStack } from '@/lib/data'

export default function SecurityStack() {
  return (
    <section className="relative py-24 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="eyebrow text-brassLight mb-4">File 06 — Clearance</p>
          <h2 className="font-display text-4xl leading-tight mb-10">
            Trusted with real customer data, on purpose.
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {security.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="flex items-start gap-2.5 text-sm text-paper/85"
              >
                <span className="mt-1.5 h-1 w-1 rounded-full bg-signal shrink-0" />
                {s}
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-brassLight mb-4">File 07 — Toolkit</p>
          <h2 className="font-display text-4xl leading-tight mb-10">Built on infrastructure you can audit.</h2>
          <div className="space-y-5">
            {techStack.map((g, i) => (
              <motion.div
                key={g.group}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 border-b border-line pb-4"
              >
                <span className="eyebrow text-faint w-28 shrink-0">{g.group}</span>
                <span className="text-paper/85 text-sm">{g.items.join('  ·  ')}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
