import React, {Component} from 'react'
import CostingAnimation from "./CostingAnimation"
import Slider from 'react-slick'
import Calendar from 'react-calendar'
import './CostingBlock.less'
import './CostingSec.less'
import is from 'is_js'
import MaskedInput from 'react-text-mask'

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
            works: [
                {
                    id: 1,
                    name:'Замена масла',
                    price: 500,
                    repeat: 15,
                    recommendation: false,
                    parts: [
                        {
                            id:4,
                            name: 'Масло ДВС',
                            manufacture: 'Nissan',
                            count: 4.5,
                            price: 600
                        },
                        {
                            id:5,
                            name: 'Фильтр',
                            manufacture: 'Nissan',
                            count: 1,
                            price: 400
                        },
                    ]
                },
                {
                    id: 2,
                    name:'Замена масла АКПП',
                    price: 500,
                    repeat: 60,
                    recommendation: false,
                    parts: [
                        {
                            id:4,
                            name: 'Масло ДВС',
                            manufacture: 'Nissan',
                            count: 4.5,
                            price: 600
                        },
                        {
                            id:7,
                            name: 'Фильтр',
                            manufacture: 'Nissan',
                            count: 1,
                            price: 400
                        },
                    ]
                },
                {
                    id: 3,
                    name:'Диагностика',
                    price: 500,
                    repeat: 45,
                    recommendation: false,
                    parts: [ ]
                },
                {
                    id: 8,
                    name:'Замена масла',
                    price: 500,
                    repeat: 60,
                    recommendation: true,
                    parts: [
                        {
                            id:4,
                            name: 'Масло ДВС',
                            manufacture: 'Nissan',
                            count: 4.5,
                            price: 600
                        },
                        {
                            id:5,
                            name: 'Фильтр',
                            manufacture: 'Nissan',
                            count: 1,
                            price: 400
                        },
                    ]
                }
            ],
        },
        {
            id:100501,
            name: '7.0T MT 2WD',
            mileageRepeat: 10,
            works: [
                {
                    id: 1,
                    name:'Замена масла',
                    price: 500,
                    repeat: 10,
                    recommendation: false,
                    parts: [
                        {
                            id:4,
                            name: 'Масло ДВС',
                            manufacture: 'Nissan',
                            count: 4.5,
                            price: 600
                        },
                        {
                            id:5,
                            name: 'Фильтр',
                            manufacture: 'Nissan',
                            count: 1,
                            price: 405
                        },
                    ]
                },
            ]
        }
    ]
}


