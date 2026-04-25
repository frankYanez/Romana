import type { Metadata } from "next";
import { Playfair_Display, Libre_Baskerville, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-baskerville",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Romana Club — El movimiento como ritual",
  description: "Club de Pilates Mat y Reformer. Clases personalizadas con profesora certificada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${baskerville.variable} ${jost.variable} bg-crema text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
