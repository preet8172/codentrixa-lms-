'use client'

import { motion } from 'framer-motion'
import { company, hero } from '@/lib/data'

function Badge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -6 }}
      animate={{ opacity: 1, y: 0, rotate: -3 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-[300px] sm:w-[340px]"
    >
      {/* clip + lanyard */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="h-10 w-3 bg-gradient-to-b from-brassLight to-brass rounded-t-full" />
        <div className="h-4 w-9 rounded-md border-2 border-brass/70" />
      </div>

      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-3, -1.5, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative rounded-2xl bg-panel/90 backdrop-blur border border-line2 shadow-badge overflow-hidden"
      >
        {/* punch hole */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-ink border border-line2" />

        <div className="px-6 pt-9 pb-6">
          <div className="flex items-center justify-between mb-5">
            <span className="eyebrow text-brassLight">{company.name}</span>
            <span className="eyebrow text-signal flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
              {company.status}
            </span>
          </div>

          {/* avatar glyph */}
          <div className="relative mx-auto mb-6 h-28 w-28">
            <div className="absolute inset-0 rounded-full border border-brass/30" />
            <div className="absolute inset-3 rounded-full border border-brass/40" />
            <div className="absolute inset-6 rounded-full border border-brass/60" />
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-9 rounded-full bg-signal/70 blur-[2px]"
            />
            <div className="absolute inset-9 rounded-full bg-signal" />
          </div>

          <dl className="space-y-2.5 badge-serial text-[11px]">
            <Row label="Position" value={company.role} />
            <Row label="Clearance" value={company.clearance} />
            <Row label="Stationed" value="All channels" />
            <Row label="Reports to" value={company.founder} />
          </dl>
        </div>

        <div className="border-t border-dashed border-line2 px-6 py-4 flex items-center justify-between">
          <div className="flex gap-[3px]">
            {Array.from({ length: 22 }).map((_, i) => (
              <span
                key={i}
                className="bg-paper/70"
                style={{ width: i % 3 === 0 ? 2 : 1, height: 22 }}
              />
            ))}
          </div>
          <span className="badge-serial text-[10px] text-muted">{company.serial}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-line py-1.5">
      <dt className="text-faint uppercase tracking-wider">{label}</dt>
      <dd className="text-paper">{value}</dd>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-brass/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-[-15%] h-[420px] w-[420px] rounded-full bg-signal/10 blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-brassLight mb-6"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.04] tracking-tight whitespace-pre-line"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-lg text-lg text-muted leading-relaxed"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-brass px-7 py-3.5 font-semibold text-ink hover:bg-brassLight transition-colors"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#file"
              className="rounded-full border border-line2 px-7 py-3.5 text-paper hover:border-brass/60 transition-colors"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-14 flex items-center gap-4 border-t border-line pt-6 max-w-sm"
          >
            <span className="font-display text-3xl text-brassLight">{hero.stat.value}</span>
            <span className="text-sm text-muted leading-snug">{hero.stat.label}</span>
          </motion.div>
        </div>

        <Badge />
      </div>
    </section>
  )
}
