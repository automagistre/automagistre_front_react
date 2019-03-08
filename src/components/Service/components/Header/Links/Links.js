import React from 'react';
import '../Header.less'
import {companyContacts} from "../../../../../vars/company";


const Links = () => {
    return (
        <div className="sh-line__col-rt">
            <ul className="sh-links">
                <li className="sh-links__item">
                    <a className="sh-links__link" href="#">Мой гараж</a>
                </li>
                <li className="sh-links__item">
                    <a className="sh-links__link" href="#">Контакты</a>
                </li>
                <li className="sh-links__item">
                    <a className="sh-links__link is-active" href={`tel:${companyContacts.phoneLink}`}>{companyContacts.phone}</a>
                    <span className="sh-links__link-note">Ежедневно, {companyContacts.starWork}-{companyContacts.endWork}</span>
                </li>
            </ul>
        </div>
    )
};

export default Links