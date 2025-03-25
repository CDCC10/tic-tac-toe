import { useState } from "react"

export const Square = ({ value, onClick }) => {
    const handleClick = () => {
        onClick();
    }
     
    return (
        <button className="square" onClick={handleClick}>{value}</button>
    )
}
