import PropTypes from "prop-types";
import React from 'react';
import TestimonialData from '../../data/testimonial/testimonial.json'
import Testimonial from '../../components/Testimonial/Testimonial.jsx';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([ Pagination ]);

const TestimonialContainer = ({ classOption }) => {
    return (
        <div className={`testimonial-section section section-padding-t90 section-padding-bottom ${classOption}`}>
            <div className="container-fluid pl-xl-16 pl-lg-3 pl-md-3 pl-sm-3 pl-3 pr-xl-16 pr-lg-3 pr-md-3 pr-sm-3 pr-3">
                <SectionTitle
                    headingOption="title fz-28"
                    title="What our customers are saying about our services"
                    subTitle="Get your company heading in the right direction with our digital
                        marketing strategist"
                />

                <Swiper className="testimonial-slider" data-aos="fade-up" data-aos-delay="300"
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides
                loop
                pagination={{ clickable: true }}
                breakpoints= {{
                    1499:{
                        slidesPerView : 3
                    },

                    991:{
                        slidesPerView : 2
                    },

                    767:{
                        slidesPerView : 1

                    },

                    575:{
                        slidesPerView : 1
                    }
                }}
                >
                    {TestimonialData &&
                        TestimonialData.map((single, key) => {
                            return(
                                <SwiperSlide key={key}>
                                    <Testimonial data={single} key={key} />
                                </SwiperSlide>
                            ); 
                    })}
                        
                </Swiper>
            </div>
        </div>
    )
}

TestimonialContainer.propTypes = {
    classOption: PropTypes.string
};
TestimonialContainer.defaultProps = {
    classOption: "testimonial-section section section-padding-t90 section-padding-bottom"
};

export default TestimonialContainer;
