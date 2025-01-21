import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { Link } from "react-router-dom"

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const miliSegundos = 80000

const Carousel = ({ slides }) => {

  function handleOpenNews() {
    alert('testando abrir noticia')

  }

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: miliSegundos }}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <div className="image-container">
              <Link to={`/news/${index}`} >
                <img src={slide.image} alt={`Slide ${index + 1}`} className="carousel-image" />
                <div className="carousel-text">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
