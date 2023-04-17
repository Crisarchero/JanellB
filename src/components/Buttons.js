import React from 'react'
import gsap from 'gsap'

const Buttons = (props) => {
    function code_button_mouseEnter({ currentTarget }) {
        
            gsap.to(currentTarget, {
            scale: 1.05,
            y: -10,
        })
       
    }
    function live_button_mouseEnter({currentTarget}){
        gsap.to(currentTarget, {
            scale: 1.05,
            y: 10,
        })
    }
    function button_mouseExit({ currentTarget }) {
        gsap.to(currentTarget, {
            scale: 1,
            y: 0,
        })
    }
    return (
        <div className="d-flex flex-column">
            <a className="btn btn-secondary mb-2" onMouseEnter={code_button_mouseEnter} onMouseLeave={button_mouseExit} href={props.code}>View Code</a>
            <a className="btn btn-secondary mb-2" onMouseEnter={live_button_mouseEnter} onMouseLeave={button_mouseExit}href={props.url}>View Live</a>
        </div>
    )
}

export default Buttons