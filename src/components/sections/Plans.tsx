import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PlanCard from "../common/PlanCard";
import PageSection from "../layout/PageSection";
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
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </PageSection>
  );
}

export default Plans;