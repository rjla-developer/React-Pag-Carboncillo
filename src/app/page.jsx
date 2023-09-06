"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import "../css/screens/home/home.css";
import ItemServicio from "@/components/home/itemServicio";

function Home() {
  const dataItemsServices = [
    {
      titleService: "Social media",
      descService:
        "Establece vínculos emocionales con tus clientes, adéntrate al nuevo mundo de la publicidad digital y mejora tu presencia de marca en la web.",
      borderColorItem: "border-color-yellow",
      textColorItem: "txt-color-yellow",
      backgroundColorItem: "background-yellow",
    },
    {
      titleService: "Redes premium",
      descService:
        "Si lo tuyo es una experiencia totalmente personalizada, este plan es perfecto para ti, genera experiencias únicas en tu audiencia.",
      borderColorItem: "border-color-green",
      textColorItem: "txt-color-green",
      backgroundColorItem: "background-green",
    },
    {
      titleService: "Diseño de marca",
      descService:
        "Dale una identidad definida y personalizada a tu marca, distingue y destaca tus cualidades empresariales por encima de la competencia.",
      borderColorItem: "border-color-purple",
      textColorItem: "txt-color-purple",
      backgroundColorItem: "background-purple",
    },
    {
      titleService: "Sitios web",
      descService:
        "Construye tu espacio digital en internet y haz conocer tu marca con el mundo.",
      borderColorItem: "border-color-orange",
      textColorItem: "txt-color-orange",
      backgroundColorItem: "background-orange",
    },
    {
      titleService: "Google Ads",
      descService:
        "Es hora de llevar tu negocio al siguiente nivel, conecta con tu audiencia mediante diversos tipos de publicidad en el buscador más utilizado.",
      borderColorItem: "border-color-blue",
      textColorItem: "txt-color-blue",
      backgroundColorItem: "background-blue",
    },
    {
      titleService: "Facebook Ads",
      descService:
        "Un grupo de profesionales listos para ayudarte a conectar con tu audiencia.",
      borderColorItem: "border-color-rose",
      textColorItem: "txt-color-rose",
      backgroundColorItem: "background-rose",
    },
  ];
  return (
    <Container fluid className="p-0 text-white">
      <div className="secc1 py-5">
        <Container className="py-5">
          <Row className="py-5">
            <Col className="py-0 py-lg-5" xs={10} lg={7}>
              <div className="py-0 py-lg-4">
                <p className="font-size-1 text-white text-uppercase">
                  <span className="txt-color-blue font-size-1">IMPULSANDO</span>{" "}
                  LOS INGRESOS ORGÁNICOS
                  {/* <span className="d-block d-lg-none fs-1">LOS INGRESOS ORGÁNICOS</span>
                  <span className="d-none d-lg-block">LOS INGRESOS ORGÁNICOS</span> */}
                </p>
                <p className="d-none d-lg-block fs-5 text-white mb-4">
                  Construimos estrategias digitales que motiven tu crecimiento
                  digital.
                </p>
                <p className="d-block d-lg-none fs-6 text-white mb-4">
                  Construimos estrategias digitales que motiven tu crecimiento
                  digital.
                </p>
                <Button size="lg" variant="outline-light">
                  Iniciar ahora
                </Button>
              </div>
            </Col>
          </Row>
          <div className="text-white text-center my-5 py-3">
            <Row>
              <Col>
                <h2>SOLUCIONES DIGITALES</h2>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <p>
                  Tenemos para ti una gran variedad de soluciones profesionales,
                  para lograr tus objetivos. Aumenta tus ventas a través del
                  canal digital.
                </p>
              </Col>
            </Row>
            <Row className="mt-3 mt-lg-5 d-flex justify-content-center">
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
            </Row>
          </div>
        </Container>
      </div>
      <div className="secc2">
        <Container>
          <Row className="d-flex justify-content-center text-white text-center fs-2 mb-5 py-5">
            <Col xs={11}>
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
            </Col>
          </Row>
          <div className="mt-5 pt-5">
            <Row className="mt-5 pt-5">
              <Col xs={4}>
                <div>
                  <Image
                    className="img-fluid rounded mb-3"
                    src={require("../img/home/eje1.webp")}
                    alt=""
                  />
                  <p className="fs-3">Feeds</p>
                  <p>Descripción</p>
                </div>
              </Col>
              <Col xs={4} className="mt-3">
                <div>
                  <Image
                    className="img-fluid rounded mb-3"
                    src={require("../img/home/eje2.webp")}
                    alt=""
                  />
                  <p className="fs-3">Diseño de marca</p>
                  <p>Descripción</p>
                </div>
              </Col>
              <Col xs={4} className="mt-5">
                <div>
                  <Image
                    className="img-fluid rounded mb-3"
                    src={require("../img/home/eje3.gif")}
                    alt=""
                  />
                  <p className="fs-3">Animación</p>
                  <p>Descripción</p>
                </div>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col xs={"auto"}>
                <Button size="lg" variant="outline-light">
                  Más acerca de nosotros
                </Button>
              </Col>
            </Row>
          </div>
          <Row className="d-flex justify-content-center text-center fs-1 py-5 mt-5">
            <Col xs={8} className="py-5 my-5">
              <div>
                <p className="fs-6">@C_arboncillo</p>
                <p>
                  LO QUE <span className="txt-color-yellow">COMENZÓ</span>{" "}
                  SIENDO UNA <span className="txt-color-blue">AGENCIA</span> DE
                  POSICIONAMIENTO SEO;
                  <span className="txt-color-rose"> SE CONVIRTIÓ </span> EN UNA{" "}
                  <span className="txt-color-purple">
                    AGENCIA DE ADWORDS & SEO.
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Row className="d-flex justify-content-center text-center bg-black py-5">
        <Col>
          <p className="fs-2"> LO QUE LA GENTE DICE DE NOSOTROS</p>
        </Col>
      </Row>
      {/* <Row>
        <Col className="mx-0">
          <Image
            className="img-fluid"
            src={require("../img/Home/background-home.webp")}
            alt="Picture of the author"
          />
        </Col>
      </Row> */}
    </Container>
  );
}

export default Home;
