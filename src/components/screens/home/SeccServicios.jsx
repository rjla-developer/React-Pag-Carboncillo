import React from "react";
import ItemServicio from "./ItemServicio";

async function fetchData() {
  try {
    const response = await fetch(
      `http://127.0.0.1:5001/carboncillo-pag/us-central1/app/items-services`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function SeccServicios() {
  const dataItemsServices = await fetchData();
  return (
    <div className="row mt-3 mt-lg-5 d-flex justify-content-center">
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
