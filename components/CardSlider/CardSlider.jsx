import React, { Component, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CardSlider.module.css";
import classNames from "classnames";

const SliderNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={classNames(className, styles.arrow__next)}
            style={{
                ...style,
            }}
            onClick={onClick}
        >
            <div className={styles.arrow__next_inner}>
                <img src="/images/slider-next.png" alt="" />
            </div>
        </div>
    );
};

const SliderPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={classNames(className, styles.arrow__prev)}
            style={{
                ...style,
            }}
            onClick={onClick}
        >
            <div className={styles.arrow__prev_inner}>
                <img src="/images/slider-prev.png" alt="" />
            </div>
        </div>
    );
};

const CardSlider = ({ photos }) => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SliderNextArrow />,
        prevArrow: <SliderPrevArrow />,
    };

    const settings2 = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: false,
    };

    return (
        <div className={styles.slider}>
            <Slider
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                {...settings}
            >
                {photos.length !== 0 ? (
                    photos.map(({ photo }) => {
                        return (
                            <div key={photo}>
                                <img
                                    className={styles.slider__image}
                                    src={`${process.env.BASE_URL}${photo}`}
                                    alt=""
                                />
                            </div>
                        );
                    })
                ) : (
                    <div>
                        <img
                            className={classNames(
                                styles.slider__image,
                                styles.slider__image_not
                            )}
                            src="/images/not-found.png"
                            alt=""
                        />
                    </div>
                )}
            </Slider>
            {photos.length !== 0 ? (
                <div className={styles.second__items}>
                    <Slider
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        {...settings2}
                    >
                        {photos.map(({ photo }) => {
                            return (
                                <div className={styles.second} key={photo}>
                                    <img
                                        className={styles.slider__image}
                                        src={`${process.env.BASE_URL}${photo}`}
                                        alt=""
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            ) : null}
        </div>
    );
};

export default CardSlider;
