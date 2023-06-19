import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import HTML5 from '../images/icons/icons8-html-5.svg'
import CSS3 from '../images/icons/icons8-css3.svg'
import JS from '../images/icons/icons8-javascript.svg'
import Mongodb from '../images/icons/icons8-mongodb.svg'
import React from '../images/icons/icons8-react.svg'
import MySQL from '../images/icons/icons8-mysql-logo.svg'
import Node from '../images/icons/icons8-node-js.svg'
import Php from '../images/icons/icons8-php-logo.svg'
import Bootstrap from '../images/icons/icons8-bootstrap.svg'
import Python from '../images/icons/icons8-python.svg'
import CSharp from '../images/icons/icons8-c-sharp-logo.svg'
import SASS from '../images/icons/icons8-sass.svg'
import jQuery from '../images/icons/icons8-jquery.svg'
import dotNet from '../images/icons/icons8-.net-framework.svg'
import WordPress from '../images/icons/icons8-wordpress.svg'
const Toolkit = () => {
    let toolkit = useRef(null)

    useEffect(() => {

        setTimeout(function () { 
            //The ScrollTrigger's animations will begin to early if ScrollTrigger loads too fast.
            //To fix the problem ScrollTrigger will load with a slight delay.
            gsap.registerPlugin(ScrollTrigger)
            gsap.to(toolkit.current, {
                scrollTrigger: {
                    trigger: toolkit.current,
                    start: "top center"
                },
                opacity: 1,
                duration: 1,
            })

        }, 1000);


    }, [])
    useEffect(() => {
        gsap.utils.toArray("#toolkit img").forEach(icon => {

            icon.addEventListener("mouseover", () => gsap.to(icon, { scale: 1.3 }))
            icon.addEventListener("mouseout", () => gsap.to(icon, { scale: 1 }))
        }
        )
    }, [])


    return (
        <div id="toolkit" style={{ opacity: 0 }} ref={toolkit}>
            <h2 class ="mx-1">What I Have Experience With</h2>
         
            <p className = "px-md-5 my-5 mx-sm-2"> Icons from <a href = "https://icons8.com/">Icons 8</a>.</p>
           
           
            <div className="d-md-flex justify-content-between p-md-5">
                
                <article className="w-md-50 m-2">
                    <h3>Most Used</h3>

                   
                    <img className title = "HTML" src={HTML5} alt="HTML"/>
                    <img title = "CSS" src={CSS3} alt="CSS"/>
                    <img title = "JavaScript" src={JS} alt="JavaScript"/>
                    <img title = "React" src={React} alt="React"/>
                    <img title = "NodeJS" src={Node} alt="NodeJS"/>
                    <img title = "Bootstrap" src={Bootstrap} alt="Bootstrap"/>
                    <img title = "SCSS" src = {SASS} alt = "SASS"/>

                </article>
                <article className = "m-2">
                    <h3>Other</h3>
                    <img title = "jQuery" src = {jQuery} alt = "jQuery"/>
                    <img title = "MongoDB" src={Mongodb} alt="MongoDB"/>
                    <img title = "MySQL" src={MySQL} alt="MySQL"/>
                    <img title = "C#" src={CSharp} alt="C#"/>
                    <img title = ".Net / .Net Core/ ASP.Net Core" src={dotNet} alt="dotNet/dotNet Core/ASP dotNet Core"/>
                    <img title = "PHP" src={Php} alt="PHP"/>
                    <img title = "Python" src={Python} alt="Python"/>
                    <img title = "WordPress" src={WordPress} alt="WordPress"/>
                </article>
            </div>

         
            
        </div>

    )
}

export default Toolkit