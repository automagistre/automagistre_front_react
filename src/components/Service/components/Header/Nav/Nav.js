import React from 'react';
import '../Header.less'

import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setManufacture} from "../../../../../store/actions/serviceActions";

const Nav = (props) => {
    const links = props.manufactures
    return (
        <div className="sh-mob__drop" id="mob-drop">
            <nav className="sh-mob__menu">
                <NavLink className="sh-mob__link" to={'/service/' + props.manufacture}
                         onClick={props.toggleMenuHandler}>Автосервис в Москве
                </NavLink>
                <NavLink className="sh-mob__link" to={'/market/' + props.manufacture}
                         onClick={props.toggleMenuHandler}>Магазин запчастей
                </NavLink>
                <NavLink className="sh-mob__link" to="/garage"
                         onClick={props.toggleMenuHandler}>Мой гараж
                </NavLink>
                <NavLink className="sh-mob__link" to="/contacts"
                         onClick={props.toggleMenuHandler}>Контакты
                </NavLink>
                {links.map((value, key) => {
                    return (
                        <NavLink key={key}
                                 className="sh-mob__link"
                                 to={'/service/' + value.name.toLowerCase()}
                                 onClick={()=> {
                                     // props.setManufacture(value.name)
                                     props.toggleMenuHandler()
                                 }}
                        >
                            Клубный автосервис: {value.name}
                        </NavLink>
                    )})
                }
            </nav>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        manufacture: state.service.manufacture,
        manufactures: state.service.manufactures
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setManufacture: manufacture => dispatch(setManufacture(manufacture))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
