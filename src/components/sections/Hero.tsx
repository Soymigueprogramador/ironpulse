import { motion } from "framer-motion";

import Container from "../common/Container";

import PageSection from "../layout/PageSection";

import Button from "../common/Button";

function Hero() {
  return (
    <PageSection className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1778828494365-c798ff9cce2c?auto=format&fit=crop&fm=jpg&q=80&w=2000)",
        }}
      />

      <div className="absolute inset-0 bg-slate-950/75" />

      <Container>
        <motion.div
          id="inicio"
          className="relative max-w-4xl scroll-mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
            Entrenamiento de alto rendimiento
          </span>

          <h1 className="max-w-4xl text-white">
            Entrená más fuerte.
            <span className="block text-violet-500">Viví mejor.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Transformá tu entrenamiento con un espacio diseñado para ayudarte a
            superar tus límites y alcanzar tus objetivos.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#planes">Comenzar ahora</Button>

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
        </motion.div>
      </Container>
    </PageSection>
  );
}

export default Hero;