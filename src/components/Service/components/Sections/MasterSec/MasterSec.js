import React from 'react'
import './MasterSec.less'

import Slick from 'react-slick'

import backgroundImg from '../../../../../img/backgrounds/bg_sec-master.jpg'
import {data} from '../../../../../vars/texts/sec_data/sec_master'
import CustomArrow from "../../../../UI/CostomArrow/CostomArrow";



class MasterRender extends React.Component {
    IMG_DIR = "/img/sec-master/"

    render() {
        return (
            <div className="sec-master__slide" >
                <div className="container sec-master__slide-row">
                    <div className="sec-master__slide-lt">
                        <img className="sec-master__slide-img" src={this.IMG_DIR + this.props.master.img}
                             alt="Мастер авторемонт" />
                    </div>
                    <div className="sec-master__slide-rt">
                        <div className="sec-master__slide-text js-scroll-y">
                            <h4 className="sec-master__slide-title">{this.props.master.name}</h4>
                            <dl className="sec-master__slide-list">
                                <dt>{this.props.master.position}</dt>
                                <dd>Стаж работы по специальности: с {this.props.master.experience} г.</dd>
                                <dt>Основной профиль:</dt>
                                <dd>{this.props.master.profile}</dd>
                                <dt>Дополнительный профиль:</dt>
                                <dd>{this.props.master.more_profile}</dd>
                                <dt>Информация о специалисте:</dt>
                                <dd>
                                    {this.props.master.info}
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const MasterSec = () => {
    const slickOptions = {
        className: 'sec-master__slider',
        arrows: true,
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomArrow className='slick-arrow slick-prev'/>,
        nextArrow: <CustomArrow className='slick-arrow slick-next'/>,
        responsive: [
            { breakpoint: 760, settings: { arrows: false } }
        ]
    }
    return (
        <section className="sec-master">
            <div className="sec-master__back"
                 style={{backgroundImage: `url(${backgroundImg})`}} />
            <div className="sec-master__front">
                <h2 className="sec-master__title">Наши мастера</h2>
                <Slick {...slickOptions}>
                    {data.map((value, key) => (<MasterRender master={value} key={key} />))}
                </Slick>
            </div>
        </section>
    )
}

export default MasterSec