import { motion, useReducedMotion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import TestimonialCard from "../ui/TestimonialCard";
import PageSection from "../layout/PageSection";
import { testimonials } from "../../data/testimonials";

function Testimonials() {
const shouldReduceMotion = useReducedMotion();

return ( <PageSection id="testimonios" className="bg-slate-900/30"> <Container> <SectionTitle
       eyebrow="Experiencias reales"
       title="Lo que dicen nuestros socios"
       description="Personas que eligieron IRONPULSE para entrenar, progresar y alcanzar sus objetivos."
     />


    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 24 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }
          }
        >
          <TestimonialCard testimonial={testimonial} />
        </motion.div>
      ))}
    </div>
  </Container>
</PageSection>


);
}

export default Testimonials;
