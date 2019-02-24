import React from 'react';
import '../Header/Header.css'
import '../Footer/Footer.css'
import {carManufactures} from '../../../../vars/manufactures'

class DropMenu extends React.Component {
    renderLinks (links, place) {
        return links.map((value, key) => {
            let cls = [];
            if (place === 'Header') {
                cls.push('sh-drop__link');
            }
            if (place === 'Footer'){
                cls.push('sf-drop__link');
            }
            if (value === 'Nissan'){
                cls.push('is-active')
            }
            return (
                <a key={key} className={ cls.join(' ') } href="#">{ value }</a>
            )
        })
    }
    render() {
        let cls = '';
        if (this.props.place === 'Header')
            cls = 'sh';
        if (this.props.place === 'Footer')
            cls = 'sf';
        return (
            <div className={`${cls}-drop`}>
                <div className={`${cls}-drop__note`}>Клубный автосервис:</div>
                <nav className={`${cls}-drop__links`}>
                    { this.renderLinks(carManufactures, this.props.place) }
                </nav>
            </div>
        )
    }
}

export default DropMenu