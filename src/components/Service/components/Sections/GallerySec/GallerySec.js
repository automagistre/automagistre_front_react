import React from 'react'
import './jquery.mCustomScrollbar.css'
import './GallerySec.css'
import {companyAbout} from "../../../../../vars/company";
import $ from 'jquery'
import 'malihu-custom-scrollbar-plugin'


import img1 from '../../../../../images/sec-gallery/work_01.jpg'
import img2 from '../../../../../images/sec-gallery/work_02.jpg'
import img3 from '../../../../../images/sec-gallery/work_03.jpg'
import img4 from '../../../../../images/sec-gallery/work_04.jpg'
import img5 from '../../../../../images/sec-gallery/work_05.jpg'
import Facts from "../Facts/Facts";



class GallerySec extends React.Component {

    inintScroll_X = ( $elem ) => {
        $elem.mCustomScrollbar({
            axis: "x",
            scrollButtons: { enable: false },
            scrollbarPosition: "outside",
            alwaysShowScrollbar: 2,
            updateOnContentResize: true,
            autoDraggerLength: false,
            mouseWheel: { enable: false }
        });
    };

    componentDidMount() {
        let $scroll_X = $(".js-scroll-x");
        if ( $scroll_X.length ) {

            this.inintScroll_X( $scroll_X );

            $(window).resize(() => {
                $scroll_X.mCustomScrollbar("destroy");
                this.inintScroll_X($scroll_X);
            });
        }
    }

    render() {
        return(
            <section className="sec-gallery js-sec-scroll">
                <div className="sec-gallery__row js-scroll-x">
                    <div className="sec-gallery__col">
                        <div className="sec-gallery__cell-100">
                            <img className="sec-gallery__img" src={img1} data-action="zoom"
                                 alt="Автосервис" />
                        </div>
                        <div className="sec-gallery__text sec-gallery__text_top-rt">
                            <h2 className="sec-gallery__title">{companyAbout.title}</h2>
                            <div className="sec-gallery__note">
                                {companyAbout.note}
                            </div>
                        </div>
                    </div>
                    <div className="sec-gallery__col">
                        <div className="sec-gallery__cell-50">
                            <img className="sec-gallery__img" src={img2} data-action="zoom"
                                 alt="Автосервис" />
                        </div>
                        <div className="sec-gallery__cell-50">
                            <img className="sec-gallery__img" src={img3} data-action="zoom"
                                 alt="Автосервис" />
                        </div>
                        <div className="sec-gallery__text sec-gallery__text_btm-rt">
                            <Facts theme="sec-gallery__facts"/>
                        </div>
                    </div>
                    <div className="sec-gallery__col">
                        <div className="sec-gallery__cell-33">
                            <img className="sec-gallery__img" src={img4} data-action="zoom"
                                 alt="Автосервис" />
                        </div>
                        <div className="sec-gallery__cell-67">
                            <img className="sec-gallery__img" src={img5} data-action="zoom"
                                 alt="Автосервис" />
                        </div>
                    </div>
                    <div className="sec-gallery__col">
                        <div className="sec-gallery__cell-50">
                            <img className="sec-gallery__img" src={img2} data-action="zoom"
                                 alt="Автосервис" />
                        </div>
                        <div className="sec-gallery__cell-50">
                            <img className="sec-gallery__img" src={img3} data-action="zoom"
                                 alt="Автосервис" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }


};
export default GallerySec