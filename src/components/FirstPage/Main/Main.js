import React from 'react'
import lessStyles from './Main.less'
import Button from "../UI/Button/Button";


const Main = () => {
  const btnCls = ['btn_gray', 'btn_arrow-lt', 'sec-start__back', 'js-sec-start-slider-unfreeze'];
  return (
      <div className={lessStyles['sec-start__select']} id={lessStyles['sec-start__select']}>
          <Button name='Назад' classes={ btnCls } />
          <h1 className={lessStyles['sec-start__title']}>Выберите <br/> интересующее направление:</h1>
      </div>
  )
};

export default Main

