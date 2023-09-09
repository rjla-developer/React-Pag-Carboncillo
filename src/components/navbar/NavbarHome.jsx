"use client";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function NavbarHome() {
  return (
    <div className="fixed-top px-0">
      {/* Menu computadora */}
      <Navbar className="d-xl-block d-none align-top w-100">
        <Container className="py-2">
          <Link href="/" className="text-decoration-none text-white">
            <Image
              className="d-inline-block img-fluid w-25"
              src={require("../../img/logo/logo.png")}
              alt="Picture of the author"
            />
          </Link>

          <Nav className="mr-auto">
            <Link href="/" className="text-decoration-none text-white me-4">
              <p className="mb-0 text-white">Inicio</p>
            </Link>
            <Link href="/" className="text-decoration-none text-white me-4">
              <p className="mb-0 text-white">Servicios</p>
            </Link>
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
        </Container>
      </Navbar>

      {/* Menu Phone */}
      <Navbar className="d-block d-xl-none align-top" expand="xl">
        <Container className="py-3 px-1">
            <Link href="/" className="text-decoration-none text-white ms-2">
              <Image
                className="d-inline-block img-fluid"
                width="200"
                src={require("../../img/logo/logo.png")}
                alt="Picture of the author"
              />
            </Link>
          <Navbar.Toggle aria-controls="navbarNav" className="me-3 bg-light" />
          <Navbar.Collapse id="navbarNav" className="bg-light ps-2 rounded-start rounded-bottom mx-3">
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

              <Link href="/contacto" className="text-decoration-none text-white mb-2">
                <p className="mb-0 text-dark">Contacto</p>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarHome;
