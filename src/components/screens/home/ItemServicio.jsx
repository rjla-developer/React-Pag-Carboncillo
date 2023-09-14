"use client"
import React from "react";
import "../../../css/components/itemServicio.css"
import "../../../css/global.css"

function ItemServicio({
  titleService,
  descService,
  borderColorItem,
  textColorItem,
  backgroundColorItem,
}) {
  return (
    <div
      className={`col-10 col-lg-3 ${borderColorItem} border-item p-3 mx-3 mb-3 mb-lg-5`}
    >
      <p className={`${textColorItem}  fs-4`}>{titleService}</p>
      <p>{descService}</p>
      <button
        className={`${borderColorItem} ${backgroundColorItem} btn-style rounded`}
        onClick={() => {
          alert("You clicked me!");
        }}
      >
        Conocer más
      </button>
    </div>
  );
}

export default ItemServicio;
