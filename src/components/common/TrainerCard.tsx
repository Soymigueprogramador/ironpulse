import type { Trainer } from "../../types/trainer";
import { Globe } from "lucide-react";
import Button from "./Button";

interface TrainerCardProps {
  trainer: Trainer;
}

function TrainerCard({ trainer }: TrainerCardProps) {
  const socialLinks = [
    {
      name: "Instagram",
      url: trainer.socialLinks?.instagram,
    },
    {
      name: "Facebook",
      url: trainer.socialLinks?.facebook,
    },
    {
      name: "LinkedIn",
      url: trainer.socialLinks?.linkedin,
    },
  ].filter((social) => social.url);

  return (
    <article className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50">
      <div className="h-64 overflow-hidden bg-slate-800">
        <img
          src={trainer.image}
          alt={`Fotografía de ${trainer.name}`}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="p-6">
        <h3 className="text-white">{trainer.name}</h3>

        <p className="mt-2 text-sm font-medium text-violet-500">
          {trainer.specialty}
        </p>

        <p className="mt-3 text-slate-400">{trainer.bio}</p>

        {socialLinks.length > 0 && (
          <div className="mt-5 flex items-center gap-4">
            {socialLinks.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} de ${trainer.name}`}
                title={name}
                className="text-slate-400 transition-colors hover:text-violet-400"
              >
                <Globe size={20} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}

        <Button variant="secondary" className="mt-6 w-full">
          Ver perfil
        </Button>
      </div>
    </article>
  );
}

export default TrainerCard;