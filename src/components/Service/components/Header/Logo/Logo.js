import React from 'react'
import '../Header.less'
import {companyNameRu} from '../../../../../vars/company'

import logoDark from '../../../../../img/logo_magistr_dark.svg'
import logoWhite from '../../../../../img/logo_magistr_white.svg'
import logoDarkMob from '../../../../../img/logo_magistr-mob_dark.svg'
import logoWhiteMob from '../../../../../img/logo_magistr-mob_white.svg'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Logo = (props) => {
    const url = '/service/' + props.manufacture
    return props.mob ? (
        <div className="sh-mob__col-lt">
            <NavLink className="sh-mob__logo" to={url}>
                <img className="sh-mob__logo-img sh-logo__img_white"
                     src={logoWhiteMob}
                     alt={companyNameRu}/>
                <img className="sh-mob__logo-img  sh-logo__img_dark"
                     src={logoDarkMob}
                     alt={companyNameRu}/>
            </NavLink>
        </div>
    ) : (
        <div className="sh-logo">
            <img className="sh-logo__img sh-logo__img_white" src={logoWhite}
                 alt={companyNameRu}/>
            <img className="sh-logo__img sh-logo__img_dark" src={logoDark}
                 alt={companyNameRu}/>
            <NavLink className="sh-logo__link" to={url}/>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        manufacture: state.service.manufacture
    }
}
export default connect(mapStateToProps)(Logo)
