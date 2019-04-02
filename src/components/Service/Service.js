import React from 'react'
import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";
import Footer from "./components/Footer/Footer";
import SideBar from "../UI/Sidebar/Sidebar";
import MakeAnAppointmentSec from "./components/Sections/MakeAnAppointmentSec/MakeAnAppointmentSec";
import FeaturesSec from "./components/Sections/FeaturesSec/FeaturesSec";
import CompDiagSelect from "../UI/CompDiagSelect/CompDiagSelect";
import ExperienceSec from "./components/Sections/ExperienceSec/ExperienceSec";
import MasterSec from "./components/Sections/MasterSec/MasterSec";

const Service = () => {
    return (
        <React.Fragment>
            <Header/>
            {/*<Main/>*/}
            <MakeAnAppointmentSec />
            <FeaturesSec offerButton={true}>
                <CompDiagSelect />
            </FeaturesSec>
            <ExperienceSec />
            <MasterSec />
            <SideBar/>
            <Footer/>
        </React.Fragment>
    )
}

export default Service