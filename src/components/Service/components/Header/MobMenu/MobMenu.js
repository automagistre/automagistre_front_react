import React from 'react';
import '../Header.less'
import './MobMenu.less'
import {companyContacts} from '../../../../../vars/company'

const MobMenu = (props) => {
    console.log(props)
    let cls = "mobmenu-btn sh-mob__menu-btn"
    if (props.open) {
        cls += " is-open"
    }
    return (
        <div className="sh-mob__col-rt">
            <a className="sh-mob__phone" href={`tel:${companyContacts.phoneLink}`} />
            <a className={cls} onClick={props.toggleMenuHandler} >
                <span className="_top" />
                <span className="_middle" />
                <span className="_bottom" />
            </a>
        </div>
    )
};

export default MobMenu