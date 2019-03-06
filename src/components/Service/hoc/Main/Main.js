import React from 'react'
import './Main.css'
import IntroSec from "../../components/Sections/IntroSec/IntroSec";
import FeaturesSec from "../../components/Sections/FeaturesSec/FeaturesSec";
import GallerySec from "../../components/Sections/GallerySec/GallerySec";
import ServicesSec from "../../components/Sections/ServicesSec/ServicesSec";
import WorkSec from "../../components/Sections/WorkSec/WorkSec";

const Main = () => {
    return (
        <main className="site-main">
            <IntroSec />
            <FeaturesSec />
            <GallerySec />
            <ServicesSec />
            <WorkSec/>
        </main>
    )
};

export default Main