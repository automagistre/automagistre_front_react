import React from 'react'

import './CompDiagSelect.less'

import imgLt from '../../../img/sec-features/proposal-lt.png'
import imgRt from '../../../img/sec-features/proposal-rt.png'
import imgBtm from '../../../img/sec-features/proposal-btm.png'
import {data} from '../../../vars/texts/UI/comp_diag_select'

const CompDiagSelect = () => {

    return (
        <div className="proposal">
            <div className="proposal__hint">Стоимость: {data.price} Р <i className="icon-rub" /></div>
            <h3 className="proposal__title">Так же, рекомендуем компьютерную диагностику</h3>
            <div className="proposal__lead">{data.lead()}</div>
            <div className="proposal__note">{data.note}</div>
            <div className="proposal__more">
                <a className="btn" href="#">Подробнее об услуге</a>
            </div>
            <img className="proposal__img proposal__img-lt"
                 src={imgLt}
                 alt="Бесплатная диагностика" />
            <img className="proposal__img proposal__img-rt"
                 src={imgRt}
                 alt="Бесплатная диагностика" />
            <img className="proposal__img proposal__img-btm"
                 src={imgBtm}
                 alt="Бесплатная диагностика" />
        </div>
    )
}

export default CompDiagSelect