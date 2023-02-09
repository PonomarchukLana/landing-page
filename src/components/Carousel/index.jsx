import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import { ReactComponent as ArrowLeft } from '../../images/arrows/chevron-left.svg';
import { ReactComponent as ArrowRight } from '../../images/arrows/chevron-right.svg';
import styles from './Styles.module.scss';
import './styles.scss';

const content = [
    {
        img: require('../../images/slider/energy.png'),
        alt: 'energy',
        title: 'Save energy',
        content: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
    {
        img: require('../../images/slider/avoid-plastic.png'),
        alt: 'plastic',
        title: 'Avoid plastic',
        content: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
    {
        img: require('../../images/slider/water.png'),
        alt: 'water',
        title: 'Choose organic',
        content: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
    {
        img: require('../../images/slider/forest.png'),
        alt: 'forest',
        title: 'Save watter',
        content: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
    {
        img: require('../../images/slider/sea.png'),
        alt: 'sea',
        title: 'Plant trees',
        content: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
    {
        img: require('../../images/slider/water.png'),
        alt: 'water',
        title: 'Save energy',
        content: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    }
]

const Carousel = () => {
    const slider = useRef(null);

    let [currentSlide, setCurrentSlide] = useState(1);

    const settings = {
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 5,
        focusOnSelect: true,
        dots: false,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    centerMode: true,
                    arrows: false,
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    arrows: false,
                    centerPadding: '5px',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    arrows: false,
                    centerPadding: '3px',
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerMode: true,
                    arrows: false,
                    centerPadding: '3px',
                    slidesToShow: 1
                }
            }
        ]
    };

    const handleSlickPrev = () => {
        slider?.current?.slickPrev();
        currentSlide > -content.length ? setCurrentSlide(Math.abs(--currentSlide != 0 ? currentSlide-- : content.length)) : setCurrentSlide(1);
    };

    const handleSlickNext = () => {
        slider?.current?.slickNext();
        currentSlide < content.length ? setCurrentSlide(++currentSlide) : setCurrentSlide(1);
    };

    return (
        <div className={styles.container}>
            <Slider ref={slider} {...settings}>
                {content.map((item, index) =>
                    <div className={styles.slide} key={item.alt}>
                        <div className={`${styles.item} item`}>
                            <div className={`${styles.contentWrapp} contentWrapp`}>
                                <p className={`${styles.title} title`}>{item.title}</p>
                                <p className={`${styles.subTitle} subTitle`}>{item.content}</p>
                            </div>
                            <img src={item.img} alt={item.alt} />
                        </div>
                    </div>)}
            </Slider>
            <div className={styles.paginationWrapp}>
                <div className={styles.arrow} onClick={handleSlickPrev}><ArrowLeft /></div>
                <div className={styles.pagination}>{currentSlide}<span>/{content.length}</span></div>
                <div className={styles.arrow} onClick={handleSlickNext}><ArrowRight /></div>
            </div>
        </div>
    );
};

export default Carousel;
