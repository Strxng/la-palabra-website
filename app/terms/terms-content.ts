export type LegalSection = {
  title: string;
  body: string[];
};

export type TermsVersion = {
  version: string;
  effectiveDate: string;
  updatedLabel: string;
  title: string;
  intro: string[];
  sections: LegalSection[];
};

export const termsVersions: TermsVersion[] = [
  {
    version: "2026-08-10",
    effectiveDate: "10 de agosto de 2026",
    updatedLabel: "Última actualización: 10 de agosto de 2026",
    title: "Términos de Uso de La Palabra",
    intro: [
      "La Palabra es una aplicación bíblica en español creada para ayudar a las personas a leer, comprender y mantener constancia en la Palabra de Dios.",
      "Al acceder o utilizar La Palabra, aceptas estos Términos de Uso. Si no estás de acuerdo con estos términos, debes dejar de usar la aplicación.",
    ],
    sections: [
      {
        title: "1. Uso de la aplicación",
        body: [
          "Puedes utilizar La Palabra para lectura bíblica, consulta de versículos, versículo del día, daily streak, pedidos de oración, guardado de contenido y otras funciones disponibles dentro de la experiencia.",
          "Debes usar la aplicación de forma lícita, respetuosa y compatible con su propósito. No debes intentar interferir con el funcionamiento del servicio, acceder a sistemas no autorizados o usar la aplicación para actividades abusivas, fraudulentas o dañinas.",
        ],
      },
      {
        title: "2. Cuenta e inicio de sesión",
        body: [
          "Algunas funciones pueden requerir una cuenta o inicio de sesión mediante proveedores externos como Apple o Google. Eres responsable de mantener el acceso seguro a tus cuentas y dispositivos.",
          "La Palabra no recibe ni almacena tu contraseña de Apple o Google. El uso de esos proveedores también está sujeto a sus propios términos y políticas.",
        ],
      },
      {
        title: "3. Contenido y pedidos de oración",
        body: [
          "Puedes enviar contenido dentro de la aplicación, incluyendo pedidos de oración u otras interacciones similares. Conservas la responsabilidad por el contenido que decides compartir.",
          "La Palabra mantiene una política de tolerancia cero frente a contenido ofensivo, abusivo, discriminatorio, sexualmente explícito, amenazante, acosador, ilegal, invasivo de la privacidad de terceros o inadecuado para una comunidad de oración y lectura bíblica.",
          "Podemos filtrar, moderar, restringir o eliminar contenido antes o después de su publicación cuando sea necesario para proteger la experiencia, cumplir requisitos legales o preservar el propósito de la aplicación.",
        ],
      },
      {
        title: "4. Denuncias, bloqueo y moderación",
        body: [
          "La aplicación puede ofrecer mecanismos para denunciar contenido ofensivo o usuarios abusivos. Revisaremos las denuncias de forma oportuna y podremos retirar contenido, limitar funciones, suspender cuentas o expulsar usuarios que violen estos términos.",
          "Cuando existan funciones comunitarias o de interacción entre usuarios, podrás bloquear usuarios abusivos mediante los controles disponibles en la aplicación o solicitar asistencia por los canales de soporte publicados.",
        ],
      },
      {
        title: "5. Propiedad intelectual",
        body: [
          "La marca La Palabra, el diseño, la interfaz, los textos propios, elementos visuales y demás materiales de la aplicación pertenecen a sus respectivos titulares y están protegidos por las leyes aplicables.",
          "Se te concede una licencia limitada, personal, revocable, no exclusiva y no transferible para utilizar la aplicación conforme a estos términos.",
        ],
      },
      {
        title: "6. Servicios de terceros",
        body: [
          "La aplicación puede depender de servicios de terceros para autenticación, almacenamiento, mensajería, análisis técnico, distribución de la app u otras funciones necesarias.",
          "El uso de servicios de terceros puede estar sujeto a términos y políticas propios de esos proveedores. No somos responsables por cambios, fallas o decisiones tomadas por servicios externos fuera de nuestro control.",
        ],
      },
      {
        title: "7. Notificaciones",
        body: [
          "La Palabra puede solicitar permiso para enviar notificaciones, como recordatorios de lectura o comunicaciones relacionadas con la experiencia espiritual diaria.",
          "Puedes activar o desactivar las notificaciones desde la configuración del dispositivo o desde los controles disponibles en la aplicación, cuando existan.",
        ],
      },
      {
        title: "8. Disponibilidad y cambios en el servicio",
        body: [
          "Trabajamos para mantener La Palabra disponible y funcionando correctamente, pero no garantizamos que el servicio esté libre de interrupciones, errores o cambios.",
          "Podemos modificar, suspender o retirar funciones de la aplicación cuando sea necesario por razones técnicas, operativas, legales, de seguridad o de evolución del producto.",
        ],
      },
      {
        title: "9. Suspensión o terminación",
        body: [
          "Podemos suspender o limitar el acceso a la aplicación si detectamos incumplimiento de estos términos, uso abusivo, riesgos de seguridad o situaciones que puedan afectar a otros usuarios o al servicio.",
          "También puedes dejar de usar La Palabra en cualquier momento y, cuando corresponda, solicitar la eliminación de datos conforme a la Política de Privacidad.",
        ],
      },
      {
        title: "10. Limitación de responsabilidad",
        body: [
          "La Palabra se ofrece con el objetivo de apoyar la lectura y comprensión bíblica. En la medida permitida por la ley aplicable, no seremos responsables por daños indirectos, pérdida de datos, interrupciones, decisiones personales tomadas a partir del uso de la aplicación o resultados derivados de servicios externos.",
        ],
      },
      {
        title: "11. Cambios en estos términos",
        body: [
          "Podemos actualizar estos Términos de Uso para reflejar cambios en la aplicación, requisitos legales, prácticas operativas o nuevos recursos.",
          "Cuando los cambios sean relevantes, podremos comunicarlo dentro de la aplicación o por otros medios razonables. La fecha de actualización indicará la versión vigente.",
        ],
      },
      {
        title: "12. Contacto",
        body: [
          "Si tienes preguntas sobre estos Términos de Uso, puedes contactarnos por los canales de soporte disponibles en la aplicación.",
        ],
      },
    ],
  },
];

export const currentTermsVersion = termsVersions[0];

export function getTermsVersion(version: string) {
  return termsVersions.find((termsVersion) => termsVersion.version === version);
}
