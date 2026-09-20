import Container from "../common/Container";
import PageSection from "../layout/PageSection";
import Button from "../common/Button";

function Hero() {
  return (
    <PageSection className="flex min-h-[calc(100vh-5rem)] items-center">
      <Container>
        <div id="inicio" className="max-w-4xl">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
            Entrenamiento de alto rendimiento
          </span>

          <h1 className="max-w-4xl text-white">
            Entrená más fuerte.
            <span className="block text-violet-500">Viví mejor.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Transformá tu entrenamiento con un espacio diseñado para ayudarte a
            superar tus límites y alcanzar tus objetivos.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button>Comenzar ahora</Button>

            <Button
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("servicios")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Conocer más
            </Button>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}

export default Hero;