import React from 'react'
import '../block_panel.less'
import './FeaturesSec.less'
import {data} from '../../../../../vars/texts/sec_data/sec_features'
import {TweenLite} from 'gsap/all'
import $ from 'jquery'

import ltImgMim from  '../../../../../img/sec-features/lt-img_min.png';
import ltImgBig from  '../../../../../img/sec-features/lt-img_big.png';
import ltImgBlur from  '../../../../../img/sec-features/lt-img_blur.png';
import rtImgMim from  '../../../../../img/sec-features/rt-img_min.png';
import rtImgBig from  '../../../../../img/sec-features/rt-img_big.png';
import rtImgBlur from  '../../../../../img/sec-features/rt-img_blur.png';


class FeaturesSec extends React.Component{

    constructor(props) {
        super(props)
        props.data ? this.data = props.data : this.data = data
    }

    componentDidMount() {
        this.SECFEAT = {
            $ltMin:  $('.sec-features__lt-img_min'),
            $ltBig:  $('.sec-features__lt-img_big'),
            $ltBlur: $('.sec-features__lt-img_blur'),
            $rtMin:  $('.sec-features__rt-img_min'),
            $rtBig:  $('.sec-features__rt-img_big'),
            $rtBlur: $('.sec-features__rt-img_blur')
        }
        this.$W = $(window)
        this.$features = $('#sec-features-back')
        this.animateParallax()
        window.addEventListener('scroll', this.animateParallax)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.animateParallax)
    }

    animateParallax = () => {
        let winScroll = this.$W.scrollTop(),
            winHeight = this.$W.height(),
            secTop = this.$features.offset().top || 0,
            startLevel, stopLevel, thisOffset

        startLevel = secTop - winHeight
        stopLevel = secTop + winHeight
        if ( winScroll < startLevel || winScroll > stopLevel )
            return

        thisOffset = winScroll - startLevel

        TweenLite.to(this.SECFEAT.$ltMin,  2, { y: thisOffset/8, force3D:true, delay:0.1 })
        TweenLite.to(this.SECFEAT.$ltBig,  2, { y: thisOffset/5, force3D:true, delay:0.1 })
        TweenLite.to(this.SECFEAT.$ltBlur, 2, { y: thisOffset/2, force3D:true, delay:0.1 })
        TweenLite.to(this.SECFEAT.$rtMin,  2, { y: thisOffset/7, force3D:true, delay:0.1 })
        TweenLite.to(this.SECFEAT.$rtBig,  2, { y: thisOffset/3, force3D:true, delay:0.1 })
        TweenLite.to(this.SECFEAT.$rtBlur, 2, { y: thisOffset/2, force3D:true, delay:0.1 })
    }

    renderFutureItems = items => items.map((value, key) => {
        const cls = "feature__icon feature__icon icon-f_" + value.img;
        return (
            <li className="feature sec-features__item" key={key}>
                <i className={cls} />
                <h3 className="feature__title">{value.title}</h3>
                <div className="feature__note">{value.note}</div>
            </li>
        )
    });

    render() {
        return (
            <section className="sec-features js-sec-scroll" >
                <div className="sec-features__back" id="sec-features-back">
                    <div className="sec-features__parr-lt">
                        <img className="sec-features__parr-img sec-features__lt-img_min"
                           src={ltImgMim} alt="Авторемонт" />
                        <img className="sec-features__parr-img sec-features__lt-img_big"
                           src={ltImgBig} alt="Авторемонт" />
                        <img className="sec-features__parr-img sec-features__lt-img_blur"
                           src={ltImgBlur} alt="Авторемонт" />
                    </div>
                    <div className="sec-features__parr-rt">
                        <img className="sec-features__parr-img sec-features__rt-img_min"
                           src={rtImgMim} alt="Авторемонт" />
                        <img className="sec-features__parr-img sec-features__rt-img_big"
                            src={rtImgBig} alt="Авторемонт" />
                        <img className="sec-features__parr-img sec-features__rt-img_blur"
                            src={rtImgBlur} alt="Авторемонт" />
                    </div>
                </div>
                <div className="sec-features__front">
                    <div className="container">
                        <ul className="sec-features__list">
                            { this.renderFutureItems(this.data) }
                        </ul>
                        {this.props.offerButton &&
                            <div className="sec-features__get">
                                <a className="btn" href="#">Записаться на бесплатную диагностику</a>
                            </div>
                        }
                        {this.props.children &&
                            <div className="sec-features__offer">
                                {this.props.children}
                            </div>
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default  FeaturesSec

