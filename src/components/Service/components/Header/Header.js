import React from 'react'
import './Header.less'
import Nav from "./Nav/Nav";
import DropMenu from "../DropMenu/DropMenu"
import Logo from "./Logo/Logo";
import Switch from "./Switch/Switch";
import Links from "./Links/Links";
import MobMenu from "./MobMenu/MobMenu";

class Header extends React.Component {

    lastScrollY = 0
    navBarHeight = 0

    state = {
        DropMenuIsOpen: false,
        isScrolled: false,
        navDown: true
    }

    componentDidMount() {
        document.addEventListener('scroll', this.toggleHeader)
        this.navBarHeight = document.getElementById('header-line').offsetHeight
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.toggleHeader)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.navBarHeight = document.getElementById('header-line').offsetHeight
    }

    toggleHeader =() => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop,
            delta = 5
        if (Math.abs(this.lastScrollY - currentScroll) <= delta) return
        if (currentScroll > 150) {
            this.setState({isScrolled: true})
        } else {
            this.setState({isScrolled: false})
        }
        if (currentScroll > this.lastScrollY && currentScroll > this.navBarHeight * 5) {
            this.setState({navDown: false})
        } else {
            if (currentScroll + window.innerHeight < document.body.scrollHeight) {
                this.setState({navDown: true})
            }
        }
        this.lastScrollY = currentScroll
    }

    toggleMenuHandler = () => {
        this.setState({DropMenuIsOpen: !this.state.DropMenuIsOpen})
    }

    render() {
        let cls = 'site-header',
            navState = 'sh-line'
        if (this.state.DropMenuIsOpen) { cls += ' is-open' }
        if (this.state.isScrolled) { navState += ' is-scrolled'}
        this.state.navDown ? navState += ' nav-down' : navState += ' nav-up'
        return (
            <header className={cls} id="site-header">
                <div className={navState} id="header-line">
                    <div className="sh-line__row sh-line__for-comp">
                        <div className="sh-line__col-lt">
                            <Logo />
                            <DropMenu place='Header'/>
                        </div>
                        <Switch />
                        <Links />
                    </div>
                    <div className="sh-line__row sh-line__for-mob">
                        <Logo mob={true}/>
                        <MobMenu open={this.state.DropMenuIsOpen} toggleMenuHandler={this.toggleMenuHandler}/>
                    </div>
                </div>
                <Nav />
            </header>
        )
    }
}

export default Header;