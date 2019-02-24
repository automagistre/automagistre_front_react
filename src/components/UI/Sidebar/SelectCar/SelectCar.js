import React from 'react'
import '../Sidebar.css'

const SelectCar = () => {
  return(
      <li className="navbar__item navbar__item_red is-active">
          <a className="navbar__link icon_n-cars js-show-modal" role="button">Выбрать другую модель</a>
      </li>
  )
};

export default SelectCar