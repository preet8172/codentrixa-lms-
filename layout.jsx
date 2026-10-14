import { Fraunces, Manrope, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const display = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const body = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Codentrixa — AI Employee for Your Business',
  description:
    "Not a chatbot. An AI Employee. Codentrixa answers, qualifies, books and sells across WhatsApp, Instagram, Facebook, LinkedIn, email and your website — 24 hours a day, on the record.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-ink text-paper font-body antialiased">
        <div className="grain" />
        {children}
      </body>
    </html>
  )
}
