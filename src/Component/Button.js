import React from 'react'

function Button({ClickHandler, btntext}) {
    return (
        <button onClick= {ClickHandler}>{btntext}</button>
    )
}

export default Button