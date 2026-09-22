import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  name: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

function ServiceCard({
  name,
  description,
  Icon,
  index,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-slate-900"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500 transition-colors duration-300 group-hover:bg-violet-500 group-hover:text-white">
        <Icon size={24} />
      </div>

      <h3 className="text-xl font-semibold text-white">{name}</h3>

      <p className="mt-3 leading-relaxed text-slate-400">{description}</p>
    </motion.article>
  );
}

export default ServiceCard;