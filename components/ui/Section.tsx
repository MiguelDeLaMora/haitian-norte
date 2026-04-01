import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
 
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  size?: "sm" | "md" | "lg" | "xl";
  container?: boolean;
  as?: React.ElementType;
}
 
const sectionSizes = {
  sm: "py-10 md:py-14",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-32 md:py-40",
};
 
/**
 * Bloque de sección con espaciado vertical consistente.
 * Por defecto envuelve el contenido en un Container centrado.
 *
 * Props:
 * - size: controla el padding vertical (sm | md | lg | xl). Default: "md"
 * - container: si es false, el contenido va full-bleed sin max-width. Default: true
 * - containerClassName: clases extra para el Container interno
 * - as: elemento HTML a renderizar. Default: "section"
 *
 * @example
 * // Uso normal
 * <Section size="lg">
 *   <h2 className="text-h3">Título</h2>
 * </Section>
 *
 * // Full-bleed (imagen de fondo edge-to-edge)
 * <Section container={false} className="bg-primary">
 *   <Container>
 *     <h2 className="text-h3 text-white">Título</h2>
 *   </Container>
 * </Section>
 *
 * // Con clases extra en el wrapper
 * <Section className="bg-neutral-50" containerClassName="text-center">
 *   ...
 * </Section>
 */
export default function Section({
  children,
  className,
  containerClassName,
  size = "md",
  container = true,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag className={cn(sectionSizes[size], className)}>
      {container ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </Tag>
  );
}