'use client'

import Image from "next/image";
import testimonilaContent from "@/data/testimonial";
import Slider from "react-slick";
import UserImage from "@/components/common/UserImage";

const Testimonial = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  return (
    <>
      <section className="testimonial-section-two">
        <div className="container-fluid">
          <div className="testimonial-left">
            <Image
              width={504}
              height={451}
              src="/images/resource/testimonial-left.png"
              alt="testimonial"
            />
          </div>
          <div className="testimonial-right">
            <Image
              width={504}
              height={451}
              src="/images/resource/testimonial-right.png"
              alt="testimonial"
            />
          </div>
          <div className="sec-title text-center">
            <h2>Testimonials From Our Students</h2>
            <div className="text">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor</div>
          </div>
          <div className="carousel-outer" data-aos="fade-up">
            <div className="testimonial-carousel">
              <Slider {...settings} arrows={false}>
                {testimonilaContent.slice(3, 6).map((item) => (
                  <div className="testimonial-block-two" key={item.id}>
                    <div className="inner-box">
                      <div className="thumb">
                        <Image
                          width={98}
                          height={98}
                          src={item.avatar}
                          alt="testimonial"
                        />
                      </div>
                      <h4 className="title">{item.feedback}</h4>
                      <div className="text">{item.feedbackText}</div>
                      <div className="info-box">
                        <h4 className="name">{item.name}</h4>
                        <span className="designation">{item.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Testimonial;
