import React from 'react'
import './Footer.less'
import SpaceWellLogo from '../../../../img/logo_space-well_red.svg'
import MagistrLogoDark from '../../../../img/logo_magistr_dark.svg'
import DropMenu from "../DropMenu/DropMenu";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="sf-top">
                <div className="container">
                    <div className="sf-top__row">
                        <div className="sf-top__col-lt">
                            <div className="sf-logo">
                                <img className="sf-logo__img" src={MagistrLogoDark} alt="Автомагистр" />
                                    {/*<a className="sf-logo__link" href="/" />*/}
                            </div>
                            <DropMenu place = 'Footer' />
                        </div>
                        <div className="sf-top__col-rt">
                            <nav className="sf-nav">
                                <Link className="sf-nav__link is-active" to={'/garage/'}>Сервис в Москве</Link>
                                <a className="sf-nav__link" href="#">Магазин запчастей</a>
                                <a className="sf-nav__link" href="#">Корпоративным клиентам</a>
                                <a className="sf-nav__link" href="#">Мой гараж</a>
                                <a className="sf-nav__link" href="#">Блог</a>
                                <a className="sf-nav__link" href="#">Контакты</a>
                            </nav>
                            <div className="sf-top__info">
                                <div className="sf-top__text">
                                    ООО «АвтоМагистр». ИНН 4124141413224
                                </div>
                                <div className="sf-creator sf-top__creator">
                                    <div className="sf-creator__note">Сайт разработан:</div>
                                    <a className="sf-creator__link" href="http://spacewell.ru" target="_blank">
                                        <img className="sf-creator__img" src={SpaceWellLogo}
                                             alt="Space Well" />
                                    </a>
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
                        <div className="sf-btm__col"><a href="#">Политика конфиденциальности</a></div>
                    </div>
                </div>
            </div>
            <a className="sf-car-change icon_n-cars js-show-modal" role="button" title="Выбрать машину" />
            <a className="scroll-top js-scroll-top" title="Вверх" role="button" />
        </footer>
    )
};

export default Footer