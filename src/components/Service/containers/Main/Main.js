import React, {Component} from 'react'
import './Main.less'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../../UI/ScrollToTop/ScrollToTop";


class Main extends Component {
    render() {
        return (
            <main className="site-main">
                <Header/>
                {this.props.children}
                <Footer/>
                <ScrollToTop/>
            </main>
        )
    }
}

export default Main