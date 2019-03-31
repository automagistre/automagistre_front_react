import React, {Component} from 'react';
import './FirstPage.less'

import SelectModel from "../../../UI/SelectModel/SelectModel";
import logo from '../../../../img/logo_magistr_gray.svg'

class FirstPage extends Component {
    state = {
        friezeChoice: false
    }

    friezeChoiceToggle = () => {
        this.setState({
            friezeChoice: !this.state.friezeChoice
        })
    }

    render() {
        return (
            <section className="sec-start">
                <div className="sec-start__head">
                    <img className="sec-start__logo" src={logo} alt="Автомагистр" />
                        <div className="sec-start__note">Клубный автосервис и магазин запчастей</div>
                </div>
                <SelectModel changeStep={this.friezeChoiceToggle} frieze={this.state.friezeChoice} />
            </section>
        );
    }
}

export default FirstPage;