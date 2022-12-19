import './ProductSlider.css';
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import {FiChevronRight} from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "../i18n";



const ProductSlider = () => {

  const { t } = useTranslation();
 
  

  return (
        
        
        <div className='ProductContainer'>
        <Swiper
           freeMode={true}
           grabCursor={true}
           modules={[FreeMode]}
           className="mySwiper"
           
           breakpoints={{
            0:{
                slidesPerView:1,
                spaceBetween: 10,
            },
            480:{
                slidesPerView:2,
                spaceBetween: 10,
            },
            768:{
                slidesPerView:3,
                spaceBetween: 15,
            },
            1024:{
                slidesPerView:3,
                spaceBetween: 15,
            },
            1920:{
                slidesPerView:3,
                spaceBetween: 30,
                
            },
           }}
           
        >
            <SwiperSlide className='ProductCard'>
                <h2 className='ProductNumb'>01</h2>
                <div className='ProductCard_header'>
                  <div className='ProductTitle'>GeForce RTX 3090</div>
                  <div className='ProductSub_title'>{t("C_Videocards")}</div>
                </div>
                <div className='ProductCard_img'>
                  <img src={process.env.PUBLIC_URL + '/Imgs/prod1.png'} alt="GeForce RTX 3090"/>
                </div>
                <div className='ProductCard_footer'>
                  <a className='ProductMore' href='http://www.google.com'>{t("More_ds")} <FiChevronRight className='MoreIcone'/></a>

                </div>
            </SwiperSlide>

            <SwiperSlide className='ProductCard'>
                <h2 className='ProductNumb'>02</h2>
                <div className='ProductCard_header'>
                  <div className='ProductTitle'>GeForce RTX 3090</div>
                  <div className='ProductSub_title'>{t("C_Videocards")}</div>
                </div>
                <div className='ProductCard_img'>
                  <img src={process.env.PUBLIC_URL + '/Imgs/prod1.png'} alt="GeForce RTX 3090"/>
                </div>
                <div className='ProductCard_footer'>
                  <a className='ProductMore' href='http://www.google.com'>{t("More_ds")} <FiChevronRight className='MoreIcon'/></a>
                </div>
            </SwiperSlide>

            <SwiperSlide className='ProductCard'>
                <h2 className='ProductNumb'>03</h2>
                <div className='ProductCard_header'>
                  <div className='ProductTitle'>GeForce RTX 3090</div>
                  <div className='ProductSub_title'>{t("C_Videocards")}</div>
                </div>
                <div className='ProductCard_img'>
                  <img src={process.env.PUBLIC_URL + '/Imgs/prod1.png'} alt="GeForce RTX 3090"/>
                </div>
                <div className='ProductCard_footer'>
                  <a className='ProductMore' href='#'>{t("More_ds")} <FiChevronRight className='MoreIcon'/></a>
                </div>
            </SwiperSlide>

            <SwiperSlide className='ProductCard'>
            <h2 className='ProductNumb'>04</h2>
                <div className='ProductCard_header'>
                  <div className='ProductTitle'>GeForce RTX 3090</div>
                  <div className='ProductSub_title'>{t("C_Videocards")}</div>
                </div>
                <div className='ProductCard_img'>
                  <img src={process.env.PUBLIC_URL + '/Imgs/prod1.png'} alt="GeForce RTX 3090"/>
                </div>
                <div className='ProductCard_footer'>
                  <a className='ProductMore' href='#'>{t("More_ds")} <FiChevronRight className='MoreIcon'/></a>
                </div>
            </SwiperSlide>

            <SwiperSlide className='ProductCard'>
            <h2 className='ProductNumb'>05</h2>
                <div className='ProductCard_header'>
                  <div className='ProductTitle'>GeForce RTX 3090</div>
                  <div className='ProductSub_title'>{t("C_Videocards")}</div>
                </div>
                <div className='ProductCard_img'>
                  <img src={process.env.PUBLIC_URL + '/Imgs/prod1.png'} alt="GeForce RTX 3090"/>
                </div>
                <div className='ProductCard_footer'>
                  <a className='ProductMore' href='#'>{t("More_ds")} <FiChevronRight className='MoreIcon'/></a>
                </div>
            </SwiperSlide>


        </Swiper>


        </div>
    );
  }

export default ProductSlider;