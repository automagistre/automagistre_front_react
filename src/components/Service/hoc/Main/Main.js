import React from 'react'
import './Main.css'
import IntroSec from "../../components/Sections/IntroSec/IntroSec";
import FeaturesSec from "../../components/Sections/FeaturesSec/FeaturesSec";
import GallerySec from "../../components/Sections/GallerySec/GallerySec";

const Main = () => {
    return (
        <main className="site-main">
            <IntroSec />
            <FeaturesSec />
            <GallerySec />
        </main>
    )
};

export default Main