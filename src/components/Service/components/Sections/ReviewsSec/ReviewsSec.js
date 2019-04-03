import React, {Component} from 'react'

import './ReviewsSec.less'
import './ReviewCard.less'

import {data} from '../../../../../vars/texts/sec_data/sec_reviews'

import Slider from 'react-slick'
import CustomArrow from "../../../../UI/CostomArrow/CostomArrow";


const ReviewSlide = props => {
    return (
        <div className="sec-reviews__slide">
            <div className="review-card">
                <h4 className="review-card__title">
                    {props.review.name} на {props.review.manufacture} {props.review.model}
                </h4>
                <div className="review-card__text js-scroll-y">
                    {props.review.review}
                </div>
                <div className="review-card__info">
                    { props.review.url ? (
                        <a className="review-card__link" href={props.review.url} >{props.review.source}</a>
                    ) : (
                        <div className="review-card__link">{props.review.source}</div>
                    )}
                    <b className="review-card__date">{props.review.date}</b>
                </div>
            </div>
        </div>
    )
}

class ReviewsSec extends Component {

    data = data

    render() {
        const slideOptions = {
            className: "sec-reviews__slider",
            arrows: true,
            dots: true,
            infinite: true,
            speed: 800,
            autoplay: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: <CustomArrow className="slick-arrow slick-prev" />,
            nextArrow: <CustomArrow className="slick-arrow slick-next"/>,
            responsive: [
                { breakpoint: 1100, settings: { slidesToShow: 2 } },
                { breakpoint:  760, settings: { slidesToShow: 2, arrows: false } },
                { breakpoint:  540, settings: { slidesToShow: 1, arrows: false  } }
            ]
        }
        return (
            <section className="sec-reviews">
                <div className="container">
                    <h2 className="sec-reviews__title">Отзывы</h2>
                    <Slider {...slideOptions}>
                        {this.data.map(((value, key) => {return (<ReviewSlide review={value} key={key} />)})) }
                    </Slider>
                    <div className="sec-reviews__more">
                        <a className="btn btn_arrow-rt sec-reviews__more-btn">Посмотреть более 2 000 отзывов</a>
                    </div>
                </div>
            </section>
        )
    }

}

export default ReviewsSec