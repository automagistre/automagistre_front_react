import React, {Component} from 'react'
import {data} from '../../../../../vars/texts/sec_service/sec_sevice'
import './ServicesSec.css'

import serviceImg1 from '../../../../../images/sec-services/service_01.png'
import serviceImg2 from '../../../../../images/sec-services/service_02.png'
import serviceImg3 from '../../../../../images/sec-services/service_03.png'
import serviceImg4 from '../../../../../images/sec-services/service_04.png'

class ServicesSec extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeBlock: 0,
        }
        this.data = data

    }

    changeBlockHandle = (e, key) => {
        this.setState({
            activeBlock: key
        })
    }

    renderBlock = (value, key, active=false) => {
        let cls = "sec-services__kind js-services-kind"
        if (active){
            cls += " is-active"
        }
        return (
            <li className={cls} key={key}>
                <h4 className="sec-services__kind-title">
                    <a className="sec-services__kind-btn js-services-btn" onClick={e => this.changeBlockHandle(e, key)}>{value.title}</a>
                </h4>

                <div className="sec-services__kind-text">
                    {value.note}
                </div>
                <a className="btn btn_arrow-rt sec-services__kind-more" href="#">Подробнее</a>
            </li>
        )

    }

    renderBlocks = data => {
        let key = this.state.activeBlock
        let res = []
        let len = data.length

        res.push(this.renderBlock(data[key], key, true))
        for (let i = key + 1; i < key + len; i++) {
            res.push(this.renderBlock(data[i % len], i % len))
        }
        return res
    }


    images = [serviceImg1, serviceImg2, serviceImg3, serviceImg4];

    render() {
        return(
            <section className="sec-services js-sec-scroll">
                <div className="sec-services__front">
                    <div className="container">
                        <h2 className="sec-services__title">Наши услуги</h2>
                        <div className="sec-services__row">
                            <div className="sec-services__col-lt">
                                <div className="sec-services__count" id="services-count">{this.data[this.state.activeBlock].num}</div>
                                <div className="sec-services__picts">
                                    <img className="sec-services__img js-services-img is-active"
                                         src={this.images[this.state.activeBlock]} alt="Компьютерная диагностика авто"/>
                                </div>
                            </div>
                            <div className="sec-services__col-rt">
                                <ul className="sec-services__menu" id="services-menu">
                                    {this.renderBlocks(this.data)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default ServicesSec