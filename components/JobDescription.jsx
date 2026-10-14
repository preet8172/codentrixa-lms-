'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { responsibilities } from '@/lib/data'

export default function JobDescription() {
  const [active, setActive] = useState(responsibilities[0].key)
  const current = responsibilities.find((r) => r.key === active)

  return (
    <section className="relative py-24 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow text-brassLight mb-4">File 03 — Job Description</p>
        <h2 className="font-display text-4xl sm:text-5xl leading-tight max-w-2xl mb-12">
          Four roles. One employee number.
        </h2>

        <div className="flex flex-wrap gap-2 mb-2">
          {responsibilities.map((r) => (
            <button
              key={r.key}
              onClick={() => setActive(r.key)}
              className={`folder-tab px-6 py-3 eyebrow transition-colors ${
                active === r.key
                  ? 'bg-panel text-brassLight'
                  : 'bg-panel/30 text-muted hover:text-paper'
              }`}
            >
              {r.title}
            </button>
          ))}
        </div>

        <div className="rounded-b-2xl rounded-tr-2xl border border-line2 bg-panel/60 p-8 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-[1fr_1.4fr] gap-10"
            >
              <div>
                <h3 className="font-display italic text-3xl mb-3">{current.title}</h3>
                <p className="text-muted leading-relaxed">{current.summary}</p>
              </div>
              <ul className="space-y-3">
                {current.duties.map((d) => (
                  <li key={d} className="flex items-start gap-3 border-b border-line pb-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-brass shrink-0" />
                    <span className="text-paper/90 text-[15px]">{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
