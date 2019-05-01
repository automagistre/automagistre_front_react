import React from 'react';
import '../Header/Header.less'
import '../Footer/Footer.less'
import {carManufactures} from '../../../../vars/manufactures'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const LinkToManufacture = props => {
    let cls = [];
    const link = props.link.name.toLowerCase()
    if (props.place === 'Header') {
        cls.push('sh-drop__link');
    }
    if (props.place === 'Footer'){
        cls.push('sf-drop__link');
    }
    if (link === props.manufacture){
        cls.push('is-active')
    }
    return (
        <Link className={cls.join(' ')} to={`/${props.serviceType}/${link}`}>
            { props.link.name }
        </Link>
    )
}

const DropMenu = props => {
    let cls = '';
    if (props.place === 'Header')
        cls = 'sh';
    if (props.place === 'Footer')
        cls = 'sf';
    return (
        <div className={cls + "-drop"}>
            <div className={cls + "-drop__note"}>Клубный автосервис:</div>
            <nav className={cls + "-drop__links"}>
                {carManufactures.map((link, key) =>
                    <LinkToManufacture key={key} {...props} link={link} />
                )}
            </nav>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        manufacture: state.service.manufacture,
        serviceType: state.service.serviceType
    }
}

export default connect(mapStateToProps)(DropMenu)