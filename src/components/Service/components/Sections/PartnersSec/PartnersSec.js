import React from 'react'
import Slider from 'react-slick'

import './PartnersSec.less'

import {data} from '../../../../../vars/texts/sec_data/sec_partners'
import CustomArrow from "../../../../UI/CostomArrow/CostomArrow";

const PartnersSlide = props => {
    return (
        <div className="sec-partners__slide">
            <img className="sec-partners__logo" src={props.imgDir + props.partner.logo} alt={props.partner.name} />
        </div>
    )
}

const PartnersSec = () => {
    const sliderOptions = {
        className: "sec-partners__slider",
        arrows: true,
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: <CustomArrow className="slick-arrow slick-prev" />,
        nextArrow: <CustomArrow className="slick-arrow slick-next" />,
        responsive: [
            { breakpoint: 1024, settings: { arrows: false } }
        ]
    }
    const IMG_DIR = '/img/sec-partners/'
    return (
        <section className="sec-partners">
            <div className="container">
                <h2 className="sec-partners__title">Нам доверяют основные клубы Москвы</h2>
                <Slider {...sliderOptions}>
                    { data.map((value, key) => {return <PartnersSlide imgDir={IMG_DIR}
                                                                      partner={value}
                                                                      key={key}/>}) }
                </Slider>
            </div>
        </section>
    )
}

export default PartnersSec