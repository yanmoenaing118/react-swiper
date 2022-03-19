import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/thumbs";
import "./gallery.css";

const SlideItem = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
`;

const Image = styled.img`
  height: 100px;
  width: 100%;
  object-fit: cover;
`;

const ThumbPrevButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: red;
  width: 40px;
  height: 40px;
  z-index: 10;
  cursor: pointer;
`;

const ThumbNextButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: red;
  width: 40px;
  height: 40px;
  z-index: 10;
  right: 0;
  cursor: pointer;
`;

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    console.log(thumbsSwiper);
  }, [thumbsSwiper]);
  return (
    <div>
      <Swiper
        modules={[Navigation, Thumbs]}
        thumbs={{
          swiper: thumbsSwiper,
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <SwiperSlide>
            <SlideItem>Image {item}</SlideItem>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper"
        slidesOffsetBefore={20}
        slidesOffsetAfter={20}
        navigation={{
          prevEl: ".thumb-prev",
          nextEl: ".thumb-next",
        }}
      >
        <ThumbPrevButton className="thumb-prev" />
        <ThumbNextButton className="thumb-next" />
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
