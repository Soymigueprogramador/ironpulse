import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PageSection from "../layout/PageSection";
import Button from "../common/Button";
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

        <div className="grid gap-6 md:grid-cols-3">
          {trainers.map((trainer) => (
            <article
              key={trainer.id}
              className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50"
            >
              <div className="flex h-64 items-center justify-center bg-slate-800">
                <span className="text-5xl font-bold text-slate-600">
                  {trainer.name.charAt(0)}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-white">{trainer.name}</h3>

                <p className="mt-2 text-sm font-medium text-violet-500">
                  {trainer.speciality}
                </p>

                <p className="mt-3 text-slate-400">{trainer.bio}</p>

                <Button variant="secondary" className="mt-6 w-full">
                  Ver perfil
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </PageSection>
  );
}

export default Trainers;