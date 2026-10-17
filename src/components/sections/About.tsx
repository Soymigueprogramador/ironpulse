import { Dumbbell, HeartPulse, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import Container from "../common/Container"
import SectionTitle from "../common/SectionTitle"
import PageSection from "../layout/PageSection"

const about_items = [
  {
    id: "history",
    icon: Trophy,
    title: "Nuestra historia",
    description:
      "IRONPULSE nació con la idea de crear un espacio donde el entrenamiento y la constancia se conviertan en parte de un estilo de vida.",
  },
  {
    id: "philosophy",
    icon: HeartPulse,
    title: "Nuestra filosofía",
    description:
      "Creemos en el progreso constante, el acompañamiento y el entrenamiento adaptado a los objetivos de cada persona.",
  },
  {
    id: "facilities",
    icon: Dumbbell,
    title: "Nuestras instalaciones",
    description:
      "Contamos con un espacio equipado para que puedas entrenar cómodamente, desarrollar tu potencial y disfrutar cada sesión.",
  },
]

function About() {
  return (
    <PageSection id="nosotros" className="bg-slate-900/30">
      <Container>
        <SectionTitle
          eyebrow="Nosotros"
          title="Entrená en un lugar pensado para vos"
          description="En IRONPULSE combinamos entrenamiento, acompañamiento y un espacio preparado para ayudarte a alcanzar tus objetivos."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {about_items.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition-colors duration-300 hover:border-violet-500/50 sm:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500">
                  <Icon size={24} strokeWidth={2} />
                </div>

                <h3 className="text-white">{item.title}</h3>

                <p className="mt-4 text-slate-400">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </PageSection>
  )
}

export default About