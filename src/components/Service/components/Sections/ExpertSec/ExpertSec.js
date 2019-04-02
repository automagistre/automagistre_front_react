import React, {Component} from 'react'
import './slick-slider.less'
import './ExpertSec.less'
import './modal-video.scss'

import Slick from 'react-slick'
import ModalVideo from 'react-modal-video'


import ltImg_1 from '../../../../../img/sec-expert/lt-img_01.png'
import ltImg_2 from '../../../../../img/sec-expert/lt-img_02.png'
import ltImg_3 from '../../../../../img/sec-expert/lt-img_03.png'
import ltImg_4 from '../../../../../img/sec-expert/lt-img_04.png'
import ltImg_5 from '../../../../../img/sec-expert/lt-img_05.png'
import ltImg_6 from '../../../../../img/sec-expert/lt-img_06.png'
import ltImg_7 from '../../../../../img/sec-expert/lt-img_07.png'

import rtImg_1 from '../../../../../img/sec-expert/rt-img_01.png'
import rtImg_2 from '../../../../../img/sec-expert/rt-img_02.png'
import rtImg_3 from '../../../../../img/sec-expert/rt-img_03.png'
import rtImg_4 from '../../../../../img/sec-expert/rt-img_04.png'
import rtImg_5 from '../../../../../img/sec-expert/rt-img_05.png'
import rtImg_6 from '../../../../../img/sec-expert/rt-img_06.png'
import Worker from '../../../../../img/sec-expert/worker.png'

import {data} from '../../../../../vars/texts/sec_data/sec_expert'
import $ from "jquery";
import {TweenLite} from "gsap/all";

function CustomArrow(props) {
    const { className, onClick } = props;
    return (
        <button type='button' className={className} onClick={onClick} />
    );
}

class ExpertSec extends Component {
    data = data
    state = {
        isOpen: false,
        currentVideo: 0
    }
    IMG_DIR = "/images/sec-expert/"


    componentDidMount() {
        this.SECEXPERT = {
            $lt_01:  $(".sec-expert__lt-img_01"),
            $lt_02:  $(".sec-expert__lt-img_02"),
            $lt_03:  $(".sec-expert__lt-img_03"),
            $lt_04:  $(".sec-expert__lt-img_04"),
            $lt_05:  $(".sec-expert__lt-img_05"),
            $lt_06:  $(".sec-expert__lt-img_06"),
            $lt_07:  $(".sec-expert__lt-img_07"),
            $rt_01:  $(".sec-expert__rt-img_01"),
            $rt_02:  $(".sec-expert__rt-img_02"),
            $rt_03:  $(".sec-expert__rt-img_03"),
            $rt_04:  $(".sec-expert__rt-img_04"),
            $rt_05:  $(".sec-expert__rt-img_05"),
            $rt_06:  $(".sec-expert__rt-img_06")
        }
        this.$W = $(window)
        this.$features = $('#sec-expert-back')
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

        TweenLite.to(this.SECEXPERT.$lt_01, 2, { y: thisOffset/14, force3D:true, delay:0.1 });
        TweenLite.to(this.SECEXPERT.$lt_02, 2, { y: thisOffset/12, force3D:true, delay:0.1 });
        TweenLite.to(this.SECEXPERT.$lt_03, 2, { y: thisOffset/10, force3D:true, delay:0.1 });
        TweenLite.to(this.SECEXPERT.$lt_04, 2, { y: thisOffset/8, force3D:true, delay:0.1 });
        TweenLite.to(this.SECEXPERT.$lt_05, 2, { y: thisOffset/6, force3D:true, delay:0.1 });
        TweenLite.to(this.SECEXPERT.$lt_06, 2, { y: thisOffset/4, force3D:true, delay:0.1 });
        TweenLite.to(this.SECEXPERT.$lt_07, 2, { y: thisOffset/2, force3D:true, delay:0.1 });

        TweenLite.to(this.SECEXPERT.$rt_01, 2, { y: thisOffset/12, force3D:true, delay:0.1 });
        TweenLite.to(this.SECEXPERT.$rt_02, 2, { y: thisOffset/10, force3D:true, delay:0.1 });
        TweenLite.to(this.SECEXPERT.$rt_03, 2, { y: thisOffset/8, force3D:true, delay:0.1 });
        TweenLite.to(this.SECEXPERT.$rt_04, 2, { y: thisOffset/6, force3D:true, delay:0.1 });
        TweenLite.to(this.SECEXPERT.$rt_05, 2, { y: thisOffset/4, force3D:true, delay:0.1 });
        TweenLite.to(this.SECEXPERT.$rt_06, 2, { y: thisOffset/2, force3D:true, delay:0.1 });
    }

