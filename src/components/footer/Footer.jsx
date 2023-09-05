"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <Container fluid className="bg-black py-4 py-lg-5 fs-5">
      <Container className="text-white">
        <Row className="d-flex justify-content-between">
          <Col xs={12} lg={6}>
            <p className="fs-6 mb-0 text-center text-lg-start">
              Todos los derechos reservados | Carboncillo © 2023
            </p>
          </Col>
          <Col xs={12} lg={6} className="text-center text-lg-end mb-3 mb-lg-0 order-first order-lg-last">
            <ImFacebook />
            <BsInstagram className="mx-5" />
            <MdOutlineEmail />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
