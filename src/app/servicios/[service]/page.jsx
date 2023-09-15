"use client";
import React, { useState, useEffect } from "react";
import "../../../css/screens/servicios/servicios.css";
import Formulario from "@/components/screens/contacto/Formulario";
import SwiperExamples from "@/components/screens/servicio/SwiperExamples";

function titleWelcome(dataService) {
  switch (dataService) {
    case "social-media":
      return (
        <>
          <span className="txt-color-yellow">CONECTA</span> CON TU AUDIENCIA YA
        </>
      );

    case "social-media-superior":
      return (
        <>
          A LA <span className="txt-color-green">ALTURA</span> DE TUS{" "}
          <span className="txt-color-green">EXPECTATIVAS</span>
        </>
      );

    case "campanas":
      return (
        <>
          HAZ QUE TE <span className="txt-color-purple">ENCUENTREN</span>
        </>
      );

    case "diseno-de-marca":
      return (
        <>
          CREAMOS MARCAS <span className="txt-color-rose">EXTRAORDINARIAS</span>
        </>
      );

    case "sitios-web":
      return (
        <>
          <span className="txt-color-orange">WEBSITE</span> SÓLIDOS A LA MEDIDA
        </>
      );

    case "extra":
      return (
        <>
          NUNCA ESTÁ DE MÁS UN <span className="txt-color-blue">EXTRA</span>
        </>
      );

    default:
      null;
  }
}
function SocialMedia({ params }) {
  const [dataService, setdataService] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/carboncillo-pag/us-central1/app/services/${params.service}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      setdataService(response);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  
    return () => {
    }
  }, [])
  
  return (
    <>
      {dataService && dataService.general.backgroundPage != null && (
        <div
          className={`${dataService.general.backgroundPage} container-fluid`}
        >
          <div className="container py-0 py-lg-5">
            <div className="row py-5 my-0 my-lg-5">
              <div className="col-12 col-lg-7 mt-5 mt-lg-5 py-5 py-lg-0">
                <div className="py-3 py-lg-4">
                  <p className="font-size-1 text-white text-uppercase">
                    {titleWelcome(dataService.id)}
                  </p>
                  <p className="d-none d-lg-block fs-5 text-white mb-4">
                    {dataService.seccWelcome.description}
                  </p>
                  <p className="d-block d-lg-none fs-6 text-white mb-4">
                    {dataService.seccWelcome.description}
                  </p>
                  <button className="btn btn-outline-light btn-lg">
                    Ver soluciones
                  </button>
                </div>
              </div>
            </div>

            <div className="text-white text-center mt-5 pb-3 pt-5">
              <div className="row mt-0 mt-lg-5">
                <div className="col-12">
                  <h2>{dataService.seccPackages.title}</h2>
                </div>
                <div className="col-12 mt-3">
                  <p>{dataService.seccPackages.description}</p>
                </div>
              </div>

              <div className="row mx-0 mx-lg-5 mt-3 d-flex justify-content-center">
                {dataService.seccPackages.packages.map((dataPackage, index) => {
                  return (
                    <div className="col-12 col-lg-4 mt-3 mt-lg-0" key={index}>
                      <div className="bg-dark bg-gradiente shadow rounded-20 p-4 bg-opacity-75">
                        <h4 className={`${dataService.general.txtColor}`}>
                          {dataPackage.title}
                        </h4>

                        {dataPackage.include != null ? (
                          <>
                            <p className="mt-4 mb-2">Plan mensual incluye:</p>
                            <ul
                              style={{ listStylePosition: "inside" }}
                              className="text-start"
                            >
                              {dataPackage.include.map(
                                (itemIncluded, index) => {
                                  return <li key={index}>{itemIncluded}</li>;
                                }
                              )}
                            </ul>
                          </>
                        ) : null}
                        {dataPackage.description != null ? (
                          <p className="mt-4">{dataPackage.description}</p>
                        ) : null}

                        <p className={`${dataService.general.txtColor}`}>
                          {dataPackage.restrictions}
                        </p>

                        {dataPackage.messageRestrictions != false ? (
                          <p>* Aplican restricciones.</p>
                        ) : null}

                        <button
                          className={`${dataService.general.borderColor} ${dataService.general.background} btn-style rounded px-3`}
                          onClick={() => {
                            alert("You clicked me!");
                          }}
                        >
                          Contratar
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Formulario />

              <div className="row mt-0 mt-lg-5 py-5">
                <div className="col-12 mt-5">
                  <h2>{dataService.seccCarousel.title}</h2>
                </div>
                <div className="col-12 mt-3">
                  <p>{dataService.seccCarousel.description}</p>
                </div>
                <div className="col-12">
                  <SwiperExamples
                    examples={dataService.seccCarousel.examples}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SocialMedia;
