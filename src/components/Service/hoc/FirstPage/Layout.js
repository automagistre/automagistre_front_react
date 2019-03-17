import React, {Component} from 'react';
import './Layout.less'
// import './btn.less'

import SelectModel from "../../../UI/SelectModel/SelectModel";

class FirstPage extends Component {
    render() {
        return (
            <React.Fragment>
                <SelectModel />
            </React.Fragment>
        );
    }
}

export default FirstPage;