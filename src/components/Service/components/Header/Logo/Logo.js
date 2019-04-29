import React from 'react'
import '../Header.less'
import {companyNameRu} from '../../../../../vars/company'

import logoDark from '../../../../../img/logo_magistr_dark.svg'
import logoWhite from '../../../../../img/logo_magistr_white.svg'
import logoDarkMob from '../../../../../img/logo_magistr-mob_dark.svg'
import logoWhiteMob from '../../../../../img/logo_magistr-mob_white.svg'
import {NavLink} from "react-router-dom";

const Logo = (props) => {
    if (props.mob) {
        return (
            <div className="sh-mob__col-lt">
                <NavLink className="sh-mob__logo" to="/service">
                    <img className="sh-mob__logo-img sh-logo__img_white"
                         src={ logoWhiteMob }
                         alt={companyNameRu}/>
                    <img className="sh-mob__logo-img  sh-logo__img_dark"
                         src={ logoDarkMob }
                         alt={companyNameRu} />
                </NavLink>
            </div>
        )
    }
    return (
        <div className="sh-logo">
            <img className="sh-logo__img sh-logo__img_white" src={ logoWhite }
                 alt={companyNameRu} />
            <img className="sh-logo__img sh-logo__img_dark" src={ logoDark }
                 alt={companyNameRu} />
            <NavLink className="sh-logo__link" to="/" />
        </div>
    )
};

export default Logo
