import type { Metadata } from "next";
import { PrivacyDocument } from "./PrivacyDocument";
import { currentPrivacyVersion } from "./privacy-content";

export const metadata: Metadata = {
  title: "Política de Privacidad | La Palabra",
  description:
    "Política de Privacidad de La Palabra, una aplicación bíblica en español con lectura, versículo del día, daily streak, pedidos de oración y notificaciones opcionales.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyDocument privacy={currentPrivacyVersion} />;
}
