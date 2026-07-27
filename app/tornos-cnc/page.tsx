import type { Metadata } from "next";
import LandingPage from "@/components/landing/LandingPage";
import { TORNOS_CNC_VARIANT } from "@/lib/landing-variants";

export const metadata: Metadata = {
  title: "Tornos CNC con Financiamiento Directo",
  description:
    "Tornos CNC fabricados en México, respaldados por la tecnología global del Grupo Haitian. 24 MSI, 15% de enganche e instalación incluida.",
  alternates: { canonical: "/tornos-cnc" },
  openGraph: {
    title: "Tornos CNC con Financiamiento Directo | Haitian Norte",
    description:
      "Tornos CNC fabricados en México, respaldados por la tecnología global del Grupo Haitian.",
    url: "/tornos-cnc",
  },
};

export default function TornosCncPage() {
  return <LandingPage variant={TORNOS_CNC_VARIANT} />;
}
