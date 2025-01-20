'use client'

import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import DEFAULT_USER_IMAGE from "@/constants/images/defaultUserImage";

const TopCompany = ({ companies }) => {

  console.log(companies);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: companies?.length >= 2 ? 2 : 1,
    slidesToScroll: 2,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {
        companies?.length > 0 && (
          <section className="top-companies">
            <div className="auto-container">
              <div className="sec-title">
                <h2>Top Company Registered</h2>
                <div className="text">
                  Some of the companies we have helped recruit excellent applicants over the years.
                </div>
              </div>
              <div className="carousel-outer" data-aos="fade-up">
                <div className="companies-carousel">
                  <Slider {...settings} arrows={false}>
                    {companies?.map((company, index) => (
                      <div className="company-block" key={index}>
                        <div className="inner-box">
                          <figure className="image">
                            <Image
                              width={90}
                              height={90}
                              src={company.image || DEFAULT_USER_IMAGE}
                              alt="top company"
                            />
                          </figure>
                          <h4 className="name">
                            <Link href={`/single-company/${company.id}`}>
                              {company.name}
                            </Link>
                          </h4>
                          {company.city && company.country && (
                            <div className="location">
                              <i className="flaticon-map-locator"></i> {company.city} {", "} {company.country}
                            </div>
                          )}
                          <Link
                            href={`/`}
                            className="theme-btn btn-style-three"
                          >
                            {company.job_posts} Open Position
                          </Link>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </section>
        )
      }
    </>
  );
};

export default TopCompany;
