import React from 'react'
import '../Sidebar.css'

const SelectDiag = () => {
    return(
        <li className="navbar__item">
            <a className="navbar__link icon_n-comp" href="#">Компьютерная диагностика</a>
            <a className="navbar__link icon_n-dash is-free" href="#">Бесплатная диагностика</a>
        </li>
    )
};

export default SelectDiag