import React from 'react';
import '../Header.css'
import {companyContacts} from '../../../../../vars/company'

const MobMenu = () => {
    return (
        <div className="sh-mob__col-rt">
            <a className="sh-mob__phone" href={`tel:${companyContacts.phoneLink}`} />
            <a className="mobmenu-btn sh-mob__menu-btn js-mobmenu-toggle" role="button">
                <span className="_top" />
                <span className="_middle" />
                <span className="_bottom" />
            </a>
        </div>
    )
};

export default MobMenu