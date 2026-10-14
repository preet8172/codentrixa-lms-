'use client'

import { motion } from 'framer-motion'
import { dutyStations } from '@/lib/data'

export default function DutyStations() {
  return (
    <section id="stations" className="relative py-24 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow text-brassLight mb-4">Duty Roster</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight max-w-xl">
              One employee, stationed everywhere your customers already are.
            </h2>
          </div>
          <p className="text-muted max-w-sm">
            No separate bot per platform, no separate personality to manage. Codentrixa carries
            the same memory, tone and knowledge from one inbox to the next.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-line rounded-2xl overflow-hidden">
          {dutyStations.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 10) * 0.03 }}
              className="bg-ink p-5 flex flex-col gap-3 min-h-[112px] justify-between"
            >
              <span
                className={`eyebrow text-[9px] w-fit rounded-full px-2 py-1 border ${
                  s.shift === 'Live'
                    ? 'text-signal border-signalDim'
                    : 'text-brassLight border-brass/40'
                }`}
              >
                {s.shift === 'Live' ? 'On duty' : 'Onboarding'}
              </span>
              <span className="text-[15px] leading-snug text-paper/90">{s.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
