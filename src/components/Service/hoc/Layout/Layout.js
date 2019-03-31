import React, {Component} from 'react';
import './Layout.less'
import './btn.less'


class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default Layout;