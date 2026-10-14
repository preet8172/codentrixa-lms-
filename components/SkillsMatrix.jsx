'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'

export default function SkillsMatrix() {
  return (
    <section id="skills" className="relative py-24 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow text-brassLight mb-4">File 04 — Competency Review</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight max-w-xl">
              Skills logged, not just claimed.
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid md:grid-cols-[220px_1fr_80px] gap-4 md:gap-8 items-start md:items-center border-b border-line pb-7"
            >
              <span className="font-display italic text-2xl">{s.name}</span>
              <div>
                <p className="text-muted text-sm mb-2.5 max-w-xl">{s.detail}</p>
                <div className="h-1.5 rounded-full bg-line2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 + i * 0.06, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-signalDim to-signal"
                  />
                </div>
              </div>
              <span className="badge-serial text-brassLight text-sm text-right">{s.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
