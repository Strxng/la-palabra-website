import Image from "next/image";
import Link from "next/link";
import type { TermsVersion } from "./terms-content";

type TermsDocumentProps = {
  terms: TermsVersion;
};

export function TermsDocument({ terms }: TermsDocumentProps) {
  return (
    <main className="legal-page min-h-screen bg-[var(--color-background)] text-[var(--color-primary)]">
      <header className="legal-header">
        <Link className="brand-lockup" href="/" aria-label="La Palabra">
          <Image
            src="/estrela-azul.png"
            alt=""
            width={1024}
            height={1024}
            className="brand-star"
            aria-hidden="true"
            priority
          />
          <span>La Palabra</span>
        </Link>
      </header>

      <article className="legal-document">
        <p className="section-kicker">Términos de Uso</p>
        <h1>{terms.title}</h1>
        <p className="legal-updated">
          {terms.updatedLabel} · Versión {terms.version}
        </p>

        <div className="legal-intro">
          {terms.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="legal-sections">
          {terms.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
