import { company } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="h-6 w-6 rounded-full border border-brass/60 flex items-center justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          </span>
          <span className="font-display italic text-paper/80">{company.name}</span>
        </div>
        <p className="eyebrow text-faint text-center">
          © {new Date().getFullYear()} {company.name} · Built by {company.founder}
        </p>
        <div className="flex gap-5 eyebrow text-faint">
          <a href="#top" className="hover:text-brassLight transition-colors">Top</a>
          <a href="#contact" className="hover:text-brassLight transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
