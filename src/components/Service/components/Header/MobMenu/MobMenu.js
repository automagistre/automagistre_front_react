import React from 'react';
import '../Header.less'
import './MobMenu.less'
import {companyContacts} from '../../../../../vars/company'
import {Link} from "react-router-dom";

const MobMenu = (props) => {
    let cls = "mobmenu-btn sh-mob__menu-btn"
    if (props.open) {
        cls += " is-open"
    }
    return (
        <div className="sh-mob__col-rt">
            <Link className="sh-mob__phone" to={`tel:${companyContacts.phoneLink}`} />
            <button className={cls} onClick={props.toggleMenuHandler} >
                <span className="_top" />
                <span className="_middle" />
                <span className="_bottom" />
            </button>
        </div>
    )
};

export default MobMenu