import React from 'react'

import backgroundImg from '../../../../../img/backgrounds/bg_sec-happen_02.jpg'
import Facts from "../Facts/Facts";

import './ExperienceSec.less'

const ExperienceSec = () => {
    return (
        <section className="sec-experience">
            <div className="sec-experience__back"
                 style={{backgroundImage: `url(${backgroundImg})`}} />
            <div className="sec-experience__front">
                <div className="container">
                    <h2 className="sec-experience__title">Доверьте диагностику профессионалам</h2>
                    <Facts theme="sec-experience__facts" />
                </div>
            </div>
        </section>
    )
}

export default ExperienceSec