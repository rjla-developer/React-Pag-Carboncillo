"use client"
import React, { useRef, useEffect } from "react";

//Components in dependencies:
import { register } from "swiper/element/bundle";

register();

function SwiperOpiniones() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);
  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
    >
      <swiper-slide>
        <div className="p-5">
          <p className="d-none d-lg-block fs-6">
            "La mejor agencia que he podido encontrar, son super amables,
            cumplen con lo prometido y lo mejor que si obtuve resultados".
          </p>
          <p className="d-none d-lg-block fs-6">Anna G.</p>
          <p className="d-block d-lg-none fs-4">
            "La mejor agencia que he podido encontrar, son super amables,
            cumplen con lo prometido y lo mejor que si obtuve resultados".
          </p>
          <p className="d-block d-lg-none fs-4">Anna G.</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="p-5">
          <p className="d-none d-lg-block fs-6">
            "No hay otra agencia digital en esta región que haya podido atender
            todas mis necesidades".
          </p>
          <p className="d-none d-lg-block fs-6">Santiago L.</p>
          <p className="d-block d-lg-none fs-4">
            "No hay otra agencia digital en esta región que haya podido atender
            todas mis necesidades".
          </p>
          <p className="d-block d-lg-none fs-4">Santiago L.</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="p-5">
          <p className="d-none d-lg-block fs-6">
            "Me han ayudado bastante a elevar mi trafico web, con toda confianza
            la recomiendo".
          </p>
          <p className="d-none d-lg-block fs-6">Anna G.</p>
          <p className="d-block d-lg-none fs-4">
            "Me han ayudado bastante a elevar mi trafico web, con toda confianza
            la recomiendo".
          </p>
          <p className="d-block d-lg-none fs-4">Anna G.</p>
        </div>
      </swiper-slide>
      ...
    </swiper-container>
  );
}

export default SwiperOpiniones;
