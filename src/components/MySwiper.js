import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./MySwiper.css";

const SlideItem = styled.article`
  border: 1px solid #ccc;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavButton = styled.div`
  background-color: #fff;
  height: 100px;
  width: 40px;
  border-radius: 4px;
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid #ccc;
  cursor: pointer;
`;

const PrevButton = styled(NavButton)`
  left: 0;
`;

const NextButton = styled(NavButton)`
  right: 0;
`;

const PaginationContainer = styled.div`
  position: absolute;
  bottom: -20px !important;
  left: 50%;
  transform: translateX(-50%);
  z-index: 12;
`;

export default function MySwiper() {
  const handleSlideChange = () => {
    console.log("slide change");
  };

  const handleOnSwiper = (swiper) => {
    console.log("swiper ", swiper);
  };

  return (
    <section
      style={{
        position: "relative",
      }}
    >
      <PrevButton className="prev" />
      <NextButton className="next" />
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        pagination={{
          el: ".nav",
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 2,
        }}
        speed={600}
        onSlideChange={handleSlideChange}
        onSwiper={handleOnSwiper}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <SwiperSlide key={item}>
            <SlideItem>item {item}</SlideItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <PaginationContainer className="nav" />
    </section>
  );
}
