import React from 'react'
import './Header.css'
import Nav from "./Nav/Nav";
import DropMenu from "../DropMenu/DropMenu"
import Logo from "./Logo/Logo";
import Switch from "./Switch/Switch";
import Links from "./Links/Links";
import MobMenu from "./MobMenu/MobMenu";

class Header extends React.Component {

    state= {
        isOpen: false
    }

    toggleMenuHandler = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        let cls = 'site-header'
        if (this.state.isOpen) {
            cls += ' is-open'
        }
        return (
            <header className={cls} id="site-header">
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
                        <MobMenu open={this.state.isOpen} toggleMenuHandler={this.toggleMenuHandler}/>
                    </div>
                </div>

                <Nav />

            </header>
        )
    }
}

export default Header;