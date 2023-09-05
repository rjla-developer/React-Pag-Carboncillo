"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <Container fluid className="bg-black py-5 fs-5">
      <Container className="text-white">
        <Row className="d-flex justify-content-between">
          <Col>
            <p className="fs-6 mb-0">
              Todos los derechos reservados | Carboncillo © 2023
            </p>
          </Col>
          <Col className="text-end">
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
