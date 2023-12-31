"use client";
import React, { useState, useEffect } from "react";
import ItemServicio from "./ItemServicio";

function SeccServicios() {
  const [dataItemsServices, setdataItemsServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://app-s5uzbnqava-uc.a.run.app/items-services"
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("Data received:", response);
        setdataItemsServices(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    return () => {};
  }, []);

  return (
    <div
      className="row mt-3 mt-lg-5 d-flex justify-content-center"
    >
      {dataItemsServices.map((service, index) => {
        /* console.log(service); */
        return (
          <ItemServicio
            key={index}
            titleService={service.titleService}
            descService={service.descService}
            borderColorItem={service.borderColorItem}
            textColorItem={service.textColorItem}
            backgroundColorItem={service.backgroundColorItem}
            serviceUrl={service.id}
          />
        );
      })}
    </div>
  );
}

export default SeccServicios;
