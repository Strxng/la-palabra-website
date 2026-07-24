import Image from "next/image";

const features = [
  {
    title: "Biblia en español",
    description:
      "Lectura clara, navegación simple y una experiencia pensada para volver a la Palabra todos los días.",
  },
  {
    title: "Explicaciones con IA",
    description:
      "Comprende pasajes difíciles con respuestas accesibles, guiadas por el contexto y orientadas al estudio.",
  },
  {
    title: "Daily streak",
    description:
      "Mantén tu secuencia de lectura, celebra cada día completado y convierte la constancia en parte de tu fe.",
  },
  {
    title: "Grupos privados",
    description:
      "Lee junto a tu comunidad, comparte avances y acompaña a otros en un espacio seguro y acogedor.",
  },
];

const steps = [
  "Escoge un plan de lectura o empieza por el versículo del día.",
  "Lee, guarda tus pasajes favoritos y pide una explicación cuando necesites más claridad.",
  "Comparte reflexiones, pedidos de oración y progreso con tu grupo privado.",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfaf7] text-[#023464]">
      <section className="hero-shell relative isolate flex min-h-[92svh] items-center overflow-hidden px-6 pb-16 pt-6 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#ffffff_0%,#f8f4ec_45%,#eaf6f7_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-[linear-gradient(180deg,rgba(251,250,247,0),#fbfaf7)]" />

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
          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#023464]/75 md:flex">
            <a href="#recursos">Recursos</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#comunidad">Comunidad</a>
          </nav>
          <a className="nav-cta" href="#descargar">
            Descargar
          </a>
        </header>

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 pt-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.75fr)]">
          <div id="inicio" className="relative z-10 max-w-3xl">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.22em] text-[#048ba8]">
              Biblia con explicaciones, daily streak y grupos de lectura
            </p>
            <h1 className="font-serif text-[clamp(3rem,7vw,7.4rem)] leading-[0.92] text-[#023464]">
              La Palabra que transforma tu día.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#2f475f] sm:text-xl sm:leading-9">
              Una Biblia en español creada para comprender la Palabra de Dios
              de forma simple, moderna y accesible. Lee, pregunta, ora y crece
              con una experiencia minimalista que acompaña tu fe cada día.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="primary-cta" href="#descargar">
                Comenzar gratis
              </a>
              <a className="secondary-cta" href="#recursos">
                Explorar recursos
              </a>
            </div>
            <div className="mt-10 hidden max-w-2xl gap-4 border-t border-[#023464]/15 pt-7 sm:grid sm:grid-cols-3">
              <div>
                <strong className="block font-serif text-3xl text-[#023464]">
                  12 min
                </strong>
                <span className="text-sm font-semibold text-[#5f6c7a]">
                  para un hábito diario
                </span>
              </div>
              <div>
                <strong className="block font-serif text-3xl text-[#023464]">
                  IA
                </strong>
                <span className="text-sm font-semibold text-[#5f6c7a]">
                  como apoyo al entendimiento
                </span>
              </div>
              <div>
                <strong className="block font-serif text-3xl text-[#023464]">
                  Grupos
                </strong>
                <span className="text-sm font-semibold text-[#5f6c7a]">
                  para leer en comunión
                </span>
              </div>
            </div>
          </div>

          <div className="hero-phone relative z-0 mx-auto w-full max-w-[390px] lg:mr-6">
            <div className="phone-glow" aria-hidden="true" />
            <div className="phone-frame">
              <Image
                src="/app-home.png"
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
            <p className="max-w-2xl text-lg leading-8 text-[#536477]">
              La Palabra une lectura bíblica, explicación y comunidad en una
              experiencia tranquila. La tecnología ayuda, pero el centro sigue
              siendo la Palabra.
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
        className="border-y border-[#023464]/10 bg-white px-6 py-20 sm:px-10 lg:px-16"
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

      <section className="px-6 py-20 sm:px-10 lg:px-16" id="comunidad">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="community-panel">
            <div className="mini-card bg-[#023464] text-white">
              <span>Pedido de oración</span>
              <strong>Por paz y propósito para esta semana.</strong>
            </div>
            <div className="mini-card bg-[#f18f01] text-white">
              <span>Grupo familiar</span>
              <strong>7 días leyendo el Evangelio de Lucas.</strong>
            </div>
            <div className="mini-card bg-[#eaf6f7] text-[#023464]">
              <span>Daily streak</span>
              <strong>La constancia crece cuando vuelves cada día.</strong>
            </div>
          </div>
          <div>
            <p className="section-kicker">Comunión y crecimiento</p>
            <h2 className="section-title">
              Más que una Biblia digital, un hábito compartido.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#536477]">
              Crea grupos privados de lectura, acompaña pedidos de oración y
              celebra el progreso espiritual con una interfaz limpia, segura y
              acogedora para personas de cualquier nivel de conocimiento.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-16" id="descargar">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#023464] px-6 py-14 text-white sm:px-10 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#8fd5df]">
                Empieza hoy
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
                Lleva la Palabra de Dios a tu ritmo diario.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                Una experiencia en español para leer, comprender y compartir la
                Biblia con más claridad.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a className="store-button" href="#" aria-label="Descargar en App Store">
                <span>Descargar en</span>
                <strong>App Store</strong>
              </a>
              <a className="store-button" href="#" aria-label="Disponible en Google Play">
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
