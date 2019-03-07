import React from 'react';
import '../Header.css'
import './MobMenu.css'
import {companyContacts} from '../../../../../vars/company'

const MobMenu = (props) => {
    let cls = "mobmenu-btn sh-mob__menu-btn js-mobmenu-toggle"
    if (props.open) {
        cls += " is-open"
    }
    return (
        <div className="sh-mob__col-rt">
            <a className="sh-mob__phone" href={`tel:${companyContacts.phoneLink}`} />
            <a className={cls} role="button" onClick={props.toggleMenuHandler} >
                <span className="_top" />
                <span className="_middle" />
                <span className="_bottom" />
            </a>
        </div>
    )
};

export default MobMenu