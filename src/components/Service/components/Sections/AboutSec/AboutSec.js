import React from 'react'

import './AboutSec.less'

import compImg from  '../../../../../img/sec-about/about_comp.png'
import robotImg from  '../../../../../img/sec-about/about_robot.png'

import {data} from '../../../../../vars/texts/sec_data/sec_about'

const AboutSec = () => {
    return (
        <section className="sec-about">
            <div className="container">
                <div className="sec-about__row">
                    <div className="sec-about__col-lt">
                        <img className="sec-about__comp" src={compImg} alt="Компьютерная диагностика" />
                    </div>
                    <div className="sec-about__col-rt">
                        <h2 className="sec-about__title">{data.title}</h2>
                        <div className="sec-about__text">
                            { data.text() }
                        </div>
                    </div>
                </div>
                <img className="sec-about__robot" src={robotImg} alt="Компьютерная диагностика" />
            </div>
        </section>
    )
}

export default AboutSec