import React, {Component} from 'react'
import './slick-slider.less'
import './WorkSec.less'
import {data} from '../../../../../vars/texts/sec_data/sec_work'
import Slick from 'react-slick'
import Odometer from 'react-odometerjs'

class WorkSec extends Component {
    IMG_DIR = '/images/sec-work/'
    state = {
        activeBlock:0
    }
    constructor(props) {
        super(props)
        this.data = data
    }

    changeActive = (e, newActive) => this.setState({activeBlock:newActive})

    renderSlides = (props) => {
        const settings = {
            className: "sec-work__slider",
            arrows: false,
            dots: true,
            infinite: true,
            speed: 600,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            draggable: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        let slides = props.pics.map((value, key) => {
            return (
                <div className="sec-work__slide js-type-01" key={key}>
                    <div className="sec-work__slide-back">
                        <img className="sec-work__slide-min"
                             src={this.IMG_DIR + value.pic_big} alt="Авторемонт" />
                    </div>
                    <div className="sec-work__slide-front" >
                        <img className="sec-work__slide-big"
                             src={this.IMG_DIR + value.pic_min} alt="Авторемонт" />
                        <div className="sec-work__slide-note"><span>{value.note}</span></div>
                    </div>
                </div>
            )
        })

        return (
            <React.Fragment>
                <Slick {...settings} className="sec-work__slider" id="sec-work-slider">
                    {slides}
                </Slick>
                <div className="sec-work__count" id="sec-work-count">
                    <Odometer className="sec-work__count" value={this.state.activeBlock + 101}
                               format="(dd)"
                               options={{auto:false, duration:200}}
                    />
                </div>
            </React.Fragment>
        )
    }

    renderMenu = menuItems => {
        return menuItems.map((menuItem, key) => {
            let btn = 'sec-work__btn_' + menuItem.btn
            let cls = btn + " sec-work__btn js-work-filter"
            if (this.state.activeBlock === key)
                cls += " is-active"
            return (
                <li className="sec-work__menu-item" key={key}>
                    <a className={cls} role="button"
                       onClick={(e) => this.changeActive(e, key)}><span>{menuItem.title}</span></a>
                </li>
            )
        });
    }

    render() {
        return (
            <section className="sec-work js-sec-scroll">
                <div className="sec-work__front">
                    <div className="container sec-work__wrap">
                        <h2 className="sec-work__title">Наши работы</h2>
                        <div className="sec-work__row">
                            <div className="sec-work__col-lt">
                                <ul className="sec-work__menu">
                                    {this.renderMenu(this.data)}
                                </ul>
                            </div>
                            <div className="sec-work__col-rt">
                                {this.renderSlides(this.data[this.state.activeBlock])}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WorkSec