/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0C0E',
        panel: '#14171B',
        panel2: '#1B1F24',
        paper: '#F2EFE7',
        muted: '#93958F',
        faint: '#5B5D59',
        brass: '#C9A15A',
        brassLight: '#E7CE93',
        signal: '#5FBE8C',
        signalDim: '#3A6B52',
        rust: '#B25A3B',
        line: 'rgba(242,239,231,0.08)',
        line2: 'rgba(242,239,231,0.14)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        badge: '0 30px 80px -20px rgba(0,0,0,0.6)',
        glass: '0 1px 0 0 rgba(242,239,231,0.06) inset',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
}
