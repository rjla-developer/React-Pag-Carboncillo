"use client"
import React from "react";
import Image from "next/image";

function ExamplesService() {
  return (
    <>
      <div className="row mt-5 pt-5 d-flex justify-content-center">
        <div className="col-10 col-lg-4 mb-3 mb-lg-0">
          <div>
            <Image
              className="img-fluid rounded mb-3"
              src={require("../../../img/screens/home/eje1.webp")}
              alt="Ejemplo de un diseño de feed que realizamos."
            />
            <p className="fs-3">Feeds</p>
            <p>Descripción</p>
          </div>
        </div>
        <div className="col-10 col-lg-4 mt-3 mb-3 mb-lg-0">
          <div>
            <Image
              className="img-fluid rounded mb-3"
              src={require("../../../img/screens/home/eje2.webp")}
              alt="Ejemplo del diseño de marca que le realizamos a una empresa"
            />
            <p className="fs-3">Diseño de marca</p>
            <p>Descripción</p>
          </div>
        </div>
        <div className="col-10 col-lg-4 mt-5 mb-5 mb-lg-0">
          <div>
            <Image
              className="img-fluid rounded mb-3"
              src={require("../../../img/screens/home/eje3.gif")}
              alt=""
            />
            <p className="fs-3">Animación</p>
            <p>Descripción</p>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-auto">
          <button className="btn btn-outline-light btn-lg">
            Más acerca de nosotros
          </button>
        </div>
      </div>
    </>
  );
}

export default ExamplesService;
