import React, {Component} from 'react'
import './FaqSec.less'
import {data} from '../../../../../vars/texts/sec_data/sec_faq'
import EmailForm from "../../../../UI/Forms/EmailForm";
import woman from '../../../../../img/sec-faq/woman.png'

class FaqSec extends Component {
    data = data

    state = {
        activeFaq: 0
    }

    renderNav = data => data.map((value, key) => {
        let cls = "sec-faq__tabs-btn"
        if (key === this.state.activeFaq){
            cls += " is-active"
        }
        return (
                <a className={cls} role="button" key={key}
                   onClick={() => this.setState({activeFaq:key})}
                >
                    {value.title}
                </a>
            )
    })
    renderFaqBody = data => data.map((value, key) => {
        let cls = "sec-faq__tabs-item js-tabs-item"
        if (key === this.state.activeFaq) {
            cls += " is-active"
        }
        return (
            <div className={cls} id="faq-tab-01" key={key}>
                <div className="sec-faq__tabs-text js-scroll-y">
                    {value.note()}
                </div>
            </div>
        )
    })

    render() {
        return (
            <section className="sec-faq js-sec-scroll">
                <div className="sec-faq__back"/>
                <div className="sec-faq__front">
                    <div className="container sec-faq__container">
                        <h2 className="sec-faq__title">Часто задаваемые вопросы</h2>
                        <div className="sec-faq__row">
                            <div className="sec-faq__col-lt">
                                <div className="sec-faq__tabs">
                                    <nav className="sec-faq__tabs-head" id="sec-faq-tabs">
                                        {this.renderNav(this.data)}
                                    </nav>
                                    <div className="sec-faq__tabs-body">
                                        {this.renderFaqBody(this.data)}
                                    </div>
                                </div>
                            </div>
                            <div className="sec-faq__col-rt">
                                <EmailForm className="sec-faq__form"/>
                            </div>
                        </div>
                        <img className="sec-faq__girl" src={woman} alt="Мы готовы помочь" />
                    </div>
                </div>
            </section>
        )
    }
}

export default FaqSec