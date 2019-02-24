import React, {Component} from 'react';
import './Layout.css'
import './btn.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SideBar from "../../UI/Sidebar/Sidebar";
import TireServiceReminder from "../../UI/TireServiceReminder/TireServiceReminder";

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SideBar/>
                <div style={{height:'600px'}}/>
                <TireServiceReminder/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;