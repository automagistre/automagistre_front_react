import React from "react";

const CustomArrow = (props) => {
    const { className, onClick } = props;
    return (
        <button type='button' className={className} onClick={onClick} />
    )
}

export default CustomArrow