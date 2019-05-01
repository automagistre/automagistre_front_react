import React, {Component} from 'react'

import './slick-slider.less'
import './jquery.mCustomScrollbar.less'
import * as Scroll from 'react-scroll'

import MakeAnAppointmentSec from "./components/Sections/MakeAnAppointmentSec/MakeAnAppointmentSec";

import $ from 'jquery'
import 'malihu-custom-scrollbar-plugin'

import AboutSec from "./components/Sections/AboutSec/AboutSec";

import CostingSec from "./components/Sections/CostingSec/CostingSec";
import {connect} from "react-redux";
import {setManufacture} from "../../store/actions/serviceActions";

let ScrollLink = Scroll.Link
let ScrollElement = Scroll.Element


class Service extends Component {
    initScroll_X = ($elem ) => {
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

    initScroll_Y = ($elem) => {
        $elem.mCustomScrollbar({
            axis: "y",
            scrollButtons: { enable: false },
            scrollbarPosition: "outside",
            alwaysShowScrollbar: 0,
            updateOnContentResize: true,
            autoDraggerLength: false
        });
    }

    componentDidMount() {
        let $scroll_X = $(".js-scroll-x");
        if ( $scroll_X.length ) {

            this.initScroll_X( $scroll_X );

            $(window).resize(() => {
                $scroll_X.mCustomScrollbar("destroy");
                this.initScroll_X($scroll_X);
            });
        }
        let $scroll_Y = $(".js-scroll-y");
        if ( $scroll_Y.length ) {
            this.initScroll_Y($scroll_Y);
        }
    }
    render() {
        return (


                    <React.Fragment>
                        <MakeAnAppointmentSec title='привет' >
                            <ScrollLink className="btn sec-intro__btn" to="test2" smooth={true}  duration={500}>
                                К прайс-листу
                            </ScrollLink>
                        </MakeAnAppointmentSec>

                        <ScrollElement name="test2" />
                        <CostingSec />
                        <AboutSec />
                        {/*<SideBar/>*/}
                    </React.Fragment>

        )
    }
}

function mapStateToProps(state) {
    return {
        manufactures: state.service.manufactures
    }
}

export default connect(mapStateToProps)(Service)