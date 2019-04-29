import React from 'react';
import '../Header.less'
import {companyContacts} from "../../../../../vars/company";
import {Link} from "react-router-dom";


const Links = () => {
    return (
        <div className="sh-line__col-rt">
            <ul className="sh-links">
                <li className="sh-links__item">
                    <Link className="sh-links__link" to="/garage">Мой гараж</Link>
                </li>
                <li className="sh-links__item">
                    <Link className="sh-links__link" to="/contacts">Контакты</Link>
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