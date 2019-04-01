import React, {Component} from 'react'
import './forms.less'
import {confidentialCheckBox} from "../../../vars/company";


class SubscribeForm extends Component{
    state = {
        checked: true
    }

    render() {
        const cls = this.props.className
        return (
            <form className={cls}>
                <input className="subscribe__name" type="text" placeholder="Имя" />
                <input className="subscribe__numb js-phone-mask" type="text" placeholder="Телефон"/>
                <input className="subscribe__date js-datepicker-limited" type="text"
                       readOnly placeholder="Выберите дату" /><div className="subscribe__agree">
                <label className="subscribe__check">
                    <input type="checkbox" checked={this.state.checked} />
                    <span onClick={() => this.setState({checked:!this.state.checked})}/>
                </label>
                <div className="subscribe__hint">
                    <span>{confidentialCheckBox}</span>
                </div>
            </div><a className="btn subscribe__btn" role="button">Записаться
                <i className="btn__icon-rt icon_arrow-rt" /></a>
            </form>
        )
    }
}

export default SubscribeForm