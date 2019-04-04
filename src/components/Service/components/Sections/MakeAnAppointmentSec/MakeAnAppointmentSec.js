import React, {Component} from 'react'

import backgroundImage from '../../../../../img/backgrounds/bg_all-brands.jpg'

import './IntroSec.less'

class MakeAnAppointmentSec extends Component {

    constructor(props) {
        super(props)
        props.data ? this.data = props.data : this.data = false
        props.backgroundImage ? this.backgroundImage = props.backgroundImage : this.backgroundImage = backgroundImage
        this.title = props.title
        this.lead = props.lead

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
                <div className="sec-intro__back" style={{backgroundImage: `url(${this.backgroundImage}`}} />
                <div className="sec-intro__front">
                    <div className="container">
                        <h1 className="sec-intro__title">{ this.title }</h1>
                        <div className="sec-intro__lead">{ this.lead  }</div>

                        { this.props.data &&
                            <ul className="sec-intro__features">
                                { this.renderFeatures(this.data) }
                            </ul>
                        }
                        { this.props.children &&
                            this.props.children
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default MakeAnAppointmentSec