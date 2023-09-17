import React from "react";
import Image from "next/image";

function Load() {
  return (
    <div className="container-fluid bg-black text-white py-5 py-lg-5">
      <div className="row d-flex align-items-center justify-content-center py-5 py-lg-4 my-5">
        <div className="col-6 col-lg-4 py-5 py-lg-4 my-0 my-lg-3">
          <div className="py-5 py-lg-4 text-center">
            <Image
              className="img-fluid"
              src={require("../img/logo/logo-compact.webp")}
              alt="Logo responsive de la empresa Carboncillo"
            />
            <p className="fs-1 mt-5">Loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Load;
