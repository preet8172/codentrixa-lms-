'use client'

import { motion } from 'framer-motion'
import { traits, objectives } from '@/lib/data'

export default function PersonnelFile() {
  return (
    <section id="file" className="relative py-24 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        {/* Character */}
        <div>
          <p className="eyebrow text-brassLight mb-4">File 01 — Character</p>
          <h2 className="font-display text-4xl leading-tight mb-10">
            Reads like a senior hire, never a script.
          </h2>

          <div className="space-y-0 border-t border-line">
            {traits.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-6 py-4 border-b border-line"
              >
                <span className="badge-serial text-faint text-xs pt-1 w-6">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-xl italic w-32 shrink-0">{t.label}</span>
                <span className="text-muted text-sm pt-0.5">{t.note}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Objectives */}
        <div>
          <p className="eyebrow text-brassLight mb-4">File 02 — Standing Orders</p>
          <h2 className="font-display text-4xl leading-tight mb-10">
            Every conversation works toward something.
          </h2>

          <div className="rounded-2xl border border-line2 bg-panel/60 p-2">
            {objectives.map((o, i) => (
              <motion.div
                key={o}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-panel2/70 transition-colors"
              >
                <span className="h-4 w-4 rounded-[4px] border border-brass/60 flex items-center justify-center shrink-0">
                  <span className="h-1.5 w-1.5 bg-signal rounded-[1px]" />
                </span>
                <span className="text-paper/90">{o}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
