import React from 'react'
import {NavLink} from 'react-router-dom'
import './../styles/nav.css'

export default function NavMain() {
    return (
        <nav data-aos="fade-down">
            <div className="link-container">
                <a className="link" href="#portfolio">Portfolio</a>
                <div className="effect-container">
                    <div className="effect"></div>
                    <div className="effect"></div>
                </div>
            </div>
            <div className="link-container">
                <a className="link" href='#CV'>CV</a>
                <div className="effect-container">
                    <div className="effect"></div>
                    <div className="effect"></div>
                </div>
            </div>
            <div className="link-container">
                <a className="link" href="#contact">Contactez-moi</a>
                <div className="effect-container">
                    <div className="effect"></div>
                    <div className="effect"></div>
                </div>
            </div>
            </nav>
    )
}
