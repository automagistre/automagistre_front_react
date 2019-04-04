import React, {Component} from 'react'
import './ScrollToTop.less'

import {animateScroll} from 'react-scroll'

class ScrollToTop extends Component {
    state = {
        visible: false
    }

    componentDidMount() {
        document.addEventListener('scroll', this.setVisibility)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.setVisibility)
    }

    setVisibility = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        if (scrollTop > 150 && this.state.visible === false) {
            this.setState({visible: !this.state.visible})
        }
        if (scrollTop <= 150 && this.state.visible === true) {
            this.setState({visible: !this.state.visible})
        }
    }

    render() {
        let cls = "scroll-top "
        if (this.state.visible) cls +='is-active'
        return (
            <button className={cls} title="Вверх"
                    onClick={() => animateScroll.scrollToTop()}/>
        )
    }

}

export default ScrollToTop