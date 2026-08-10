import Image from "next/image";
import Link from "next/link";
import type { PrivacyVersion } from "./privacy-content";

type PrivacyDocumentProps = {
  privacy: PrivacyVersion;
};

export function PrivacyDocument({ privacy }: PrivacyDocumentProps) {
  return (
    <main className="privacy-page min-h-screen bg-[#fbfaf7] text-[#023464]">
      <header className="privacy-header">
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

      <article className="privacy-document">
        <p className="section-kicker">Política de Privacidad</p>
        <h1>{privacy.title}</h1>
        <p className="privacy-updated">
          {privacy.updatedLabel} · Versión {privacy.version}
        </p>

        <div className="privacy-intro">
          {privacy.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="privacy-sections">
          {privacy.sections.map((section) => (
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
