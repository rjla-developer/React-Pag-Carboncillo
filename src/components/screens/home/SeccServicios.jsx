"use client"
import React, {useState} from 'react'
import ItemServicio from './ItemServicio';

function SeccServicios() {
    fetch("https://app-s5uzbnqava-uc.a.run.app/items-services")
    .then((response) => {
      return response.json();
    })
    .then((response) => setdataItemsServices(response));

    const [dataItemsServices, setdataItemsServices] = useState([]);
  return (
    <div className="row mt-3 mt-lg-5 d-flex justify-content-center">
    {dataItemsServices.map((service, index) => {
      return (
        <ItemServicio
          key={index}
          titleService={service.titleService}
          descService={service.descService}
          borderColorItem={service.borderColorItem}
          textColorItem={service.textColorItem}
          backgroundColorItem={service.backgroundColorItem}
        />
      );
    })}
  </div>
  )
}

export default SeccServicios