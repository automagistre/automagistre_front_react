import {carManufactures} from "../../../../vars/manufactures";
import {services} from "../../../../vars/company";
import Main from "../../containers/Main/Main";
import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {setManufacture, setServiceType} from "../../../../store/actions/serviceActions";


const updateState = (props) => {
    if (props.match.params.manufacture.toLowerCase() !== props.manufacture)
        {props.setManufacture(props.match.params.manufacture)}
    if (props.match.params.serviceType.toLowerCase() !== props.serviceType)
        {props.setServiceType(props.match.params.serviceType)}
}

const ValidComponent = props => {
    let urlService = '', urlManufacture = '', flag = false
    if (props.match.params.serviceType)
    {urlService = props.match.params.serviceType.toLowerCase()}
    if (props.match.params.manufacture)
    {urlManufacture = props.match.params.manufacture.toLowerCase()}
    for (let manufacture of carManufactures) {
        if (urlManufacture === manufacture.name.toLowerCase()) {
            flag = true
            break
        }
    }
    if (!flag) {
        return <Redirect to='/'/>
    }
    for (let service of services) {
        if (service.link === urlService && service.visible) {
            updateState(props)
            return (
                <Main {...props}>
                    {service.component(props)}
                </Main>
            )
        }
    }
    return <Redirect to='/'/>
}

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


export default connect(mapStateToProps, mapDispatchToProps)(ValidComponent)