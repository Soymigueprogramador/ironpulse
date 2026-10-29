import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresá tu nombre completo"),
  email: z
    .string()
    .trim()
    .min(1, "Ingresá tu correo electrónico")
    .email("Ingresá un correo electrónico válido"),
  telefono: z.string(),
  motivo: z.enum(["planes", "entrenamiento", "horarios", "otro"], {
    error: "Seleccioná un motivo de consulta",
  }),
  mensaje: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const fieldClass = (hasError: boolean) =>
  `w-full rounded-xl border bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-violet-500 ${
    hasError ? "border-red-500" : "border-slate-700"
  }`;

const errorClass = "mt-2 text-sm text-red-400";

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      motivo: undefined,
      mensaje: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSuccess(false);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(data);
    reset();
    setIsSuccess(true);
  };

  return (
    <section id="contacto" className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400">
            CONTACTO
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Empezá tu transformación
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            Dejanos tu consulta y te ayudamos a encontrar el plan ideal para vos.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-black/20 sm:p-8 lg:p-10">
          {isSuccess && (
            <div
              role="status"
              aria-live="polite"
              className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300"
            >
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 h-6 w-6 shrink-0"
              />
              <div>
                <p className="font-semibold">¡Consulta enviada correctamente!</p>
                <p className="mt-1 text-sm leading-6 text-emerald-200/80">
                  Gracias por contactarnos. Tu consulta se procesó correctamente.
                </p>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  type="text"
                  autoComplete="name"
                  placeholder="Tu nombre"
                  aria-invalid={Boolean(errors.nombre)}
                  aria-describedby={errors.nombre ? "nombre-error" : undefined}
                  className={fieldClass(Boolean(errors.nombre))}
                  {...register("nombre")}
                />
                {errors.nombre && (
                  <p id="nombre-error" role="alert" className={errorClass}>
                    {errors.nombre.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="tu@email.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldClass(Boolean(errors.email))}
                  {...register("email")}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className={errorClass}>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="telefono"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Teléfono <span className="text-slate-500">(opcional)</span>
                </label>
                <input
                  id="telefono"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Tu número de teléfono"
                  aria-invalid={Boolean(errors.telefono)}
                  aria-describedby={errors.telefono ? "telefono-error" : undefined}
                  className={fieldClass(Boolean(errors.telefono))}
                  {...register("telefono")}
                />
                {errors.telefono && (
                  <p id="telefono-error" role="alert" className={errorClass}>
                    {errors.telefono.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="motivo"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Motivo de consulta
                </label>
                <select
                  id="motivo"
                  aria-invalid={Boolean(errors.motivo)}
                  aria-describedby={errors.motivo ? "motivo-error" : undefined}
                  className={fieldClass(Boolean(errors.motivo))}
                  {...register("motivo")}
                >
                  <option value="">Seleccioná una opción</option>
                  <option value="planes">Planes y membresías</option>
                  <option value="entrenamiento">Entrenamiento</option>
                  <option value="horarios">Horarios y disponibilidad</option>
                  <option value="otro">Otro motivo</option>
                </select>
                {errors.motivo && (
                  <p id="motivo-error" role="alert" className={errorClass}>
                    {errors.motivo.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={5}
                placeholder="Contanos cómo podemos ayudarte..."
                aria-invalid={Boolean(errors.mensaje)}
                aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                className={`${fieldClass(Boolean(errors.mensaje))} resize-y`}
                {...register("mensaje")}
              />
              {errors.mensaje && (
                <p id="mensaje-error" role="alert" className={errorClass}>
                  {errors.mensaje.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-48"
            >
              {isSubmitting ? "Enviando..." : "Enviar consulta"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}