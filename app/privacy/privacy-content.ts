import { currentLegalVersion, type LegalSection } from "../legal-content";

export type PrivacyVersion = {
  version: string;
  effectiveDate: string;
  updatedLabel: string;
  title: string;
  intro: string[];
  sections: LegalSection[];
};

export const privacyVersions: PrivacyVersion[] = [
  {
    version: currentLegalVersion,
    effectiveDate: "10 de agosto de 2026",
    updatedLabel: "Última actualización: 10 de agosto de 2026",
    title: "Política de Privacidad de La Palabra",
    intro: [
      "La Palabra es una aplicación bíblica en español creada para ayudar a las personas a leer, comprender y mantener constancia en la Palabra de Dios. Esta Política de Privacidad explica qué información podemos recopilar, cómo la usamos y qué opciones tienes.",
      "Al utilizar La Palabra, aceptas las prácticas descritas en esta política. Si no estás de acuerdo, debes dejar de usar la aplicación.",
    ],
    sections: [
      {
        title: "1. Información que recopilamos",
        body: [
          "Cuando creas o accedes a tu cuenta mediante Apple o Google, recibimos la información básica que esos proveedores comparten con nosotros, como nombre, correo electrónico y foto de perfil, según la configuración de tu cuenta y los permisos concedidos.",
          "También podemos guardar información necesaria para el funcionamiento de la aplicación, como versículos marcados con like, versículos guardados, progreso de lectura, daily streak, preferencias de lectura y ajustes de tamaño de fuente.",
          "Si utilizas recursos como pedidos de oración o interacciones similares, podemos tratar el contenido que decidas enviar para mostrarlo y mantenerlo dentro de la experiencia de la aplicación.",
        ],
      },
      {
        title: "2. Cómo usamos la información",
        body: [
          "Usamos la información para autenticar tu cuenta, mantener tu progreso, personalizar tu experiencia de lectura, mostrar el versículo del día, permitir que consultes días anteriores y conservar tus preferencias dentro de la aplicación.",
          "También podemos usar datos técnicos y de uso para mantener la seguridad, corregir errores, mejorar el rendimiento y entender cómo evoluciona la experiencia general de La Palabra.",
        ],
      },
      {
        title: "3. Inicio de sesión con Apple y Google",
        body: [
          "El inicio de sesión se realiza por medio de proveedores externos. Apple y Google pueden procesar datos de acuerdo con sus propias políticas de privacidad. La Palabra no recibe tu contraseña de Apple o Google.",
          "Puedes administrar la información compartida con La Palabra desde la configuración de tu cuenta de Apple o Google.",
        ],
      },
      {
        title: "4. Notificaciones",
        body: [
          "La Palabra puede solicitar permiso para enviar notificaciones push, por ejemplo para recordatorios de lectura o comunicaciones relacionadas con la experiencia espiritual diaria.",
          "Solo solicitamos y usamos notificaciones cuando decides habilitarlas o cuando una pantalla de onboarding solicite tu autorización. Puedes desactivar las notificaciones en cualquier momento desde la configuración del dispositivo o desde los controles disponibles en la app.",
          "Para enviar notificaciones, podemos usar un token técnico del dispositivo provisto por Firebase Cloud Messaging. Este token no se utiliza para identificarte fuera de la finalidad de enviar notificaciones.",
        ],
      },
      {
        title: "5. Servicios de terceros",
        body: [
          "Utilizamos servicios de terceros para operar la aplicación, incluyendo Firebase para autenticación, almacenamiento de datos, mensajería push, análisis técnico y funciones de backend.",
          "Cuando uses funciones que dependen de proveedores externos, esos proveedores pueden procesar datos conforme a sus propias políticas y medidas de seguridad.",
        ],
      },
      {
        title: "6. Anuncios",
        body: [
          "Actualmente La Palabra no muestra anuncios. Sin embargo, la aplicación puede incluir anuncios en el futuro.",
          "Si incorporamos anuncios, podremos utilizar proveedores de publicidad que procesen identificadores del dispositivo, datos de interacción con anuncios e información técnica para mostrar, medir y mejorar anuncios. Cuando corresponda, solicitaremos los permisos requeridos por la plataforma y ofreceremos los controles disponibles.",
        ],
      },
      {
        title: "7. Conservación y seguridad",
        body: [
          "Conservamos la información durante el tiempo necesario para ofrecer la aplicación, mantener tu cuenta, cumplir obligaciones legales, resolver disputas y proteger la seguridad del servicio.",
          "Aplicamos medidas razonables para proteger la información contra acceso no autorizado, pérdida, uso indebido o alteración. Ningún sistema es completamente infalible, pero trabajamos para mantener una experiencia segura y confiable.",
        ],
      },
      {
        title: "8. Tus opciones y derechos",
        body: [
          "Puedes actualizar o eliminar ciertas informaciones desde la aplicación, cerrar sesión o retirar permisos del dispositivo, como notificaciones.",
          "También puedes solicitar acceso, corrección o eliminación de tus datos personales, sujeto a las limitaciones técnicas, legales y de seguridad aplicables.",
        ],
      },
      {
        title: "9. Privacidad de menores",
        body: [
          "La Palabra no está dirigida a niños menores de la edad mínima aplicable en su jurisdicción. Si tomamos conocimiento de que se recopiló información personal de un menor sin el consentimiento correspondiente, tomaremos medidas razonables para eliminarla.",
        ],
      },
      {
        title: "10. Cambios en esta política",
        body: [
          "Podemos actualizar esta Política de Privacidad para reflejar cambios en la aplicación, en nuestros proveedores o en requisitos legales. Cuando los cambios sean relevantes, podremos comunicarlo dentro de la app o por otros medios razonables.",
        ],
      },
      {
        title: "11. Contacto",
        body: [
          "Si tienes preguntas sobre esta Política de Privacidad o sobre el tratamiento de tus datos, puedes contactarnos por los canales de soporte disponibles en la aplicación.",
        ],
      },
    ],
  },
];

export const currentPrivacyVersion = privacyVersions[0];

export function getPrivacyVersion(version: string) {
  return privacyVersions.find(
    (privacyVersion) => privacyVersion.version === version,
  );
}
