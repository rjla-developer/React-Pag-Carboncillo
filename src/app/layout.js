import { Nunito } from "next/font/google";

//CSS:
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/global.css";

//Components:
import NavbarHome from "@/components/navbar/NavbarHome";
import Footer from "@/components/footer/Footer";

const nunito = Nunito({ subsets: ["latin"], weight: ["700"] });

export const metadata = {
  title: "Carboncillo",
  description:
    "Servicios de marketing digital, optimizar campañas publicitarias, diseño de marca, creación de páginas web y posicionamiento en redes sociales.",
  keywords: "Marketing Digital en Morelos y Ciudad de México, Especialistas en Redes Sociales, Aumentar Clientes en Redes Sociales, Servicios de Publicidad en Línea, Marketing Digital, Publicidad en Google y Redes Sociales, Estrategias de Marketing en Línea, Servicios de Marketing Digital, Especialistas en Publicidad en Redes Sociales, Contratar Agencia de Marketing en Morelos, Consultoría de Marketing en Ciudad de México",

  formatDetection: {
    email: "carboncillomtk@gmail.com",
    telephone: "55 611 966 86",
  },

  authors: [{ name: 'rjla-developer', url: 'https://www.linkedin.com/in/rjla-developer/' }],
  creator: 'rjla-developer',
  /* openGraph: {
    title: "Carboncillo",
    description: "Servicios de marketing digital, optimizar campañas publicitarias, diseño de marca, creación de páginas web y posicionamiento en redes sociales.",
    authors: ["rjla-developer"],
  }, */
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={nunito.className}>
        <NavbarHome />
        {children}
        <Footer />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
