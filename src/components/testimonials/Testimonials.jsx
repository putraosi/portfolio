import React from "react";
import "./testimonials.css";
import { AVTR1, AVTR2, AVTR3, AVTR4 } from "../../assets";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
// import 'swiper/css/scrollbar';

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aperiam, impedit, ea iusto earum laborum totam consequuntur iure accusamus illum rem sapiente! Fugiat quod possimus ipsam error adipisci cumque atque!",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aperiam, impedit, ea iusto earum laborum totam consequuntur iure accusamus illum rem sapiente! Fugiat quod possimus ipsam error adipisci cumque atque!",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aperiam, impedit, ea iusto earum laborum totam consequuntur iure accusamus illum rem sapiente! Fugiat quod possimus ipsam error adipisci cumque atque!",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aperiam, impedit, ea iusto earum laborum totam consequuntur iure accusamus illum rem sapiente! Fugiat quod possimus ipsam error adipisci cumque atque!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="testimonial">
            <div className="client__avatar">
              <img src={item.avatar} />
            </div>

            <h5>{item.name}</h5>
            <small className="client__review">{item.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
