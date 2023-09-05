"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import "../css/screens/Home/home.css";

function Home() {
  return (
    <Container fluid className="p-0">
      <div className="secc1 py-5">
        <Container className="py-5">
          <Row className="py-5">
            <Col className="py-0 py-lg-5" xs={12} lg={7}>
              <div className="py-0 py-lg-4">
                <p className="font-size-1 text-white text-uppercase"><span className="text-primary">IMPULSANDO</span> LOS INGRESOS ORGÁNICOS</p>
                <p className="d-none d-lg-block fs-5 text-white mb-4">Construimos estrategias digitales que motiven tu crecimiento digital.</p>
                <p className="d-block d-lg-none fs-6 text-white mb-4">Construimos estrategias digitales que motiven tu crecimiento digital.</p>
                <Button size="lg" variant="outline-light">Iniciar ahora</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
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
