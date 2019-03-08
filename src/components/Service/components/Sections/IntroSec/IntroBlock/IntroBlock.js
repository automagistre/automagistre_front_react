import React from "react"
import "../../block_panel.less"

const IntroBlock = (props) => {
    const cls = "panel sec-intro__panel sec-intro__" +props.data.cls;
    return (
        <div className={cls}>
            <div className="panel__back" />
            <div className="panel__info">
                <div className="panel__num">{props.data.num}</div>
                <h2 className="panel__title">{props.data.title}</h2>
                <div className="panel__note">
                    {props.data.note}
                </div>
                <div className="panel__more">
                    <a className="panel__btn panel__btn_red" href="#">Подробнее</a>
                </div>
            </div>
        </div>
    )
};

export default IntroBlock