import React from "react";
import "../../../css/screens/servicios/servicios.css";
import PagService from "@/components/screens/servicio/PagService";

export async function generateMetadata({ params, searchParams }, parent) {
  let id= "";
  switch (params.service) {
    case "social-media":
     id="Social Media";
     break;

    case "social-media-superior":
      id="Social Media Superior";
     break;

    case "campanas":
      id="Campañas publicitarias";
     break;

    case "diseno-de-marca":
      id="Diseño de marca";
     break;

    case "sitios-web":
      id="Sitios Web";
     break;

    case "extra":
      id="Servicios Extras";
     break;

    default:
      id="No existe"
      break;
  }
 
  // fetch data https://app-s5uzbnqava-uc.a.run.app/items-services
  const product = await fetch(`http://127.0.0.1:5001/carboncillo-pag/us-central1/app/services/${params.service}`).then((res) => res.json())

  return {
    title: `${id}`,
    description: `${product.descriptionPage}`,
    keywords: `${product.keywordsPage}` 
  }
}

async function fetchData(params) {
  try {
    const response = await fetch(
      `http://127.0.0.1:5001/carboncillo-pag/us-central1/app/services/${params.service}`
    );
    const data = await response.json();
    /* console.log(data) */
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function Servicio({ params }) {
  const dataService = await fetchData(params);

  return (
    <>
      {dataService && dataService.general.backgroundPage != null && (
        <PagService dataService={dataService}/>
      )}
    </>
  );
}

export default Servicio;
