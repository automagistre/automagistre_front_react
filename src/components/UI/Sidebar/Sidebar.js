import React from 'react'
import './Sidebar.less'
import SelectCar from "./SelectCar/SelectCar";
import SelectPrice from "./SelectPrice/SelectPrice";
import SelectDiag from "./SelectDiag/SelectDiag";
import SelectTO from "./SelectTO/SelectTO";

const SideBar = () => {
    return (
        <aside className="site-side">
            <ul className="navbar site-side__nav">
                <SelectCar />
                <SelectPrice />
                <SelectDiag/>
                <SelectTO/>
            </ul>
        </aside>
    )
};

export default SideBar