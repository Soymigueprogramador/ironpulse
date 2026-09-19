interface SectionTitleProps {
    eyebrow: string

    title: string
    description?: string // La descripcion no es obligatoria
}

function SectionTitle({ eyebrow, title, description, }: SectionTitleProps) {
    return (
        <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-500">
                {
                    eyebrow
                }
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {
                    title
                }
            </h2>

            {
                description && (
                    <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
                        {
                            description
                        }
                    </p>
                )
            }
        </div>
    )
}

export default SectionTitle

// Formas de usar el componente:
/*
    <SectionTitle
        eyebrow="Entrenamiento"
        title="Entrená más fuerte"
    />
    
    <SectionTitle
        eyebrow="Entrenamiento"
        title="Entrená más fuerte"
        description="Programas diseñados para ayudarte a alcanzar tus objetivos."
    />
*/