const CostingWorksListRender = props => {
    return (
        <ul className="cg-price__list">
            {props.currentEquipment.works.map((work, key) => {
                let isWorkSelected
                if (props.recommendation === work.recommendation && props.currentMileage % work.repeat === 0){
                    props.selected.has(work.id) ? isWorkSelected = true : isWorkSelected = false
                    return (
                        <li className="cg-price__item" key={key}>
                            <div className="cg-price__line">
                                <label className="cg-price__check">
                                    <input type="checkbox"
                                           checked={isWorkSelected}
                                           onChange={() => props.toggleWork(work.id)}
                                    />
                                    <span>{work.name}</span>
                                </label>
                                <div className="cg-price__cost">
                                    {work.price}
                                    <i className="icon-rub"/>
                                </div>
                            </div>
                            <ul className="cg-price__list">
                                {work.parts.map((part, key)=> {
                                    let isPartSelected
                                    if (isWorkSelected){
                                        props.selected.get(work.id).has(part.id) ? isPartSelected = true : isPartSelected = false
                                    } else {
                                        isPartSelected = false
                                    }
                                    return (
                                        <li className="cg-price__item" key={key}>
                                            <div className="cg-price__line">
                                                <label className="cg-price__check">
                                                    <input type="checkbox"
                                                           checked={isPartSelected}
                                                           onChange={() => props.togglePart(work.id, part.id)}
                                                    />
                                                    <span>{part.name}</span>
                                                </label>
                                                <div className="cg-price__cost">
                                                    {part.price}
                                                    <i className="icon-rub" />
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                }
                return (<React.Fragment key={key}/>)
            })}
        </ul>
    )
}

class CostingStep01 extends Component {
    state = {
        isValid: false,
        isTouched: false,
    }

    nextStep = () => {
        this.setState({isTouched: true})
        if (this.state.isValid) {
            this.props.setStep(1, 2)
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.car.equipments.find(equipment => equipment.id === nextProps.currentEquipment.id).mileageRepeat <= nextProps.currentMileage){
            this.setState({isTouched: true, isValid: true})
        } else {
            this.setState({isTouched: true, isValid: false})
        }
    }

    render() {
        let mileageRepeat, currentMileage, style
        const mileageLine = []

        mileageRepeat = this.props.currentEquipment.mileageRepeat
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
                                                           checked={equipment.id === this.props.currentEquipment.id}
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
                                <h4 className="costing__title cg-price__title">
                                    Регламетное техническое обслуживание:
                                </h4>
                                <div className="cg-price__body js-scroll-y">
                                    <CostingWorksListRender {...props}  recommendation={false}/>
                                </div>
                            </div>
                            <div className="cg-total">
                                <div className="cg-total__note">Стоимость обязательного ТО:</div>
                                <div className="cg-total__cost">{props.worksCost} ₽</div>
                            </div>
                        </div>

                        <div className="costing__col-half">
                            <div className="cg-price costing__unit">
                                <h4 className="costing__title cg-price__title">Дополнительно
                                    рекомендуем:</h4>
                                <div className="cg-price__body js-scroll-y">
                                    <CostingWorksListRender {...props} recommendation={true} />
                                </div>
                            </div>
                            <div className="cg-total">
                                <div className="cg-total__note">Итого с учетом доп. услуг:</div>
                                <div className="cg-total__cost">{props.worksCost + props.recommendationsCost} ₽</div>
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

class CostingStep03 extends Component {
    state = {
        isFormValid: false,
        formControls: {
            name: {
                value: '',
                pic: 'name',
                placeholder: 'Ваше имя и отчество',
                mask:[/\w/],
                isTouched:false,
                isValid: false,
                validation: {
                    required:true,
                }
            },
            email:{
                value:'',
                valid:false,
                pic: 'chat',
                placeholder: 'e-mail',
                // mask:[],
                isTouched:false,
                isValid: false,
                validation: {
                    required:true,
                    email: true
                }
            },
            phone:{
                value: '',
                pic: 'phon',
                placeholder: 'Телефон',
                mask: ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
                isTouched:false,
                isValid: false,
                validation: {
                    required:true,
                    phone: true
                }
            },
            license:{
                value: true,
                isValid: true,
                validation: {
                    checked: true,
                }
            }

        }
    }
    validateControl = (value, validation) => {
        let isValid = true
        console.log(value, validation)
        if (validation.required) {
            isValid = value.trim() !== "" && isValid
        }
        if (validation.email) {
            isValid = is.email(value) && isValid
        }
        if (validation.phone) {
            isValid = value.indexOf('_') < 0 && isValid
        }
        if (validation.checked){
            isValid = value === validation.checked
        }
        return isValid
    }
    validateForm = (controls) => {
        let isValid = true
        for (let control in controls) {
            isValid = isValid && controls[control].isValid
        }
        return isValid
    }

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}
        control.isTouched = true
        controlName === 'license' ? control.value = event.target.checked : control.value = event.target.value
        if (controlName === 'name')
            control.value = control.value.replace(/(?:^|\s)\S/g, l => l.toUpperCase())
        control.isValid = this.validateControl(control.value, control.validation)
        formControls[controlName] = control
        let isFormValid = this.validateForm(formControls)
        this.setState({formControls, isFormValid})
    }
    completeForm = () => {
        if (this.state.isFormValid)
            this.props.setStep(3, 4)
    }

    render() {
        let date = `${this.props.date.getDate('dd')}.${this.props.date.getMonth() + 1}.${this.props.date.getFullYear()} `
        let nextCls
        this.state.isFormValid ? nextCls = '' : nextCls = 'btn_gray'
        return (
            <div className="costing__step costing__step_03" id="costing-step_03">
                <div className="container">
                    <div className="costing__step-wrap">
                        <h4 className="costing__step-title">Теперь вы можете легко оформить заявку:</h4>
                        <div className="costing__row">
                            <div className="costing__col-half">
                                <div className="cg-order costing__unit">
                                    <div className="cg-order__head">
                                        <h4 className="costing__title cg-order__title">
                                            Выберите удобную дату:
                                        </h4>
                                        <div className="cg-order__date" id="cg-order-date">
                                            {date}
                                        </div>
                                    </div>
                                    <div className="cg-order__body">
                                        <Calendar className="cg-calendar"
                                                  minDate={new Date()}
                                                  locale="ru-RU"
                                                  prev2Label={null}
                                                  next2Label={null}
                                                  onChange={(date) => this.props.changeDateHandler(date)}
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="costing__col-half">
                                <div className="cg-order costing__unit">
                                    <div className="cg-order__head cg-order__head_red">
                                        <h4 className="costing__title cg-order__title">Итого:</h4>
                                        <div className="cg-order__cost">{ this.props.totalCost } ₽</div>
                                    </div>
                                    <div className="cg-order__body">
                                        {Object.keys(this.state.formControls).map((controlName, key) => {
                                            if (controlName === 'license')
                                                return null
                                            const control = this.state.formControls[controlName]
                                            if (controlName === 'phone') {
                                                return (
                                                    <div className={`cg-order__line cg-order__line_${control.pic}`}
                                                         key={controlName+key}>
                                                        <MaskedInput className="cg-order__input"
                                                                     mask={control.mask}
                                                                     guide={true}
                                                                     keepCharPositions={true}
                                                                     showMask={true}
                                                                     type="text"
                                                                     placeholder={control.placeholder}
                                                                     data-valid={control.isValid || !control.isTouched}
                                                                     onChange={e => this.onChangeHandler(e, controlName)}
                                                        />
                                                    </div>
                                                )
                                            }
                                            return (
                                                <div className={`cg-order__line cg-order__line_${control.pic}`} key={controlName+key}>
                                                    <input className="cg-order__input"
                                                           type="text"
                                                           placeholder={control.placeholder}
                                                           data-valid={control.isValid || !control.isTouched}
                                                           onChange={e => this.onChangeHandler(e, controlName)}/>
                                                </div>
                                            )
                                        })}
                                        <div className="cg-order__line">
                                            <label className="cg-order__check">
                                                <input type="checkbox"
                                                       checked={this.state.formControls.license.value}
                                                       onChange={
                                                           e => this.onChangeHandler(e, 'license')
                                                       }
                                                />
                                                <span>Я принимаю
                                                    <a href="#" target="_blank">условия передачи информации</a>
                                                      и согласен с
                                                    <a href="#" target="_blank">правилами оферты</a>
                                            </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="costing__step-btm costing__step-btm_sb">
                        <a className="btn costing__btn" onClick={() => this.props.setStep(3, 2)}>Назад</a>
                        <a className={"btn costing__btn " + nextCls} onClick={this.completeForm}>
                            Записаться на обслуживание
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

class CostingSec extends Component {

    constructor (props) {
        super(props)
        const currStep = {
            cls:'step_01',
            num: 0
        }
        const currentMileage = 0
        const currentEquipment = model.equipments[0]
        const mileageRepeat = model.equipments[0].mileageRepeat
        const selected = this.generateSelects(model.equipments[0], 1)
        this.state = {
            model,
            currentMileage,
            currentEquipment,
            mileageRepeat,
            currStep,
            selected,
            worksCost: 0,
            recommendationsCost: 0,
            date: 0
        }
    }
    componentWillMount() {
        const [worksCost, recommendationsCost] = this.calculateCost(this.state.selected)
        const date = new Date()
        this.setState({worksCost, recommendationsCost, date})
    }

    generateSelects = (equipment, repeat) => {
        const selected = new Map()
        for (let i in equipment.works) {
            if(equipment.works.hasOwnProperty(i)) {
                if (!equipment.works[i].recommendation && repeat % equipment.works[i].repeat === 0) {
                    let id = equipment.works[i].id
                    let parts = new Set()
                    for(let j in equipment.works[i].parts) {
                        if (equipment.works[i].parts.hasOwnProperty(j)) {
                            parts.add(equipment.works[i].parts[j].id)
                        }
                    }
                    selected.set(id, parts)
                }
            }
        }
        return selected
    }
    setCurrentMileageHandler = (currentMileage, mileageRepeat) => {
        let selected = this.generateSelects(this.state.currentEquipment, currentMileage)
        const [worksCost, recommendationsCost] = this.calculateCost(selected)
        this.setState({currentMileage, mileageRepeat, selected, worksCost, recommendationsCost})

    }
    togglePart = (work, id) => {
        const selected = this.state.selected
        let parts = selected.get(work)
        if (parts) {
            parts.has(id) ? parts.delete(id) : parts.add(id)
            selected.set(work, parts)
            const [worksCost, recommendationsCost] = this.calculateCost(selected)
            this.setState({selected, worksCost, recommendationsCost})
        }
    }
    toggleWork = (id) => {
        const selected = this.state.selected
        if (selected.has(id)) {
            selected.delete(id)
        } else {
            const parts = new Set()
            const partsForSelect = this.state.currentEquipment.works.find(w => w.id === id).parts
            if (partsForSelect) {
                for (let i in partsForSelect) {
                    if (partsForSelect.hasOwnProperty(i)){
                        parts.add(partsForSelect[i].id)
                    }
                }
                selected.set(id, parts)
            }
        }
        const [worksCost, recommendationsCost] = this.calculateCost(selected)
        this.setState({selected,worksCost, recommendationsCost})
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
            const selected = this.generateSelects(equipment, currentMileage)
            const [worksCost, recommendationsCost] = this.calculateCost(selected, equipment)
            return {
                currentEquipment:equipment,
                currentMileage,
                mileageRepeat: equipment.mileageRepeat,
                selected,
                worksCost, recommendationsCost
            }
        }
    )}
    changeDateHandler = date => {
        this.setState({date})
    }
    calculateCost = (selected, equipment=this.state.currentEquipment) => {
        let worksCost, recommendationsCost
        worksCost = recommendationsCost = 0
        for(let work of selected.keys()) {
            let selectedWork = equipment.works.find(w => w.id === work)
            let partsCost = 0
            for (let part of selected.get(work).values()) {
                let selectedPart = selectedWork.parts.find(p => p.id === part)

                partsCost += selectedPart.price
            }
            if (selectedWork.recommendation) {
                recommendationsCost += selectedWork.price + partsCost
            } else {
                worksCost += selectedWork.price + partsCost
            }
        }
        return [worksCost, recommendationsCost]
    }
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
                            {/*<CostingStep01 currentMileage={this.state.currentMileage}*/}
                            {/*               car={this.state.model}*/}
                            {/*               currentEquipment={this.state.currentEquipment}*/}
                            {/*               setEquipment={this.setEquipment}*/}
                            {/*               setStep={this.setStep}*/}
                            {/*               setCurrentMileageHandler={this.setCurrentMileageHandler}*/}
                            {/*/>*/}
                            {/*<CostingStep02 currentEquipment={this.state.currentEquipment}*/}
                            {/*               currentMileage={this.state.currentMileage}*/}
                            {/*               mileageRepeat={this.state.mileageRepeat}*/}
                            {/*               selected={this.state.selected}*/}
                            {/*               setStep={this.setStep}*/}
                            {/*               togglePart={this.togglePart}*/}
                            {/*               toggleWork={this.toggleWork}*/}
                            {/*               worksCost={this.state.worksCost}*/}
                            {/*               recommendationsCost={this.state.recommendationsCost}*/}

                            {/*/>*/}
                            <CostingStep03 setStep={this.setStep}
                                           totalCost={this.state.worksCost + this.state.recommendationsCost}
                                           date={this.state.date}
                                           changeDateHandler={this.changeDateHandler}

                            />
                            <div className="costing__step costing__step_04" id="costing-step_04">
                                <div className="container">
                                    <div className="costing__step-wrap">
                                        <div className="cg-status">
                                            <i className="cg-status__icon"/>
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
                                                    <span className="cg-status__data-val"/>
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