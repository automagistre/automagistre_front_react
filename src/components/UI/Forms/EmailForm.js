import React, {Component} from 'react'
import './forms.less'

class EmailForm extends Component{

    render() {
        const cls = "form " + this.props.className
        return (
            <form className={cls}>
                <h3 className="form__title">Мы готовы помочь</h3>
                <div className="form__lead">Если у вас остались вопросы, задайте их прямо сейчас:
                </div>
                <div className="form__line">
                    <input className="form__input" type="text" placeholder="Имя" />
                </div>
                <div className="form__line">
                    <input className="form__input" type="text" placeholder="E-mail" />
                </div>
                <div className="form__line">
                    <textarea className="form__text" placeholder="Ваш вопрос" />
                </div>
                <div className="form__line">
                    <button className="btn btn_arrow-rt">Заказать</button>
                </div>
            </form>
        )
    }
}

export default EmailForm