import React from 'react'
import './TireServiceReminder.less'
import ReminderTirePic from '../../../img/reminder_tire.png'


const TireServiceReminder = () => {
    return (
        <div className="reminder is-open" id="reminder">
            <a className="reminder__close js-reminder-close" role="button" />
            <img className="reminder__img" src={ ReminderTirePic } alt="" />
                <div className="reminder__info">
                    <h5 className="reminder__title">Пора на шиномонтаж</h5>
                    <div className="reminder__note">Управимся за 30 минут <br /> на новом точном оборудовании!</div>
                    <div className="reminder__btns">
                        <a className="btn reminder__btn" href="#">ПЕРЕЙТИ</a>
                    </div>
                </div>
        </div>
    )
};

export default TireServiceReminder