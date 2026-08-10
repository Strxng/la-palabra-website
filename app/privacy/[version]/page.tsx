import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyDocument } from "../PrivacyDocument";
import { getPrivacyVersion, privacyVersions } from "../privacy-content";

type PrivacyVersionPageProps = {
  params: Promise<{
    version: string;
  }>;
};

export function generateStaticParams() {
  return privacyVersions.map((privacyVersion) => ({
    version: privacyVersion.version,
  }));
}

export async function generateMetadata({
  params,
}: PrivacyVersionPageProps): Promise<Metadata> {
  const { version } = await params;
  const privacy = getPrivacyVersion(version);

  if (!privacy) {
    return {
      title: "Política de Privacidad | La Palabra",
    };
  }

  return {
    title: `${privacy.title} | Versión ${privacy.version}`,
    description: `Versión ${privacy.version} de la Política de Privacidad de La Palabra.`,
  };
}

export default async function PrivacyVersionPage({
  params,
}: PrivacyVersionPageProps) {
  const { version } = await params;
  const privacy = getPrivacyVersion(version);

  if (!privacy) {
    notFound();
  }

  return <PrivacyDocument privacy={privacy} />;
}
