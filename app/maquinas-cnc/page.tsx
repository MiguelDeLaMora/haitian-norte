import type { Metadata } from "next";
import LandingPage from "@/components/landing/LandingPage";
import { MAQUINAS_CNC_VARIANT } from "@/lib/landing-variants";

export const metadata: Metadata = {
  title: "Máquinas CNC con Financiamiento Directo",
  description:
    "Centros de maquinado CNC respaldados por la tecnología global del Grupo Haitian. 24 MSI, 15% de enganche e instalación incluida.",
  alternates: { canonical: "/maquinas-cnc" },
  openGraph: {
    title: "Máquinas CNC con Financiamiento Directo | Haitian Norte",
    description:
      "Centros de maquinado CNC respaldados por la tecnología global del Grupo Haitian.",
    url: "/maquinas-cnc",
  },
};

export default function MaquinasCncPage() {
  return <LandingPage variant={MAQUINAS_CNC_VARIANT} />;
}
