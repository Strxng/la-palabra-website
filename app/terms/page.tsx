import type { Metadata } from "next";
import { TermsDocument } from "./TermsDocument";
import { currentTermsVersion } from "./terms-content";

export const metadata: Metadata = {
  title: "Términos de Uso | La Palabra",
  description:
    "Términos de Uso de La Palabra, una aplicación bíblica en español con lectura, versículo del día, daily streak y pedidos de oración.",
};

export default function TermsPage() {
  return <TermsDocument terms={currentTermsVersion} />;
}
