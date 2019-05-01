import React from 'react'
import '../Header.less'

import {services} from "../../../../../vars/company";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const links = services

const MenuLink = props => {
    let isActive = ''
    if(props.serviceType === props.link.url)
        isActive = 'is-active'
    return (
        <li className={"sh-switch__item " + isActive}>
            <Link className="sh-switch__link" to={`/${props.link.url}/${props.manufacture.toLowerCase()}`}>{ props.link.name }</Link>
        </li>
    )
}

const Switch = (props) => {
    return (
        <div className="sh-line__col-cn">
            <ul className="sh-switch">
                {links.map((link, key) => <MenuLink link={link}
                                                    key={key}
                                                    manufacture={props.manufacture}
                                                    serviceType={props.serviceType}
                                                    />
                            )}
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        manufacture: state.service.manufacture,
        serviceType: state.service.serviceType
    }
}

export default connect(mapStateToProps)(Switch)

// is-active