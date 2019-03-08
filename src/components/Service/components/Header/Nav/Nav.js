import React from 'react';
import '../Header.less'
import {carManufactures} from '../../../../../vars/manufactures'

class Nav extends React.Component {
    renderCarLinks = links => links.map((value, key) => {
        return (
            <a key={key} className="sh-mob__link" href="#">Клубный автосервис: {value}</a>
        )
    });

    render () {
        return (
            <div className="sh-mob__drop"  id="mob-drop">
                <nav className="sh-mob__menu">
                    <a className="sh-mob__link" href="#">Автосервис в Москве</a>
                    <a className="sh-mob__link" href="#">Магазин запчастей</a>
                    <a className="sh-mob__link" href="#">Мой гараж</a>
                    <a className="sh-mob__link" href="#">Контакты</a>
                    { this.renderCarLinks(carManufactures) }
                </nav>
            </div>
        )
    }
}

export default Nav;
