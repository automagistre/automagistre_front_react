import React from 'react'
import './Header.css'
import Nav from "./Nav/Nav";
import DropMenu from "../DropMenu/DropMenu"
import Logo from "./Logo/Logo";
import Switch from "./Switch/Switch";
import Links from "./Links/Links";
import MobMenu from "./MobMenu/MobMenu";

const Header = () => {
    return (
        <header className="site-header" id="site-header">
            <div className="sh-line" id="header-line">
                <div className="sh-line__row sh-line__for-comp">
                    <div className="sh-line__col-lt">
                        <Logo />
                        <DropMenu place = 'Header'/>
                    </div>
                    <Switch />
                    <Links />
                </div>
                <div className="sh-line__row sh-line__for-mob">
                    <Logo mob={true}/>
                    <MobMenu />
                </div>
            </div>

            <Nav />

        </header>
    )
};

export default Header;