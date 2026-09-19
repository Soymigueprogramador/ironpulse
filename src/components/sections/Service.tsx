import { Activity, Dumbbell, HeartPulse, PersonStanding, Target, Zap } from "lucide-react"
import Container from "../common/Container"
import SectionTitle from "../common/SectionTitle"
import PageSection from "../layout/PageSection"
import { services } from "../../data/services"

const service_icons = [
  Dumbbell,
  Activity,
  Target,
  Zap,
  HeartPulse,
  PersonStanding,
]

function Services() {
  return (
    <PageSection id="servicios">
      <Container>
        <SectionTitle
          eyebrow="Nuestros servicios"
          title="Todo lo que necesitás para entrenar mejor"
          description="Encontrá diferentes opciones de entrenamiento diseñadas para acompañarte en cada etapa de tu progreso."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service_icons[index % service_icons.length]

            return (
              <article
                key={service.id}
                className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-slate-900"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500 transition-colors group-hover:bg-violet-500 group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="text-white">
                  {service.name}
                </h3>

                <p className="mt-3 text-slate-400">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>
      </Container>
    </PageSection>
  )
}

export default Services