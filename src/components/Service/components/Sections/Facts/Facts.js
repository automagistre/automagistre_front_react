import React from 'react'
import "./Facts.less"
import './odometer.less'
import {data} from '../../../../../vars/texts/UI/facts'
import Odometer from 'react-odometerjs'
import VisibilitySensor from 'react-visibility-sensor'

class OdometerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name: this.props.name,
            count: (this.props.count - 50) < 0 ?  0 : this.props.count - 50
        };
    }

    onVisible = isVisible => {
        if(isVisible) {
            this.setState({count: this.props.count})
        }
    };

    render() {
        return (
            <li className="facts__item">
                <div className="facts__val" >
                    <VisibilitySensor onChange={this.onVisible}>
                        <Odometer value={this.state.count}
                                  format="( ddd)"
                                  options={{auto:false, duration:200}}
                        />
                    </VisibilitySensor>
                </div>
                <div className="facts__txt">{this.state.name}</div>
            </li>
        )
    }
}

class Facts extends React.Component {

    renderFacts = facts => facts.map((value, key) => {
        return (
                <OdometerItem name={value.name} count={value.count} key={key} />
        )
    });

    render() {
        const cls = "facts " + this.props.theme;
        return (
            <ul className={cls} >
                { this.renderFacts(data) }
            </ul>
        )
    }
}

export default Facts