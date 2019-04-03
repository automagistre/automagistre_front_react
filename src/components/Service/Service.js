import React, {Component} from 'react'

import './slick-slider.less'
import './jquery.mCustomScrollbar.less'

import Header from "./components/Header/Header";
// import Main from "./containers/Main/Main";
import Footer from "./components/Footer/Footer";
// import SideBar from "../UI/Sidebar/Sidebar";
import MakeAnAppointmentSec from "./components/Sections/MakeAnAppointmentSec/MakeAnAppointmentSec";
import FeaturesSec from "./components/Sections/FeaturesSec/FeaturesSec";
import CompDiagSelect from "../UI/CompDiagSelect/CompDiagSelect";
import ExperienceSec from "./components/Sections/ExperienceSec/ExperienceSec";
import MasterSec from "./components/Sections/MasterSec/MasterSec";
import ExpertSec from "./components/Sections/ExpertSec/ExpertSec";
import ReviewsSec from "./components/Sections/ReviewsSec/ReviewsSec";
import $ from 'jquery'
import 'malihu-custom-scrollbar-plugin'
import GallerySec from "./components/Sections/GallerySec/GallerySec";
import PartnersSec from "./components/Sections/PartnersSec/PartnersSec";

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
                <Header/>
                {/*<Main/>*/}
                <MakeAnAppointmentSec />
                <FeaturesSec offerButton={true}>
                    <CompDiagSelect />
                </FeaturesSec>
                <ExperienceSec />
                <MasterSec />
                <ExpertSec />
                <ReviewsSec/>
                <GallerySec />
                <PartnersSec />
                {/*<SideBar/>*/}
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Service