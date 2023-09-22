import { HomeHeader } from "@/components/Headers"
import { Section, SectionFirst } from "@/components/Section"

export default function Home() {
  return (
    <>
    <HomeHeader />
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Section className={'flex items-cent '} >
        <h1>Section 1</h1>
      </Section>
      <Section className={'flex items-cent'} >
        <h1>Section 2</h1>
      </Section>
    </main>
    </>
  )
}
