import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PageSection from "../layout/PageSection";
import Button from "../common/Button";
import { plans } from "../../data/plans";

function Plans() {
  return (
    <PageSection id="planes" className="bg-slate-900/30">
      <Container>
        <SectionTitle
          eyebrow="Nuestros planes"
          title="Elegí el plan que mejor se adapta a vos"
          description="Opciones flexibles para que puedas entrenar con todo lo que necesitás."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className="flex flex-col rounded-xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50"
            >
              <h3 className="text-white">{plan.name}</h3>

              <p className="mt-3 text-slate-400">{plan.description}</p>

              <div className="mt-6">
                <span className="text-3xl font-bold text-white">
                  ${plan.price}
                </span>
                <span className="ml-2 text-sm text-slate-500">/ mes</span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-sm text-slate-300">
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <Button className="mt-8 w-full">Elegir plan</Button>
            </article>
          ))}
        </div>
      </Container>
    </PageSection>
  );
}

export default Plans;