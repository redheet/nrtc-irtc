import React from 'react';
import IntroData from '../../data/intro/intro.json';
import Intro from '../../components/Intro/Intro.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

const IntroSlider =  () => {
    const swiperOption = {
        loop: true,
        speed: 750,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.intro-slider .swiper-button-next',
            prevEl: '.intro-slider .swiper-button-prev',
        }
    }
    return (
        <div className="intro-slider-wrap section">
        <Swiper effect="fade" className="intro-slider"
            {...swiperOption}
        >
            {IntroData &&
                IntroData.map((single, key) => {
                    return(
                        <SwiperSlide key={key}>
                            <Intro data={single} key={key} />
                        </SwiperSlide>
                    ); 
                })}
            <div className="home-slider-next main-slider-nav swiper-button-next">
                <i className="fal fa-angle-right"></i>
            </div>
            <div className="home-slider-prev main-slider-nav swiper-button-prev">
                <i className="fal fa-angle-left"></i>
            </div>
        </Swiper>
        </div>
    )
}

export default IntroSlider
