import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PageSection from "../layout/PageSection";
import TrainerCard from "../common/TrainerCard";
import { trainers } from "../../data/trainers";

function Trainers() {
  return (
    <PageSection id="entrenadores">
      <Container>
        <SectionTitle
          eyebrow="Nuestro equipo"
          title="Entrenadores que te acompañan en cada paso"
          description="Profesionales preparados para ayudarte a entrenar de forma segura y alcanzar tus objetivos."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </Container>
    </PageSection>
  );
}

export default Trainers;