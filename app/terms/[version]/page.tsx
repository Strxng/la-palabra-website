import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TermsDocument } from "../TermsDocument";
import { getTermsVersion, termsVersions } from "../terms-content";

type TermsVersionPageProps = {
  params: Promise<{
    version: string;
  }>;
};

export function generateStaticParams() {
  return termsVersions.map((termsVersion) => ({
    version: termsVersion.version,
  }));
}

export async function generateMetadata({
  params,
}: TermsVersionPageProps): Promise<Metadata> {
  const { version } = await params;
  const terms = getTermsVersion(version);

  if (!terms) {
    return {
      title: "Términos de Uso | La Palabra",
    };
  }

  return {
    title: `${terms.title} | Versión ${terms.version}`,
    description: `Versión ${terms.version} de los Términos de Uso de La Palabra.`,
  };
}

export default async function TermsVersionPage({
  params,
}: TermsVersionPageProps) {
  const { version } = await params;
  const terms = getTermsVersion(version);

  if (!terms) {
    notFound();
  }

  return <TermsDocument terms={terms} />;
}
