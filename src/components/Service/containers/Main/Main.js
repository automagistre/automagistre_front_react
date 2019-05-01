import React, {Component} from 'react'
import './Main.less'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../../UI/ScrollToTop/ScrollToTop";
import {setManufacture, setServiceType} from "../../../../store/actions/serviceActions";
import {connect} from "react-redux";

class Main extends Component {
    updateState = () => {
        if (this.props.match.params.manufacture.toLowerCase() !== this.props.manufactures)
            this.props.setManufacture(this.props.match.params.manufacture)
        if (this.props.match.params.serviceType.toLowerCase() !== this.props.serviceType)
            this.props.setServiceType(this.props.match.params.serviceType)
    }
    componentWillMount() {
        this.updateState()
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.updateState()
    }

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
function mapStateToProps(state) {
    return {
        manufactures: state.service.manufactures,
        serviceType: state.service.serviceType
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setManufacture: manufacture => dispatch(setManufacture(manufacture)),
        setServiceType: serviceType => dispatch(setServiceType(serviceType))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)