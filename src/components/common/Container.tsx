// Definimos las propiedades que puede recibir el componente Container.
interface ContainerProps {
  // children representa el contenido que estará dentro del contenedor.
  children: React.ReactNode
}

// Creamos un componente reutilizable para contener el contenido de la página.
function Container({ children }: ContainerProps) {
  // Renderizamos el contenido recibido dentro de un contenedor responsive.
  return (
    // Limitamos el ancho, centramos el contenido y agregamos espaciado horizontal.
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Mostramos el contenido recibido por el componente. */}
      {children}
    </div>
  )
}

// Exportamos Container para poder utilizarlo en otras partes de la aplicación.
export default Container