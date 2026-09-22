import {
  Activity,
  Dumbbell,
  HeartPulse,
  PersonStanding,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PageSection from "../layout/PageSection";
import ServiceCard from "../common/ServiceCard";
import { services } from "../../data/services";

const service_icons: Record<string, LucideIcon> = {
  Dumbbell,
  Activity,
  HeartPulse,
  PersonStanding,
  Target,
  Zap,
};

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
            const Icon = service_icons[service.icon] ?? Dumbbell;

            return (
              <ServiceCard
                key={service.id}
                name={service.name}
                description={service.description}
                Icon={Icon}
                index={index}
              />
            );
          })}
        </div>
      </Container>
    </PageSection>
  );
}

export default Services;