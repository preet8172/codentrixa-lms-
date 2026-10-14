'use client'

import { motion } from 'framer-motion'
import { adminModules, analyticsMetrics } from '@/lib/data'

export default function CommandCenter() {
  return (
    <section id="command" className="relative py-24 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow text-brassLight mb-4">File 05 — Command Center</p>
        <h2 className="font-display text-4xl sm:text-5xl leading-tight max-w-2xl mb-14">
          Everything the agent does, visible to the humans in charge.
        </h2>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-6">
          {/* modules panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-line2 bg-panel/60 p-7"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="eyebrow text-muted">Admin Dashboard</span>
              <span className="eyebrow text-signal flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" /> Live
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {adminModules.map((m) => (
                <div
                  key={m}
                  className="rounded-lg border border-line px-3.5 py-3 text-sm text-paper/85 hover:border-brass/40 hover:text-brassLight transition-colors"
                >
                  {m}
                </div>
              ))}
            </div>
          </motion.div>

          {/* analytics panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-line2 bg-panel/60 p-7"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="eyebrow text-muted">Performance Review</span>
              <span className="eyebrow text-muted">Weekly</span>
            </div>
            <div className="space-y-0">
              {analyticsMetrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`flex items-center justify-between py-3.5 ${
                    i !== analyticsMetrics.length - 1 ? 'border-b border-line' : ''
                  }`}
                >
                  <span className="text-paper/90 text-sm">{m.label}</span>
                  <span className="badge-serial text-xs text-faint">{m.hint}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
