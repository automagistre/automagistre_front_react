import React from 'react'
import './Main.less'
import IntroSec from "../../components/Sections/IntroSec/IntroSec";
import FeaturesSec from "../../components/Sections/FeaturesSec/FeaturesSec";
import GallerySec from "../../components/Sections/GallerySec/GallerySec";
import ServicesSec from "../../components/Sections/ServicesSec/ServicesSec";
import WorkSec from "../../components/Sections/WorkSec/WorkSec";
import ExpertSec from "../../components/Sections/ExpertSec/ExpertSec";
import FaqSec from "../../components/Sections/FaqSec/FaqSec";
import MapSec from "../../components/Sections/MapSec/MapSec";

const Main = () => {
    return (
        <main className="site-main">
            <IntroSec />
            <FeaturesSec />
            <GallerySec />
            <ServicesSec />
            <WorkSec />
            <ExpertSec />
            <FaqSec />
            <MapSec />
        </main>
    )
};

export default Main