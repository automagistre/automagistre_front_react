import React from 'react'
import './Footer.less'
import SpaceWellLogo from '../../../../img/logo_space-well_red.svg'
import MagistrLogoDark from '../../../../img/logo_magistr_dark.svg'
import DropMenu from "../DropMenu/DropMenu";
import {Link} from "react-router-dom";
import {setManufacture, setServiceType} from "../../../../store/actions/serviceActions";
import {connect} from "react-redux";

const Footer = props => {
    return (
        <footer className="site-footer">
            <div className="sf-top">
                <div className="container">
                    <div className="sf-top__row">
                        <div className="sf-top__col-lt">
                            <div className="sf-logo">
                                <img className="sf-logo__img" src={MagistrLogoDark} alt="Автомагистр" />
                                    <Link className="sf-logo__link"  to={`/market/${props.manufacture}/`}/>
                            </div>
                            <DropMenu place = 'Footer' />
                        </div>
                        <div className="sf-top__col-rt">
                            <nav className="sf-nav">
                                <Link className="sf-nav__link is-active" to={'/garage'}>Сервис в Москве</Link>
                                <Link className="sf-nav__link" to={`/market/${props.manufacture}/`}>
                                    Магазин запчастей
                                </Link>
                                <Link className="sf-nav__link" to="/corp/">Корпоративным клиентам</Link>
                                <Link className="sf-nav__link" to="/garage/">Мой гараж</Link>
                                <Link className="sf-nav__link" to="/blog/">Блог</Link>
                                <Link className="sf-nav__link" to="/contacts/">Контакты</Link>
                            </nav>
                            <div className="sf-top__info">
                                <div className="sf-top__text">
                                    ООО «АвтоМагистр». ИНН 4124141413224
                                </div>
                                <div className="sf-creator sf-top__creator">
                                    <div className="sf-creator__note">Сайт разработан:</div>
                                    <Link className="sf-creator__link" to="http://spacewell.ru" target="_blank">
                                        <img className="sf-creator__img" src={SpaceWellLogo}
                                             alt="Space Well" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sf-btm">
                <div className="container">
                    <div className="sf-btm__row">
                        <div className="sf-btm__col">Все права защищены © АвтоМагистр</div>
                        <div className="sf-btm__col"><Link to="/privacy/">Политика конфиденциальности</Link></div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

function mapStateToProps(state) {
    return {
        manufacture: state.service.manufacture,
        serviceType: state.service.serviceType
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setManufacture: manufacture => dispatch(setManufacture(manufacture)),
        setServiceType: serviceType => dispatch(setServiceType(serviceType))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Footer)
