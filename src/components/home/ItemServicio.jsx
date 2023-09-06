import React from "react";
import { Col } from "react-bootstrap";
import "../../css/components/itemServicio.css"

function ItemServicio({
  titleService,
  descService,
  borderColorItem,
  textColorItem,
  backgroundColorItem,
}) {
  return (
    <Col
      xs={10}
      lg={3}
      className={`${borderColorItem} border-item p-3 mx-3 mb-3 mb-lg-5`}
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
    </Col>
  );
}

export default ItemServicio;
