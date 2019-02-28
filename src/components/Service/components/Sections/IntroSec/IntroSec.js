import React from 'react'
import '../block_panel.css'
import './IntroSec.css'
import {data} from '../../../../../vars/texts/sec_data/sec_intro_data'
import IntroBlock from "./IntroBlock/IntroBlock";

const IntroSec = () => {
    return (
        <section className="sec-intro has-panels js-sec-scroll">
            <div className="sec-intro__panels">
                <IntroBlock data={data.testing} />
                <IntroBlock data={data.service} />
                <IntroBlock data={data.repair}  />
            </div>
        </section>
    )
};

export default IntroSec