// Central content file — edit copy here without touching component markup.

export const company = {
  name: 'Codentrixa',
  founder: 'Preet Raval',
  role: 'AI Business Agent',
  serial: 'CTX-AI-0001',
  clearance: '24 / 7 / 365',
  status: 'ON DUTY',
}

export const hero = {
  eyebrow: 'Personnel File — Open',
  headline: "Don't hire a chatbot.\nHire an employee.",
  sub: "Codentrixa answers, qualifies, negotiates and books meetings across every channel your customers already use — and never once sounds like a script.",
  ctaPrimary: 'Request a demo',
  ctaSecondary: 'Read the full file',
  stat: { value: '1,000+', label: 'simultaneous conversations, one payroll' },
}

// Where the agent clocks in.
export const dutyStations = [
  { name: 'WhatsApp Business', shift: 'Live' },
  { name: 'Instagram DM', shift: 'Live' },
  { name: 'Facebook Messenger', shift: 'Live' },
  { name: 'Website Live Chat', shift: 'Live' },
  { name: 'LinkedIn Messages', shift: 'Live' },
  { name: 'Telegram', shift: 'Live' },
  { name: 'Email', shift: 'Live' },
  { name: 'SMS', shift: 'Live' },
  { name: 'Google Business Messages', shift: 'Live' },
  { name: 'Discord', shift: 'Live' },
  { name: 'Slack', shift: 'Live' },
  { name: 'Microsoft Teams', shift: 'Live' },
  { name: 'Mobile App', shift: 'Live' },
  { name: 'Voice & Phone Calls', shift: 'Onboarding' },
  { name: 'Meta AI / Custom LLM routing', shift: 'Onboarding' },
]

export const traits = [
  { label: 'Professional', note: 'Never over-familiar, never stiff.' },
  { label: 'Confident', note: 'States price, process and timeline plainly.' },
  { label: 'Patient', note: 'Answers the fifth question as carefully as the first.' },
  { label: 'Persuasive', note: 'Moves every thread toward a next step.' },
  { label: 'Fast', note: 'Typing indicator, then a real answer — no queue.' },
  { label: 'Respectful', note: 'Remembers what the customer already told it.' },
]

export const objectives = [
  'Book a meeting',
  'Qualify a lead',
  'Collect contact details',
  'Quote a project',
  'Close a sale',
  'Support an existing client',
  'Upsell the right add-on',
  'Hand off to a human — on purpose',
]

// "Job description" — what the employee is responsible for.
export const responsibilities = [
  {
    key: 'sales',
    title: 'Sales',
    summary: 'Runs discovery like a senior consultant, not a form.',
    duties: [
      'Asks budget, timeline and goals in natural order',
      'Recommends the right package instead of the biggest one',
      'Handles objections without a script loop',
      'Creates real urgency, never fake countdowns',
      'Books the meeting before the conversation goes cold',
    ],
  },
  {
    key: 'support',
    title: 'Support',
    summary: 'Answers the questions that usually wait for office hours.',
    duties: [
      'Pricing, packages, hosting, domains, SEO add-ons',
      'Delivery timelines and maintenance terms',
      'Payments, refunds, invoices and contracts',
      'Reads a PDF, invoice or contract a customer sends in',
      'Escalates to a human the moment it should',
    ],
  },
  {
    key: 'knowledge',
    title: 'Knowledge',
    summary: 'Studies the business before it ever talks to a customer.',
    duties: [
      'Trained on your site, PDFs, pricing sheets, case studies',
      'Reads FAQs, blogs and internal documentation',
      'Pulls from Notion, Drive and past conversations',
      'Updates the moment the source documents change',
      'Cites the same facts a founder would give',
    ],
  },
  {
    key: 'crm',
    title: 'CRM',
    summary: 'Files its own paperwork so no lead sits untouched.',
    duties: [
      'Creates and updates leads in HubSpot, Zoho, Pipedrive & more',
      'Assigns the right salesperson automatically',
      'Logs notes and conversation history against the contact',
      'Sets follow-up reminders at 24 hours, then again at 72',
      'Recovers abandoned inquiries before they go cold',
    ],
  },
]

// Skills matrix — competency review styling.
export const skills = [
  {
    name: 'Document Intelligence',
    detail: 'Reads PDFs, DOCX, spreadsheets, invoices, receipts and contracts, then answers questions against them directly.',
    level: 95,
  },
  {
    name: 'Voice',
    detail: 'Speech-to-text and natural text-to-speech for phone and voice-note conversations.',
    level: 80,
  },
  {
    name: 'Multilingual',
    detail: 'English, Hindi, Gujarati, Spanish, French, German, Arabic, Japanese, Chinese — auto-detected per message.',
    level: 92,
  },
  {
    name: 'Scheduling',
    detail: 'Checks Google Calendar, Calendly or Teams availability, confirms, reschedules and reminds — without double-booking.',
    level: 97,
  },
  {
    name: 'Automation',
    detail: 'Drafts quotations, proposals and invoices, sends payment links, and asks for a review after delivery.',
    level: 90,
  },
]

// Command Center — admin panel
export const adminModules = [
  'Conversations', 'Leads', 'Services & Pricing', 'Knowledge Base',
  'AI Prompt & Rules', 'Integrations', 'Agents & Departments',
  'Campaigns', 'Documents', 'API Keys', 'Permissions',
]

export const analyticsMetrics = [
  { label: 'Conversion rate', hint: 'chat → booked call' },
  { label: 'Avg. response time', hint: 'first reply, any channel' },
  { label: 'Lead sources', hint: 'ranked by channel' },
  { label: 'Revenue attributed', hint: 'by campaign' },
  { label: 'CSAT', hint: 'post-chat rating' },
  { label: 'Top questions', hint: 'this week' },
]

export const security = [
  'JWT & OAuth session security',
  'Optional 2FA for admin access',
  'Encryption in transit and at rest',
  'GDPR-aligned data handling',
  'Role-based permissions per department',
  'Rate limiting & spam detection',
  'Full audit log of every automated action',
  'Scheduled backups',
]

export const techStack = [
  { group: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'NestJS'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM'] },
  { group: 'AI', items: ['OpenAI GPT', 'Claude', 'Gemini', 'Pinecone / ChromaDB'] },
  { group: 'Infrastructure', items: ['AWS', 'Vercel', 'Cloudflare', 'Docker'] },
]

export const founder = {
  name: 'Preet Raval',
  title: 'Founder, Codentrixa',
  bio: "Codentrixa is built by a working software studio, not a chatbot vendor experimenting in public. Every integration listed here — WhatsApp Cloud API, Meta Graph API, calendar sync, CRM sync — is wired to the official platform APIs and shipped the same way we ship client software: documented, tested, monitored.",
}

export const contact = {
  heading: 'Open a requisition',
  sub: "Tell us which channels you're on today. We'll show you the file Codentrixa would build for your business before you sign anything.",
  email: 'hello@codentrixa.com',
}
