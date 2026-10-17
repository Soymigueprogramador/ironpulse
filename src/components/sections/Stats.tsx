import { motion } from "framer-motion";
import Container from "../common/Container";
import PageSection from "../layout/PageSection";
import { stats } from "../../data/stats";

function Stats() {
  return (
    <PageSection>
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="bg-slate-950 px-4 py-8 text-center sm:px-6 sm:py-10"
            >
              <span className="block text-3xl font-bold text-violet-500 sm:text-4xl lg:text-5xl">
                {stat.value}
              </span>

              <span className="mt-2 block text-sm text-slate-400 sm:text-base">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </PageSection>
  );
}

export default Stats;