import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';import "swiper/css"
import "./Residencies.css"
import data from '../../slider.json';
import { sliderSettings } from '../../common';
import Value from '../Value/Value';

const Residencies = () => {
  return (
    <section id='residences' className='r-wrapper'>
        <div className='paddings innerWidth r-container'>
            <div className='r-head flexColStart'>
                <span className='blueText'>Meilleurs choix</span>
                <span className='primaryText' id='residences'>Résidences populaires</span>
            </div>
            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {data.map((card, i)=> (
                        <SwiperSlide key={i}>
                            <div className='flexColStart r-card'>
                                <img src={card.image} alt="homme" />
                                <span className='secondaryText r-price'>
                                <span style={{color: "blue"}}>€</span><span>{card.price}</span>
                                </span>

                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>

                            </div>
                        </SwiperSlide>
             ))   
         }
            </Swiper>
        </div>
        <Value />;
    </section>
  )
}

export default Residencies

const SliderButtons = ()=> {
    const swiper = useSwiper();
    return(
        <div className='flexCenter r-buttons'>
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
        
    );
};

