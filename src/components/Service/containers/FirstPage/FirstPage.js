import React, {Component} from 'react';
import './FirstPage.less'

import SelectModel from "../../../UI/SelectModel/SelectModel";
import logo from '../../../../img/logo_magistr_gray.svg'

class FirstPage extends Component {
    state = {
        frieze: false
    }

    friezeChoiceToggle = () => {
        this.setState({
            frieze: !this.state.frieze
        })
    }

    render() {
        return (
            <section className="sec-start">
                <div className="sec-start__head">
                    <img className="sec-start__logo" src={logo} alt="Автомагистр" />
                        <div className="sec-start__note">Клубный автосервис и магазин запчастей</div>
                </div>
                <SelectModel friezeChoiceToggle={this.friezeChoiceToggle} frieze={this.state.frieze} />
            </section>
        );
    }
}

export default FirstPage;