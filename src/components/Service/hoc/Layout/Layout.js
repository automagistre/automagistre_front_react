import React, {Component} from 'react';
import './Layout.less'
import './btn.less'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SideBar from "../../../UI/Sidebar/Sidebar";
// import TireServiceReminder from "../../../UI/TireServiceReminder/TireServiceReminder";
import Main from "../Main/Main";

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SideBar/>
                <Main />
                {/*<TireServiceReminder/>*/}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;