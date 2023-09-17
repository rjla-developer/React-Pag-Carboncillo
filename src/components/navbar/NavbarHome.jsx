"use client";
import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function NavbarHome() {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleMouseEnter = () => {
    setShowParagraph(true);
  };

  const handleMouseLeave = () => {
    setShowParagraph(false);
  };
  return (
    <>
      <div className="fixed-top px-0">
        {/* Menu computadora */}
        <Navbar className="d-xl-block d-none align-top w-100">
          <div className="container py-2">
            <Link href="/" className="text-decoration-none text-white">
              <Image
                className="d-inline-block img-fluid w-25"
                src={require("../../img/logo/logo.png")}
                alt="Logo de la empresa Carboncillo"
              />
            </Link>

            <Nav className="mr-auto">
              <Link href="/" className="text-decoration-none text-white me-4">
                <p className="mb-0 text-white">Inicio</p>
              </Link>
              <button
                type="button"
                onMouseEnter={handleMouseEnter}
                className="text-decoration-none text-white me-4 btn btn-link p-0"
              >
                <p className="mb-0 text-white">Servicios</p>
              </button>
              <Link
                href="/filosofia"
                className="text-decoration-none text-white me-4"
              >
                <p className="mb-0 text-white">Filosofía</p>
              </Link>
              <Link
                href="/contacto"
                className="text-decoration-none text-white me-4"
              >
                <p className="mb-0 text-white">Contacto</p>
              </Link>
            </Nav>
          </div>
        </Navbar>

        {/* Menu Phone */}
        <Navbar className="d-block d-xl-none align-top" expand="xl">
          <div className="container py-3 px-1">
            <Link href="/" className="text-decoration-none text-white ms-2">
              <Image
                className="d-inline-block img-fluid"
                width="200"
                src={require("../../img/logo/logo.png")}
                alt="Logo de la empresa Carboncillo"
              />
            </Link>
            <Navbar.Toggle
              aria-controls="navbarNav"
              className="me-3 bg-light"
            />
            <Navbar.Collapse
              id="navbarNav"
              className="bg-light ps-2 rounded-start rounded-bottom mx-3"
            >
              <Nav className="mr-auto rounded">
                <Link href="/" className="text-decoration-none text-white my-2">
                  <p className="mb-0 text-dark">Inicio</p>
                </Link>

                <Link href="/" className="text-decoration-none text-white mb-2">
                  <p className="mb-0 text-dark">Servicios</p>
                </Link>

                <Link
                  href="/filosofia"
                  className="text-decoration-none text-white mb-2"
                >
                  <p className="mb-0 text-dark">Filosofía</p>
                </Link>

                <Link
                  href="/contacto"
                  className="text-decoration-none text-white mb-2"
                >
                  <p className="mb-0 text-dark">Contacto</p>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>

      {showParagraph && (
        <div
          className="menuServices"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container">
            <div className="row py-3 mx-2">
              <p className="fw-bold fs-5">Servicios</p>
              <Link
                href={"/servicios/social-media"}
                className="col-6 text-start p-2 text-decoration-none text-white"
              >
                <div className="itemService p-2">
                  <div className="d-flex justify-content-start">
                    <Image
                      src={require("../../img/navbar/icon-social-media.png")}
                      alt="icono con redes sociales de instagram, facebook y mano de me gusta"
                      width={25}
                      className="me-2"
                    />
                    <span className="mb-1 fs-5">Social media</span>
                  </div>
                  <p className="font-size-6 mb-0">
                    Adéntrate en el nuevo mundo digital.
                  </p>
                </div>
              </Link>

              <Link
                href={"/servicios/social-media-superior"}
                className="col-6 text-start p-2 text-decoration-none text-white"
              >
                <div className="itemService p-2">
                  <div className="d-flex justify-content-start">
                    <Image
                      src={require("../../img/navbar/icon-social-media-superior.png")}
                      alt=""
                      width={25}
                      className="me-2"
                    />
                    <span className="mb-1 fs-5">Social media superior</span>
                  </div>
                  <p className="font-size-6 mb-0">Experiencia personalizada.</p>
                </div>
              </Link>

              <Link
                href={"/servicios/campanas"}
                className="col-6 text-start p-2 text-decoration-none text-white"
              >
                <div className="itemService p-2">
                  <div className="d-flex justify-content-start">
                    <Image
                      src={require("../../img/navbar/icon-campanas.png")}
                      alt=""
                      width={25}
                      className="me-2"
                    />
                    <span className="mb-1 fs-5">Campañas</span>
                  </div>
                  <p className="font-size-6 mb-0">
                    Lleva tu negocio al siguiente nivel.
                  </p>
                </div>
              </Link>

              <Link
                href={"/servicios/diseno-de-marca"}
                className="col-6 text-start p-2 text-decoration-none text-white"
              >
                <div className="itemService p-2">
                  <div className="d-flex justify-content-start">
                    <Image
                      src={require("../../img/navbar/icon-diseno-marca.png")}
                      alt=""
                      width={25}
                      className="me-2"
                    />
                    <span className="mb-1 fs-5">Diseño de marca</span>
                  </div>
                  <p className="font-size-6 mb-0">
                    Más que un logotipo.
                  </p>
                </div>
              </Link>

              <Link
                href={"/servicios/sitios-web"}
                className="col-6 text-start p-2 text-decoration-none text-white"
              >
                <div className="itemService p-2">
                  <div className="d-flex justify-content-start">
                    <Image
                      src={require("../../img/navbar/icon-sitios-web.png")}
                      alt=""
                      width={25}
                      className="me-2"
                    />
                    <span className="mb-1 fs-5">Sitios web</span>
                  </div>
                  <p className="font-size-6 mb-0">
                    Construimos tu espacio digital.
                  </p>
                </div>
              </Link>

              <Link
                href={"/servicios/extra"}
                className="col-6 text-start p-2 text-decoration-none text-white"
              >
                <div className="itemService p-2">
                  <div className="d-flex justify-content-start">
                    <Image
                      src={require("../../img/navbar/icon-extra.png")}
                      alt=""
                      width={25}
                      className="me-2"
                    />
                    <span className="mb-1 fs-5">Extras</span>
                  </div>
                  <p className="font-size-6 mb-0">
                    Atento de lo que se viene.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarHome;
