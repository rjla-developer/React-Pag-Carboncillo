import React, { useEffect, useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

function SwiperExamples({ examples }) {
  const [screenLg, setScreenLg] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    setScreenLg(mediaQuery.matches);

    const handleResize = (event) => {
      if (event.matches) {
        /* console.log(event.matches); */
        setScreenLg(event.matches);
      } else {
        /* console.log(event.matches); */
        setScreenLg(event.matches);
      }
    };

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={screenLg ? 4 : 1}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper pb-5 pt-3"
      >
        {examples.map((urlExample, index) => {
          return <SwiperSlide key={index}>
            <div className="bg-secondary rounded">
              <Image
                className="rounded"
                width={300}
                height={300}
                src={urlExample}
                alt="Ejemplo de nuestro trabajo"
              />
            </div>
          </SwiperSlide>;
        })}
      </Swiper>
    </>
  );
}

export default SwiperExamples;
