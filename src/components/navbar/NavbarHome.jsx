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
          <Navbar.Brand className="d-flex align-items-center">
            <Link href="/">
              <Image
                className="d-inline-block img-fluid w-25"
                src={require("../../img/logo/logo.png")}
                alt="Picture of the author"
              />
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="">
              <p className="mb-0 text-white">Inicio</p>
            </Nav.Link>
            <Nav.Link>
              <p className="mb-0 text-white">Servicios</p>
            </Nav.Link>
            <Nav.Link>
              <p className="mb-0 text-white">Filosofía</p>
            </Nav.Link>
            <Nav.Link>
              <p className="mb-0 text-white">Contacto</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Menu Phone */}
      <Navbar className="d-block d-xl-none align-top" expand="xl">
        <Container className="py-3 px-1">
          <Navbar.Brand className="d-flex align-items-center">
            <Link href="/" className="ms-2">
              <Image
                className="d-inline-block img-fluid"
                width="200"
                src={require("../../img/logo/logo.png")}
                alt="Picture of the author"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" className="me-3 bg-light" />
          <Navbar.Collapse id="navbarNav" className="bg-light ps-2">
            <Nav className="mr-auto">
              <Nav.Link href="">
                <p className="mb-0 text-dark">Inicio</p>
              </Nav.Link>
              <Nav.Link>
                <p className="mb-0 text-dark">Servicios</p>
              </Nav.Link>
              <Nav.Link>
                <p className="mb-0 text-dark">Filosofía</p>
              </Nav.Link>
              <Nav.Link>
                <p className="mb-0 text-dark">Contacto</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarHome;
