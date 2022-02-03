import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";

import {pokemonImgList} from "./data";

import "swiper/css";
import styles from "./swiper.module.scss";

export const Slider = () => {
    return (
        <div className={styles.swiper_container}>
            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {
                    pokemonImgList.map(pokemonImg =>
                        <SwiperSlide key={pokemonImg} className={styles.img_container}>
                            <img className={styles.img_swiper} src={pokemonImg} alt=""/>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};
