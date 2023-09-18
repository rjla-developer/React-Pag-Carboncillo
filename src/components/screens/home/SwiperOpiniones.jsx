"use client";
import React from "react";

//Components in dependencies:
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SwiperOpiniones() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      /* onSwiper={(swiper) => console.log(swiper)} */
      /* onSlideChange={() => console.log("slide change")} */
    >
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperOpiniones;
