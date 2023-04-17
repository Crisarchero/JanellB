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



const Toolkit = () => {
    let toolkit = useRef(null)

    useEffect(() => {

        setTimeout(function () {


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
            <h2>I Have Experience With...</h2>

            <div className="d-md-flex justify-content-between p-md-5">

                <article className="w-md-50 m-2">
                    <h3>Most Used</h3>


                    <img className title = "HTML" src={HTML5} alt="HTML"></img>
                    <img title = "CSS" src={CSS3} alt="CSS"></img>
                    <img title = "JavaScript" src={JS} alt="JavaScript"></img>
                    <img title = "React" src={React} alt="React"></img>
                    <img title = "NodeJS" src={Node} alt="NodeJS"></img>
                    <img title = "Bootstrap" src={Bootstrap} alt="Bootstrap"></img>


                </article>
                <article className = "m-2">
                    <h3>Other</h3>

                    <img title = "MongoDB" src={Mongodb} alt="MongoDB"></img>
                    <img title = "MySQL" src={MySQL} alt="MySQL"></img>
                    <img title = "C#" src={CSharp} alt="C#"></img>
                    <img title = "PHP" src={Php} alt="PHP"></img>
                    <img title = "Python" src={Python} alt="Python"></img>
                </article>
            </div>
        </div>

    )
}

export default Toolkit