import React from "react";

//Next.js:
import Image from "next/image";

//Css:
import "../css/screens/home/home.css";

//Components:
import ItemServicio from "@/components/screens/home/ItemServicio";
import SwiperOpiniones from "@/components/screens/home/SwiperOpiniones";

//json:
import dataItemsServices from "../json/dataItemsServices.json"


function Home() {
  /* const dataItemsServices= [
    {
        "titleService": "Social media",
        "descService": "Establece vínculos emocionales con tus clientes, adéntrate al nuevo mundo de la publicidad digital y mejora tu presencia de marca en la web.",
        "borderColorItem": "border-color-yellow",
        "textColorItem": "txt-color-yellow",
        "backgroundColorItem": "background-yellow"
    },
    {
        "titleService": "Redes premium",
        "descService": "Si lo tuyo es una experiencia totalmente personalizada, este plan es perfecto para ti, genera experiencias únicas en tu audiencia.",
        "borderColorItem": "border-color-green",
        "textColorItem": "txt-color-green",
        "backgroundColorItem": "background-green"
    },
    {
        "titleService": "Diseño de marca",
        "descService": "Dale una identidad definida y personalizada a tu marca, distingue y destaca tus cualidades empresariales por encima de la competencia.",
        "borderColorItem": "border-color-purple",
        "textColorItem": "txt-color-purple",
        "backgroundColorItem": "background-purple"
    },
    {
        "titleService": "Sitios web",
        "descService": "Construye tu espacio digital en internet y haz conocer tu marca con el mundo.",
        "borderColorItem": "border-color-orange",
        "textColorItem": "txt-color-orange",
        "backgroundColorItem": "background-orange"
    },
    {
        "titleService": "Google Ads",
        "descService": "Es hora de llevar tu negocio al siguiente nivel, conecta con tu audiencia mediante diversos tipos de publicidad en el buscador más utilizado.",
        "borderColorItem": "border-color-blue",
        "textColorItem": "txt-color-blue",
        "backgroundColorItem": "background-blue"
    },
    {
        "titleService": "Facebook Ads",
        "descService": "Un grupo de profesionales listos para ayudarte a conectar con tu audiencia.",
        "borderColorItem": "border-color-rose",
        "textColorItem": "txt-color-rose",
        "backgroundColorItem": "background-rose"
    }
] */

  return (
    <div className="container-fluid p-0 text-white bg-black">
      <div className="section1 py-0 py-lg-5">
        <div className="container pt-5">
          <div className="row py-5 mt-5 mt-lg-2">
            <div className="col-10 col-lg-7 mt-4 mt-lg-5">
              <div className="py-0 py-lg-4">
                <p className="font-size-1 text-white text-uppercase">
                  <span className="txt-color-blue font-size-1">IMPULSANDO</span>{" "}
                  LOS INGRESOS ORGÁNICOS
                </p>
                <p className="d-none d-lg-block fs-5 text-white mb-4">
                  Construimos estrategias digitales que motiven tu crecimiento
                  digital.
                </p>
                <p className="d-block d-lg-none fs-6 text-white mb-4">
                  Construimos estrategias digitales que motiven tu crecimiento
                  digital.
                </p>
                <button className="btn btn-outline-light btn-lg">
                  Iniciar ahora
                </button>
              </div>
            </div>
          </div>
          <div className="text-white text-center my-5 pb-3 pt-5">
            <div className="row">
              <div className="col">
                <h2>SOLUCIONES DIGITALES</h2>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <p>
                  Tenemos para ti una gran variedad de soluciones profesionales,
                  para lograr tus objetivos. Aumenta tus ventas a través del
                  canal digital.
                </p>
              </div>
            </div>
            <div className="row mt-3 mt-lg-5 d-flex justify-content-center">
              {dataItemsServices.map((service, index) => {
                return (
                  <ItemServicio
                    key={index}
                    titleService={service.titleService}
                    descService={service.descService}
                    borderColorItem={service.borderColorItem}
                    textColorItem={service.textColorItem}
                    backgroundColorItem={service.backgroundColorItem}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="container">
          <div className="row d-flex justify-content-center text-white text-center fs-2 mb-5 py-0 py-lg-5">
            <div className="col-11">
              <div>
                <p className="fs-6">@C_arboncillo</p>
                <p>
                  "<span className="txt-color-green">INNOVACIÓN</span> ES
                  NUESTRO NOMBRE,{" "}
                  <span className="txt-color-purple">IMPACTO</span> ES NUESTRO
                  APELLIDO. INCURSIONAMOS EN EL MUNDO DIGITAL, CON EL ÚNICO{" "}
                  <span className="txt-color-orange">OBJETIVO</span> DE
                  <span className="txt-color-yellow"> TRANSMITIR TU MARCA</span>
                  , TAL CUAL LA <span className="txt-color-blue">ESENCIA</span>{" "}
                  DE TU NEGOCIO".
                </p>
              </div>
            </div>
          </div>
          <div className="mt-0 mt-lg-5 pt-0 pt-lg-5">
            <div className="row mt-5 pt-5 d-flex justify-content-center">
              <div className="col-10 col-lg-4 mb-3 mb-lg-0">
                <div>
                  <Image
                    className="img-fluid rounded mb-3"
                    src={require("../img/screens/home/eje1.webp")}
                    alt=""
                  />
                  <p className="fs-3">Feeds</p>
                  <p>Descripción</p>
                </div>
              </div>
              <div className="col-10 col-lg-4 mt-3 mb-3 mb-lg-0">
                <div>
                  <Image
                    className="img-fluid rounded mb-3"
                    src={require("../img/screens/home/eje2.webp")}
                    alt=""
                  />
                  <p className="fs-3">Diseño de marca</p>
                  <p>Descripción</p>
                </div>
              </div>
              <div className="col-10 col-lg-4 mt-5 mb-5 mb-lg-0">
                <div>
                  <Image
                    className="img-fluid rounded mb-3"
                    src={require("../img/screens/home/eje3.gif")}
                    alt=""
                  />
                  <p className="fs-3">Animación</p>
                  <p>Descripción</p>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <button className="btn btn-outline-light btn-lg" >
                  Más acerca de nosotros
                </button>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center text-center py-0 py-lg-5 mt-0 mt-lg-5">
            <div className="col-10 col-lg-8 py-5 mb-3 mb-lg-5 mt-3 mt-lg-5">
              <div>
                <p className="fs-6">@C_arboncillo</p>
                <p className="fs-1 d-none d-lg-block">
                  LO QUE <span className="txt-color-yellow">COMENZÓ</span>{" "}
                  SIENDO UNA <span className="txt-color-blue">AGENCIA</span> DE
                  POSICIONAMIENTO SEO;
                  <span className="txt-color-rose"> SE CONVIRTIÓ </span> EN UNA{" "}
                  <span className="txt-color-purple">
                    AGENCIA DE ADWORDS & SEO.
                  </span>
                </p>
                <p className="fs-2 d-block d-lg-none">
                  LO QUE <span className="txt-color-yellow">COMENZÓ</span>{" "}
                  SIENDO UNA <span className="txt-color-blue">AGENCIA</span> DE
                  POSICIONAMIENTO SEO;
                  <span className="txt-color-rose"> SE CONVIRTIÓ </span> EN UNA{" "}
                  <span className="txt-color-purple">
                    AGENCIA DE ADWORDS & SEO.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col">
              <p className="fs-2"> LO QUE LA GENTE DICE DE NOSOTROS</p>
            </div>
          </div>
          <div className="row d-flex justify-content-center text-center">
            <div className="col-12 py-3">
              <SwiperOpiniones />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
