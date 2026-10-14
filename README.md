# Codentrixa — AI Employee Landing Page

A marketing site for the Codentrixa AI Business Agent, framed around one idea from the brief:
**"Don't build a chatbot. Build an AI Employee."** The whole page is styled as the agent's own
personnel file — duty roster, character traits, job description, competency review, command
center and clearance — instead of a generic SaaS feature grid.

## Design system

- **Palette:** near-black ink background (`#0A0C0E`), warm brass accent (`#C9A15A`) standing in
  for badge metal, a muted signal-green for "on duty" status.
- **Type:** Fraunces (display serif, used sparingly for headlines and italics), Manrope (body),
  JetBrains Mono (labels, serials, data — matches your existing pattern across other projects).
- **Signature element:** the animated employee ID badge in the hero, floating on a lanyard, with
  a pulsing "on duty" status glyph and a barcode serial strip.

## Stack

Next.js 14 (App Router), plain JSX, Tailwind CSS, Framer Motion, lucide-react.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The first `npm run build`/`npm run dev` needs an internet connection
once to fetch the Google Fonts (Fraunces / Manrope / JetBrains Mono) — after that they're cached
locally by `next/font`.

## Editing content

All copy lives in `lib/data.js` — company info, hero copy, duty stations (platform list),
personality traits, standing orders, the four job-description tabs, the skills matrix, admin
panel modules, analytics metrics, security list, tech stack, founder bio and the contact block.
Change the arrays/objects there and every section updates automatically; you shouldn't need to
touch component markup for copy edits.

## Structure

```
app/
  layout.jsx      – fonts, metadata, global shell
  page.jsx         – assembles all sections
  globals.css       – theme tokens, grain overlay, custom utilities
components/
  Navbar, Hero, DutyStations, PersonnelFile, JobDescription,
  SkillsMatrix, CommandCenter, SecurityStack, Founder, CTA, Footer
lib/
  data.js           – all editable content
```

## Next steps for a production build

- Wire the demo-request form in `components/CTA.jsx` to your form handler / CRM.
- Swap the placeholder duty-station "On duty / Onboarding" tags for your real integration status.
- Add real screenshots of the admin dashboard once it exists, or keep the abstracted panel mockups.
