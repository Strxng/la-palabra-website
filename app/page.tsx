import Image from "next/image";

const features = [
  {
    title: "Biblia en español",
    description:
      "Lee con navegación simple, texto claro y una interfaz ligera para volver a la Palabra sin distracciones.",
  },
  {
    title: "Versículo del día",
    description:
      "Recibe una lectura diaria para meditar, guardar y llevar contigo durante todo el día.",
  },
  {
    title: "Checklist diario",
    description:
      "Completa las acciones del día, sigue tu progreso y mantén viva tu secuencia de lectura.",
  },
  {
    title: "Oración y favoritos",
    description:
      "Guarda pasajes importantes y registra pedidos de oración para acompañar tu caminar con Dios.",
  },
];

const steps = [
  "Abre el versículo del día y empieza con una lectura breve.",
  "Marca el checklist diario conforme lees, oras y guardas lo que quieres recordar.",
  "Vuelve a tus favoritos, acompaña tus pedidos de oración y conserva tu daily streak.",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-primary)]">
      <section className="hero-shell relative isolate flex min-h-[92svh] items-center overflow-hidden px-6 pb-16 pt-6 sm:px-10 lg:px-16">
        <div className="hero-background absolute inset-0 -z-20" />
        <div className="hero-fade absolute inset-x-0 bottom-0 -z-10 h-28" />

        <header className="absolute left-6 right-6 top-6 z-20 flex items-center justify-between sm:left-10 sm:right-10 lg:left-16 lg:right-16">
          <a className="brand-lockup" href="#inicio" aria-label="La Palabra">
            <Image
              src="/estrela-azul.png"
              alt=""
              width={1024}
              height={1024}
              className="brand-star"
              aria-hidden="true"
            />
            <span>La Palabra</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-[color:var(--color-text-tertiary)] md:flex">
            <a href="#recursos">Recursos</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#oracion">Oración</a>
          </nav>
          <a className="nav-cta" href="#descargar">
            Descargar
          </a>
        </header>

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 pt-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.75fr)]">
          <div id="inicio" className="relative z-10 max-w-3xl">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-tertiary)]">
              Biblia, versículo del día, checklist y oración
            </p>
            <h1 className="font-serif text-[clamp(3rem,7vw,7.4rem)] leading-[0.92] text-[var(--color-primary)]">
              La Palabra para cultivar tu día.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-text-tertiary)] sm:text-xl sm:leading-9">
              Una Biblia en español creada para comprender la Palabra de Dios
              de forma simple, moderna y accesible. Lee el versículo del día,
              completa tu checklist, guarda tus pasajes, presenta tus pedidos
              de oración y mantén tu daily streak con intención.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="primary-cta" href="#descargar">
                Comenzar gratis
              </a>
              <a className="secondary-cta" href="#recursos">
                Explorar recursos
              </a>
            </div>
            <div className="mt-10 hidden max-w-2xl gap-4 border-t border-[color:var(--color-border)] pt-7 sm:grid sm:grid-cols-3">
              <div>
                <strong className="block font-serif text-3xl text-[var(--color-primary)]">
                  Checklist
                </strong>
                <span className="text-sm font-semibold text-[var(--color-text-tertiary)]">
                  para cerrar cada día
                </span>
              </div>
              <div>
                <strong className="block font-serif text-3xl text-[var(--color-primary)]">
                  Streak
                </strong>
                <span className="text-sm font-semibold text-[var(--color-text-tertiary)]">
                  para construir constancia
                </span>
              </div>
              <div>
                <strong className="block font-serif text-3xl text-[var(--color-primary)]">
                  Favoritos
                </strong>
                <span className="text-sm font-semibold text-[var(--color-text-tertiary)]">
                  para volver a lo esencial
                </span>
              </div>
            </div>
          </div>

          <div className="hero-phone relative z-0 mx-auto w-full max-w-[390px] lg:mr-6">
            <div className="phone-glow" aria-hidden="true" />
            <div className="phone-frame">
              <Image
                src="/app-home.webp"
                alt="Pantalla principal de la aplicación La Palabra"
                width={720}
                height={1600}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16" id="recursos">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <p className="section-kicker">Recursos principales</p>
              <h2 className="section-title">
                Todo lo necesario para leer con claridad y constancia.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-text-tertiary)]">
              La Palabra une lectura bíblica, checklist diario, oración,
              favoritos y constancia en una experiencia tranquila. El diseño
              acompaña, pero el centro sigue siendo la Palabra.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <span className="feature-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-y border-[color:var(--color-border)] bg-[var(--color-surface)] px-6 py-20 sm:px-10 lg:px-16"
        id="como-funciona"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <p className="section-kicker">Cómo funciona</p>
            <h2 className="section-title">
              Un camino sencillo para hacer de la Biblia parte de tu rutina.
            </h2>
          </div>
          <div className="space-y-5">
            {steps.map((step, index) => (
              <div className="step-row" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16" id="oracion">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="community-panel">
            <div className="mini-card mini-card-primary">
              <span>Daily streak</span>
              <strong>Tu constancia se sostiene con pasos pequeños.</strong>
            </div>
            <div className="mini-card mini-card-checklist">
              <span>Checklist de hoy</span>
              <ul aria-label="Ejemplo de checklist diario">
                <li>Versículo del día</li>
                <li>Lectura bíblica</li>
                <li>Pedido de oración</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="section-kicker">Oración y constancia</p>
            <h2 className="section-title">
              Más que una Biblia digital, un hábito de fe.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-text-tertiary)]">
              El checklist convierte la intención en una práctica concreta:
              lees, oras, guardas lo importante y ves tu progreso sin que la
              experiencia se vuelva pesada.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-16" id="descargar">
        <div className="download-panel mx-auto max-w-7xl overflow-hidden px-6 py-14 sm:px-10 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-tertiary)]">
                Empieza hoy
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
                Lleva la Palabra de Dios a tu rutina diaria.
              </h2>
              <p className="download-copy mt-5 max-w-2xl text-lg leading-8">
                Una experiencia en español para leer, orar, guardar y crecer
                con más claridad y constancia.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a className="store-button" href="https://apps.apple.com/br/app/la-palabra/id6789340172" aria-label="Descargar en App Store">
                <span>Descargar en</span>
                <strong>App Store</strong>
              </a>
              <a className="store-button" href="https://play.google.com/store/apps/details?id=com.bazanapps.lapalabra" aria-label="Disponible en Google Play">
                <span>Disponible en</span>
                <strong>Google Play</strong>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
