import { Nunito } from "next/font/google";

//CSS:
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/global.css"

//Components:
import NavbarHome from "@/components/navbar/NavbarHome";
import Footer from "@/components/footer/Footer";


const nunito= Nunito({ subsets: ["latin"], weight: ["700"] });

export const metadata = {
  title: "Carboncillo",
  description: "Somos una empresa de marketing digital",
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
