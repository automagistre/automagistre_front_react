import React, {Component} from 'react'
import './CostingSec.less'
import './CostingBlock.less'
import CostingAnimation from "./CostingAnimation";
import Slider from 'react-slick'


const model = {
    id: 1,
    manufacture: 'Nissan',
    name: 'Juke',
    model: 'J10',
    startYear: 2001,
    stopYear: 2005,
    img: '/images/costing/altima.jpg',
    equipments: [
        {
            id:100500,
            name: '1,5/1,8 MT 2WD',
            mileageRepeat: 15,
            works: []
        },
        {
            id:100501,
            name: '7.0T MT 2WD',
            mileageRepeat: 10,
            works: []
        }
    ]
}


class CostingStep01 extends Component {
    state = {
        isValid: false,
        isTouched: false,
    }

    nextStep = () => {
        this.setState({isTouched: true})
        if (this.state.isValid) {
            this.props.changeStep(1, 2)
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.car.equipments.find(equipment => equipment.id === nextProps.currentEquipment).mileageRepeat <= nextProps.currentMileage){
            this.setState({isTouched: true, isValid: true})
        } else {
            this.setState({isTouched: true, isValid: false})
        }
    }

    render() {
        let mileageRepeat, currentMileage, style
        const mileageLine = []

        mileageRepeat = this.props.car.equipments.find(equipment => equipment.id === this.props.currentEquipment).mileageRepeat
        currentMileage = this.props.currentMileage

        for (let i = 1; i < 20; i++) {
            mileageLine.push(i * mileageRepeat)
        }
        if (!this.state.isValid && this.state.isTouched) {
            style = {boxShadow: "0 20px 50px -30px red"}
        }

        return (
            <div className="costing__step costing__step_01">
                <div className="container">
                    <div className="costing__step-wrap">
                        <div className="costing__row">
                            <div className="costing__col-car">
                                <div className="cg-car costing__unit">
                                    <div className="cg-car__name">{this.props.car.name}</div>
                                    <div className="cg-car__pict">
                                        <img className="cg-car__img"
                                             src={this.props.car.img}
                                             alt={this.props.car.name}
                                        />
                                    </div>
                                    <ul className="cg-car__data">
                                        <li>{this.props.equipment}</li>
                                        <li>{`${this.props.car.startYear} - ${this.props.car.stopYear}`}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="costing__col-set">
                                <div className="cg-set costing__unit">
                                    <h4 className="costing__title cg-set__title">Выберите комплектацию:</h4>
                                    <div className="cg-set__list">
                                        {this.props.car.equipments.map((equipment, key) => {
                                            return (
                                                <label className="cg-set__radio" key={key}>
                                                    <input type="radio"
                                                           checked={equipment.id === this.props.currentEquipment}
                                                           readOnly
                                                    />
                                                    <span onClick={() => this.props.setEquipment(equipment)}>
                                                    {equipment.name}
                                                </span>
                                                </label>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="costing__row">
                            <div className="costing__col-run">
                                <div className="cg-run costing__unit" style={style}>
                                    <h4 className="costing__title cg-run__title">Какой у вас пробег?</h4>
                                    <ul className="cg-run__line">
                                        {mileageLine.map((value, key) => {
                                            let cls = "cg-run__step"
                                            if (value < currentMileage) {
                                                cls += " is-before"
                                            }
                                            if (value === currentMileage) {
                                                cls += " is-active"
                                            }
                                            return (
                                                <li className={cls} key={key}
                                                    onClick={() => this.props.setCurrentMileageHandler(value, currentMileage)}>
                                                    {value}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <input className="cg-run__info" id="costing-run-info" type="hidden"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="costing__step-btm costing__step-btm_rt">
                        <a className="btn costing__btn" onClick={this.nextStep}>Далее</a>
                    </div>
                </div>
            </div>
        )
    }
}

const CostingStep02 = props => {
    return (
        <div className="costing__step costing__step_02" id="costing-step_02">
            <div className="container">
                <div className="costing__step-wrap">
                    <div className="costing__row">
                        <div className="costing__col-half">
                            <div className="cg-price costing__unit">
                                <h4 className="costing__title cg-price__title">Регламетное
                                    техническое обслуживание:</h4>
                                <div className="cg-price__body js-scroll-y">
                                    <ul className="cg-price__list">
                                        <li className="cg-price__item">
                                            <div className="cg-price__line">
                                                <label className="cg-price__check"><input
                                                    type="checkbox"/><span>Компьютерная диагностика</span></label>
                                                <div className="cg-price__cost">600 <i
                                                    className="icon-rub">a</i></div>
                                            </div>
                                        </li>
                                        <li className="cg-price__item">
                                            <div className="cg-price__line">
                                                <label className="cg-price__check"><input
                                                    type="checkbox"/><span>Компьютерная диагностика</span></label>
                                                <div className="cg-price__cost">600 <i
                                                    className="icon-rub">a</i></div>
                                            </div>
                                        </li>
                                        <li className="cg-price__item">
                                            <div className="cg-price__line">
                                                <label className="cg-price__check"><input
                                                    type="checkbox"/><span>Компьютерная диагностика</span></label>
                                                <div className="cg-price__cost">600 <i
                                                    className="icon-rub">a</i></div>
                                            </div>
                                            <ul className="cg-price__list">
                                                <li className="cg-price__item">
                                                    <div className="cg-price__line">
                                                        <label className="cg-price__check"><input
                                                            type="checkbox"/><span>Компьютерная диагностика</span></label>
                                                        <div className="cg-price__cost">600 <i
                                                            className="icon-rub">a</i></div>
                                                    </div>
                                                </li>
                                                <li className="cg-price__item">
                                                    <div className="cg-price__line">
                                                        <label className="cg-price__check"><input
                                                            type="checkbox"/><span>Компьютерная диагностика</span></label>
                                                        <div className="cg-price__cost">600 <i
                                                            className="icon-rub">a</i></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="cg-price__item">
                                            <div className="cg-price__line">
                                                <label className="cg-price__check"><input
                                                    type="checkbox"/><span>Компьютерная диагностика</span></label>
                                                <div className="cg-price__cost">600 <i
                                                    className="icon-rub">a</i></div>
                                            </div>
                                        </li>
                                        <li className="cg-price__item">
                                            <div className="cg-price__line">
                                                <label className="cg-price__check"><input
                                                    type="checkbox"/><span>Компьютерная диагностика</span></label>
                                                <div className="cg-price__cost">600 <i
                                                    className="icon-rub">a</i></div>
                                            </div>
                                            <ul className="cg-price__list">
                                                <li className="cg-price__item">
                                                    <div className="cg-price__line">
                                                        <label className="cg-price__check"><input
                                                            type="checkbox"/><span>Компьютерная диагностика</span></label>
                                                        <div className="cg-price__cost">600 <i
                                                            className="icon-rub">a</i></div>
                                                    </div>
                                                </li>
                                                <li className="cg-price__item">
                                                    <div className="cg-price__line">
                                                        <label className="cg-price__check"><input
                                                            type="checkbox"/><span>Компьютерная диагностика</span></label>
                                                        <div className="cg-price__cost">600 <i
                                                            className="icon-rub">a</i></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cg-total">
                                <div className="cg-total__note">Стоимость обязательного ТО:</div>
                                <div className="cg-total__cost">15 200 ₽</div>
                            </div>
                        </div>

                        <div className="costing__col-half">
                            <div className="cg-price costing__unit">
                                <h4 className="costing__title cg-price__title">Дополнительно
                                    рекомендуем:</h4>
                                <div className="cg-price__body js-scroll-y">
                                    <ul className="cg-price__list">
                                        <li className="cg-price__item">
                                            <div className="cg-price__line">
                                                <label className="cg-price__check"><input
                                                    type="checkbox"/><span>Компьютерная диагностика</span></label>
                                                <div className="cg-price__cost">600 <i
                                                    className="icon-rub">a</i></div>
                                                <div className="cg-price__info"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="cg-price__item">
                                            <div className="cg-price__line">
                                                <label className="cg-price__check"><input
                                                    type="checkbox"/><span>Снятие и установка защиты двигателя</span></label>
                                                <div className="cg-price__cost">200 <i
                                                    className="icon-rub">a</i></div>
                                                <div className="cg-price__info"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="cg-price__item">
                                            <div className="cg-price__line">
                                                <label className="cg-price__check"><input
                                                    type="checkbox"/><span>Замена жидкости сцепления:</span></label>
                                                <div className="cg-price__cost"></div>
                                                <div className="cg-price__info"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                                </div>
                                            </div>
                                            <ul className="cg-price__list">
                                                <li className="cg-price__item">
                                                    <div className="cg-price__line">
                                                        <label className="cg-price__check"><input
                                                            type="checkbox"/><span>Тормозная жидкость (оригинал)</span></label>
                                                        <div className="cg-price__cost">0.5 л -
                                                            250 <i className="icon-rub">a</i></div>
                                                        <div className="cg-price__info"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="cg-price__item">
                                            <div className="cg-price__line">
                                                <label className="cg-price__check"><input
                                                    type="checkbox"/><span>Чистка дроссельной заслонки:</span></label>
                                                <div className="cg-price__cost"></div>
                                                <div className="cg-price__info"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                                </div>
                                            </div>
                                            <ul className="cg-price__list">
                                                <li className="cg-price__item">
                                                    <div className="cg-price__line">
                                                        <label className="cg-price__check"><input
                                                            type="checkbox"/><span>Очиститель</span></label>
                                                        <div className="cg-price__cost">1 л - 300 <i
                                                            className="icon-rub">a</i></div>
                                                        <div className="cg-price__info"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="cg-price__item">
                                            <div className="cg-price__line">
                                                <label className="cg-price__check"><input
                                                    type="checkbox"/><span>Компьютерная диагностика</span></label>
                                                <div className="cg-price__cost">1 700 <i
                                                    className="icon-rub">a</i></div>
                                                <div className="cg-price__info"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                                </div>
                                            </div>
                                            <ul className="cg-price__list">
                                                <li className="cg-price__item">
                                                    <div className="cg-price__line">
                                                        <label className="cg-price__check"><input
                                                            type="checkbox"/><span>Компьютерная диагностика</span></label>
                                                        <div className="cg-price__cost">175 <i
                                                            className="icon-rub">a</i></div>
                                                        <div className="cg-price__info"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="cg-price__item">
                                                    <div className="cg-price__line">
                                                        <label className="cg-price__check"><input
                                                            type="checkbox"/><span>Компьютерная диагностика</span></label>
                                                        <div className="cg-price__cost">97 500 <i
                                                            className="icon-rub">a</i></div>
                                                        <div className="cg-price__info"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cg-total">
                                <div className="cg-total__note">Итого с учетом доп. услуг:</div>
                                <div className="cg-total__cost">15 200 ₽</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="costing__step-btm costing__step-btm_sb">
                    <a className="btn costing__btn" onClick={() => props.setStep(2,1)}>Назад</a>
                    <a className="btn costing__btn" onClick={() => props.setStep(2,3)}>Оформить заявку</a>
                </div>
            </div>
        </div>
    )
}

class CostingSec extends Component {
    state = {
        currStep: {
            cls:'step_01',
            num: 0
        },
        currentMileage: 0,
        mileageRepeat: 0,
        model: model,
        equipment: 100500,

    }
    setCurrentMileageHandler = (currentMileage, mileageRepeat) => {
        this.setState({currentMileage, mileageRepeat})

    }
    setStep = (prev, next) => {
        let cls = 'step_0' + next
        if (next < prev) { cls += '-back'}
        this.setState({currStep: {cls, num: next}})
        this.slider.slickGoTo(next - 1)
    }
    setEquipment = equipment => {
        this.setState((prevState) => {
            let currentMileage = prevState.currentMileage
            if (prevState.currentMileage % equipment.mileageRepeat !== 0 ) {
                currentMileage -= prevState.currentMileage % equipment.mileageRepeat
            }
            return {
                equipment:equipment.id,
                currentMileage,
                mileageRepeat: equipment.mileageRepeat
            }
        }
    )}
    render() {
        const sliderOptions = {
            className: 'costing',
            arrows: false,
            dots: false,
            draggable: false,
            adaptiveHeight: true,
            swipe: false,
            infinite: false,
            speed: 1200,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <section className="sec-costing">
                <div className="container">
                    <h2 className="sec-costing__title">Калькулятор стоимости ТО</h2>
                    <div className="sec-costing__lead">
                        Запишитесь на техническое обслуживание за 60 секунд и пройдите его за 29 минут!
                    </div>
                </div>
                <div className={"sec-costing__stage steps " + this.state.currStep.cls} id="cs-stage">
                    <div className="sec-costing__svg-base">
                        <div className="sec-costing__svg-wrap">
                           <CostingAnimation />
                        </div>
                    </div>
                </div>
                <form className="sec-costing__form">
                    <div className="sec-costing__steps">
                        <Slider ref={slider => (this.slider = slider)} {...sliderOptions} >
                            <CostingStep01 currentMileage={this.state.currentMileage}
                                           car={this.state.model}
                                           currentEquipment={this.state.equipment}
                                           setEquipment={this.setEquipment}
                                           changeStep={this.setStep}
                                           setCurrentMileageHandler={this.setCurrentMileageHandler}
                            />
                            <CostingStep02 setStep={this.setStep}
                            />

                            <div className="costing__step costing__step_03" id="costing-step_03">
                                <div className="container">
                                    <div className="costing__step-wrap">
                                        <h4 className="costing__step-title">Теперь вы можете легко оформить заявку:</h4>
                                        <div className="costing__row">
                                            <div className="costing__col-half">
                                                <div className="cg-order costing__unit">
                                                    <div className="cg-order__head">
                                                        <h4 className="costing__title cg-order__title">Выберите удобную
                                                            дату:</h4>
                                                        <div className="cg-order__date" id="cg-order-date"></div>
                                                    </div>
                                                    <div className="cg-order__body">
                                                        <div className="cg-calendar js-cg-datepicker"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="costing__col-half">
                                                <div className="cg-order costing__unit">
                                                    <div className="cg-order__head cg-order__head_red">
                                                        <h4 className="costing__title cg-order__title">Итого: </h4>
                                                        <div className="cg-order__cost">15 700 ₽</div>
                                                    </div>
                                                    <div className="cg-order__body">
                                                        <div className="cg-order__line cg-order__line_name">
                                                            <input className="cg-order__input" type="text"
                                                                   placeholder="Ваше имя и отчество"/>
                                                        </div>
                                                        <div className="cg-order__line cg-order__line_phon">
                                                            <input className="cg-order__input cg-order__input_phone"
                                                                   type="text" placeholder="Телефон"/>
                                                        </div>
                                                        <div className="cg-order__line cg-order__line_chat">
                                                            <input className="cg-order__input cg-order__input_info"
                                                                   type="text" placeholder="Дополнительная информация"/>
                                                        </div>
                                                        <div className="cg-order__line">
                                                            <label className="cg-order__check">
                                                                <input type="checkbox"/>
                            <span>
                          Я принимаю <a href="#" target="_blank">условия передачи информации</a>
                          и согласен с <a href="#" target="_blank">правилами оферты</a>
                        </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="costing__step-btm costing__step-btm_sb">
                                        <a className="btn costing__btn js-cg-back-step_02" role="button">Назад</a>
                                        <a className="btn costing__btn js-cg-next-step_04" role="button">Записаться на
                                            обслуживание</a>
                                    </div>
                                </div>
                            </div>
                            <div className="costing__step costing__step_04" id="costing-step_04">
                                <div className="container">
                                    <div className="costing__step-wrap">
                                        <div className="cg-status">
                                            <i className="cg-status__icon"></i>
                                            <h4 className="cg-status__title">Ваша заявка успешно отправлена!</h4>
                                            <div className="cg-status__note">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Atque ratione rem ullam velit! At debitis enim eum, laboriosam natus
                                                totam
                                            </div>
                                            <ul className="cg-status__list">
                                                <li className="cg-status__data">
                                                    <span className="cg-status__data-par">Марка авто</span>
                                                    <span className="cg-status__data-val">Altima купе</span>
                                                </li>
                                                <li className="cg-status__data">
                                                    <span className="cg-status__data-par">Дата</span>
                                                    <span className="cg-status__data-val">12.02.2018</span>
                                                </li>
                                                <li className="cg-status__data">
                                                    <span className="cg-status__data-par">Ваше имя и отчество</span>
                                                    <span className="cg-status__data-val"></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </form>
            </section>
        )
    }
}

export default CostingSec