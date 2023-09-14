"use client";
import React, { useState } from "react";
import "../../../css/screens/servicios/social-media/social-media.css";
import Formulario from "@/components/screens/contacto/Formulario";
import dataServices from "../../../../backend/functions/json/service1.json";
import SwiperExamples from "@/components/screens/servicio/SwiperExamples";

function titleWelcome(dataService) {
  switch (dataService) {
    case "social-media":
      return (
        <>
          <span className="txt-color-yellow">CONECTA</span> CON TU AUDIENCIA YA
        </>
      );

    default:
      null;
  }
}
function SocialMedia({ params }) {
  const [dataService, setdataService] = useState(dataServices[0]);
  return (
    <div className={`bg-social-media ${dataService.general.backgroundPage} container-fluid`}>
      {dataService && (
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
            <div className="row">
              <div className="col-12">
                <h2>{dataService.seccPackages.title}</h2>
              </div>
              <div className="col-12 mt-3">
                <p>{dataService.seccPackages.description}</p>
              </div>
            </div>

            <div className="row mx-0 mx-lg-5 mt-3 d-flex justify-content-center">
              {dataService.seccPackages.packages.map((dataPackage) => {
                return (
                  <div className="col-12 col-lg-4 mt-3 mt-lg-0">
                    <div className="bg-dark bg-gradiente shadow rounded-20 p-4 bg-opacity-50">
                      <h4 className={`${dataService.general.txtColor}`}>{dataPackage.title}</h4>
                      <p className="mt-4 mb-2">Plan mensual incluye:</p>
                      {dataPackage.include != null ? (
                        <ul
                          style={{ listStylePosition: "inside" }}
                          className="text-start"
                        >
                          {dataPackage.include.map((itemIncluded)=>{
                            return <li>{itemIncluded}</li>
                          })}
                        </ul>
                      ) : null}

                      <p className={`${dataService.general.txtColor}`} >
                        {dataPackage.restrictions}
                      </p>
                      <p>* Aplican restricciones.</p>
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
                <SwiperExamples examples={dataService.seccCarousel.examples}/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SocialMedia;
