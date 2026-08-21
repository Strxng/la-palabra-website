import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nunitoSans = localFont({
  variable: "--font-nunito-sans",
  src: [
    {
      path: "../public/fonts/Nunito-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Nunito-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Nunito-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Nunito-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Nunito-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Nunito-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

const domine = localFont({
  variable: "--font-domine",
  src: [
    {
      path: "../public/fonts/Domine-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Domine-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Domine-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Domine-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "La Palabra | Biblia, checklist diario y daily streak",
  description:
    "La Palabra es una Biblia en español con versículo del día, checklist diario, daily streak, favoritos y pedidos de oración.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${nunitoSans.variable} ${domine.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
