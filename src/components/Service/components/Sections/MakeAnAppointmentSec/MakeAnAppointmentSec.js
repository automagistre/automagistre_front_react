import React, {Component} from 'react'
import './IntroSec.less'
import backgroundImage from '../../../../../img/backgrounds/bg_all-brands.jpg'
import SubscribeForm from "../../../../UI/Forms/SubscribeForm";
import {data} from '../../../../../vars/texts/sec_data/sec_make_anppointment'

class MakeAnAppointmentSec extends Component {

    constructor(props) {
        super(props)
        if (props.data) {
            this.data = props.data
        }
        else {
            this.data = data
        }
    }

    renderFeatures = data => data.map((value, key) => {
        return (
            <li className="feature sec-intro__feature" key={key}>
                <i className={"feature__icon icon-f_" + value.icon} />
                <h3 className="feature__title">{value.title}</h3>
                <div className="feature__note">{value.note}</div>
            </li>
        )
    })

    render() {
        return (
            <section className="sec-intro">
                <div className="sec-intro__back" style={{backgroundImage: `url(${backgroundImage}`}} />
                <div className="sec-intro__front">
                    <div className="container">
                        <h1 className="sec-intro__title">АВТОСЕРВИС ЯПОНСКИХ И КОРЕЙСКИХ <br /> МАШИН В МОСКВе</h1>
                        <div className="sec-intro__lead">ЗАПИШИТЕСЬ НА БЕСПЛАТНУЮ ДИАГНОСТИКУ <br /> И МЫ РЕШИМ ВАШУ
                            ПРОБЛЕМУ
                        </div>
                        <SubscribeForm className="subscribe sec-intro__form" />
                        <ul className="sec-intro__features">
                            { this.renderFeatures(this.data) }
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default MakeAnAppointmentSec