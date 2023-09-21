import React from "react";
import "../../../css/components/itemServicio.css";
import "../../../css/global.css";
import Link from "next/link";

function ItemServicio({
  titleService,
  descService,
  borderColorItem,
  textColorItem,
  backgroundColorItem,
  serviceUrl,
}) {
  return (
    <div
      className={`col-10 col-lg-3 ${borderColorItem} border-item p-3 mx-3 mb-3 mb-lg-5`}
    >
      <p className={`${textColorItem}  fs-4`}>{titleService}</p>
      <p>{descService}</p>
      <Link
        className={`${borderColorItem} ${backgroundColorItem} btn-style rounded text-decoration-none text-black py-2`}
        href={`/servicios/${serviceUrl}`}
      >
        Conocer más
      </Link>
    </div>
  );
}

export default ItemServicio;
