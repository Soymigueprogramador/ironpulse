import Container from "./components/common/Container"
import SectionTitle from "./components/common/SectionTitle"
import PageSection from "./components/layout/PageSection"

function App() {
  return (
    <main>
      <PageSection>
        <Container>
          <SectionTitle
            eyebrow="IRONPULSE"
            title="Entrená más fuerte. Viví mejor."
            description="Una experiencia de entrenamiento diseñada para ayudarte a alcanzar tus objetivos."
          />
        </Container>
      </PageSection>
    </main>
  )
}

export default App