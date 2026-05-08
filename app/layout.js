import "./globals.css";

export const metadata = {
  title: "NailStudio MX | Salón de Uñas Premium",
  description:
    "Descubre el arte en tus manos. NailStudio MX es el salón de uñas premium que combina técnica, tendencia y cuidado para lograr la manicura perfecta. Manicure, pedicure, nail art y más.",
  keywords:
    "salón de uñas, manicure, pedicure, nail art, uñas acrílicas, gelish, México, CDMX",
  openGraph: {
    title: "NailStudio MX | Salón de Uñas Premium",
    description:
      "Descubre el arte en tus manos. Manicure, pedicure, nail art y más en CDMX.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
