import { cn } from "@/lib/utils";
 
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}
 
/**
 * Contenedor centrado con ancho máximo y padding horizontal.
 * Úsalo dentro de Section para limitar el ancho del contenido.
 *
 * @example
 * <Container>...</Container>
 * <Container as="header" className="py-4">...</Container>
 */
export default function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </Tag>
  );
}