import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import DutyStations from '@/components/DutyStations'
import PersonnelFile from '@/components/PersonnelFile'
import JobDescription from '@/components/JobDescription'
import SkillsMatrix from '@/components/SkillsMatrix'
import CommandCenter from '@/components/CommandCenter'
import SecurityStack from '@/components/SecurityStack'
import Founder from '@/components/Founder'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DutyStations />
      <PersonnelFile />
      <JobDescription />
      <SkillsMatrix />
      <CommandCenter />
      <SecurityStack />
      <Founder />
      <CTA />
      <Footer />
    </main>
  )
}