    renderNav = data => data.map((value, key) => {
        return (
            <a className="sec-expert__btn" onClick={ () => this.slider.slickGoTo(key)} key={key} >{value.title}</a>
        )
    })

    renderSlides = data => data.map((value, key) => {
        return (
            <div className="sec-expert__slide" key={key}>
                <div className="container">
                    <h4 className="sec-expert__subtitle">
                        <span>{value.title}</span></h4>
                    <div className="sec-expert__row">
                        <div className="sec-expert__col-lt">
                            <a className="sec-expert__video" role="button" onClick={() => this.setState(
                                {isOpen: true,
                                      currentVideo: key})}>
                                <img className="sec-expert__video-img" src={ this.IMG_DIR + value.img } alt="video" />
                            </a>
                        </div>
                        <div className="sec-expert__col-rt">
                            <nav className="sec-expert__nav">
                                {this.renderNav(this.data)}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    render() {
        let workerCls = "sec-expert__worker"
        const slickOptions = {
            className: "sec-expert__slider",
            arrows: true,
            dots: true,
            infinite: true,
            speed: 800,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <CustomArrow className='slick-arrow slick-prev'/>,
            nextArrow: <CustomArrow className='slick-arrow slick-next'/>,
            beforeChange: (current, next) => this.setState({ activeSlide: next })
        }

        if (this.state.isOpen) { workerCls += " is-hidden"}
        return(
            <section className="sec-expert js-sec-scroll">
                <div className="sec-expert__back" id="sec-expert-back">
                    <div className="sec-expert__parr-lt">
                        <img className="sec-expert__parr-img sec-expert__lt-img_01" src={ltImg_1} alt="Авторемонт" />
                        <img className="sec-expert__parr-img sec-expert__lt-img_02" src={ltImg_2} alt="Авторемонт" />
                        <img className="sec-expert__parr-img sec-expert__lt-img_03" src={ltImg_3} alt="Авторемонт" />
                        <img className="sec-expert__parr-img sec-expert__lt-img_04" src={ltImg_4} alt="Авторемонт" />
                        <img className="sec-expert__parr-img sec-expert__lt-img_05" src={ltImg_5} alt="Авторемонт" />
                        <img className="sec-expert__parr-img sec-expert__lt-img_06" src={ltImg_6} alt="Авторемонт" />
                        <img className="sec-expert__parr-img sec-expert__lt-img_07" src={ltImg_7} alt="Авторемонт" />
                    </div>
                    <div className="sec-expert__parr-rt">
                        <img className="sec-expert__parr-img sec-expert__rt-img_01" src={rtImg_1} alt="Авторемонт" />
                        <img className="sec-expert__parr-img sec-expert__rt-img_02" src={rtImg_2} alt="Авторемонт" />
                        <img className="sec-expert__parr-img sec-expert__rt-img_03" src={rtImg_3} alt="Авторемонт" />
                        <img className="sec-expert__parr-img sec-expert__rt-img_04" src={rtImg_4} alt="Авторемонт" />
                        <img className="sec-expert__parr-img sec-expert__rt-img_05" src={rtImg_5} alt="Авторемонт" />
                        <img className="sec-expert__parr-img sec-expert__rt-img_06" src={rtImg_6} alt="Авторемонт" />
                    </div>
                </div>
                <div className="sec-expert__front">
                    <h2 className="sec-expert__title">Убедитесь в нашей экспертности сами</h2>
                    <Slick ref={slider => (this.slider = slider)} {...slickOptions}>
                        {this.renderSlides(this.data)}
                    </Slick>
                    <img className={workerCls} src={Worker} alt="Авторемонтник"/>
                </div>
                <ModalVideo channel='youtube' autoplay={1} controls={0} isOpen={this.state.isOpen}
                            videoId={this.data[this.state.currentVideo].videoId}
                            onClose={() => this.setState({isOpen: false})}
                />
            </section>
        )
    }
}
export default ExpertSec