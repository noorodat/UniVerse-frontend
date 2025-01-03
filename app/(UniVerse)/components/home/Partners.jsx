

'use client'

import Image from "next/image";
import Slider from "react-slick";

const Partners = () => {
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1200,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderGallery = [
    { id: 1, link: "#", imgNumber: "1-1" },
    { id: 2, link: "#", imgNumber: "1-2" },
    { id: 3, link: "#", imgNumber: "1-3" },
    { id: 4, link: "#", imgNumber: "1-4" },
    { id: 5, link: "#", imgNumber: "1-5" },
    { id: 6, link: "#", imgNumber: "1-6" },
  ];

  return (
    <>
      <section className="clients-section-two">
        <div className="sponsors-outer" data-aos="fade">
          <ul className="sponsors-carousel">
            <Slider {...settings} arrows={false}>
              {sliderGallery.map((item) => (
                <li className="slide-item" key={item.id}>
                  <figure className="image-box">
                    <a href={item.link}>
                      <Image
                        width={150}
                        height={95}
                        src={`/images/clients/${item.imgNumber}.png`}
                        alt="brand"
                      />
                    </a>
                  </figure>
                </li>
              ))}
            </Slider>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Partners;
