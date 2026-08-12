import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mi-muebleria-madrid.vercel.app"),
  title: "Mi Mueblería | Restauración de muebles en Madrid",
  description: "Restauración, ebanistería y cursos de restauración en Madrid. Cuéntanos qué pieza quieres recuperar o consulta una plaza en el taller.",
  openGraph: {
    title: "Mi Mueblería — Restauración con oficio",
    description: "Ese mueble no está para tirar. Valoramos tu pieza y te contamos qué se puede recuperar.",
    images: [{ url: "/images/hero.jpeg", width: 920, height: 433 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
