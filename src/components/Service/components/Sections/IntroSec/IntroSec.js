import React from 'react'
import '../block_panel.less'

import {data} from '../../../../../vars/texts/sec_data/sec_intro'



const IntroBlock = (props) => {
    const cls = "panel sec-intro__panel sec-intro__" +props.data.cls;
    return (
        <div className={cls}>
            <div className="panel__back" />
            <div className="panel__info">
                <div className="panel__num">{props.data.num}</div>
                <h2 className="panel__title">{props.data.title}</h2>
                <div className="panel__note">
                    {props.data.note}
                </div>
                <div className="panel__more">
                    <a className="panel__btn panel__btn_red" href="#">Подробнее</a>
                </div>
            </div>
        </div>
    )
};


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