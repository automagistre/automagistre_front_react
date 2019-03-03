import React from 'react'
import '../block_panel.css'
import './FeaturesSec.css'
import {data} from '../../../../../vars/texts/sec_data/sec_features_data'

import ltImgMim from  '../../../../../img/sec-features/lt-img_min.png';
import ltImgBig from  '../../../../../img/sec-features/lt-img_big.png';
import ltImgBlur from  '../../../../../img/sec-features/lt-img_blur.png';
import rtImgMim from  '../../../../../img/sec-features/rt-img_min.png';
import rtImgBig from  '../../../../../img/sec-features/rt-img_big.png';
import rtImgBlur from  '../../../../../img/sec-features/rt-img_blur.png';


class FeaturesSec extends React.Component{
    renderFutureItems = items => items.map((value, key) => {
        const cls = "feature__icon feature__icon icon-f_" + value.img;
        return (
            <li className="feature sec-features__item" key={key}>
                <i className={cls} />
                <h3 className="feature__title">{value.title}</h3>
                <div className="feature__note">{value.note}</div>
            </li>
        )
    });

    render() {
        return (
            <section className="sec-features js-sec-scroll">
                <div className="sec-features__back" id="sec-features-back">
                    <div className="sec-features__parr-lt">
                        <img className="sec-features__parr-img sec-features__lt-img_min"
                             src={ltImgMim} alt="Авторемонт" />
                             <img className="sec-features__parr-img sec-features__lt-img_big" src={ltImgBig} alt="Авторемонт" />
                             <img className="sec-features__parr-img sec-features__lt-img_blur"
                                  src={ltImgBlur} alt="Авторемонт" />
                    </div>
                    <div className="sec-features__parr-rt">
                        <img className="sec-features__parr-img sec-features__rt-img_min"
                             src={rtImgMim} alt="Авторемонт" />
                             <img className="sec-features__parr-img sec-features__rt-img_big"
                                  src={rtImgBig} alt="Авторемонт" />
                                  <img className="sec-features__parr-img sec-features__rt-img_blur"
                                       src={rtImgBlur} alt="Авторемонт" />
                    </div>
                </div>
                <div className="sec-features__front">
                    <div className="container">
                        <ul className="sec-features__list">
                            { this.renderFutureItems(data) }
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default  FeaturesSec