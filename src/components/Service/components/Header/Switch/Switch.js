import React from 'react'
import '../Header.less'

import {services} from "../../../../../vars/company";

class Switch extends React.Component {
    links = services
    renderLinks = () => {
        return(
            this.links.map((value, index) => {
                return (
                <li key={index} className="sh-switch__item">
                    <a className="sh-switch__link" href="#">{ value.name }</a>
                </li>
                )
            })
        )
    };
    render () {
        return (
            <div className="sh-line__col-cn">
                <ul className="sh-switch">
                    {this.renderLinks()}
                </ul>
            </div>
        )
    }

}
export default Switch

// is-active