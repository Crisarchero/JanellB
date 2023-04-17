import { useEffect } from 'react'

import { RxHamburgerMenu } from 'react-icons/rx'
import gsap from 'gsap'

const Navbar = () => {
    useEffect(() => {
        gsap.utils.toArray("#nav a").forEach(link => {

            link.addEventListener("mouseover", () => gsap.to(link, { y: -10 }))
            link.addEventListener("mouseout", () => gsap.to(link, { y: 0 }))
        }
        )
    }, [])
    return (
        <nav id="nav" className="fixed-top p-3 bg-white border-bottom shadow-sm nav navbar-light justify-content-between px-3 ">

            <a className=" me-auto navbar-brand text-primary" href="#hero">Janell B.</a>
           

                <a className="mx-5 text-decoration-none"
                    href="https://janellresume.tiiny.site/">
                    Resume</a>
                <button class="navbar-toggler text-primary " type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse">
                    <RxHamburgerMenu />
                </button>
       
            <div className="collapse navbar-collapse" id="navbar-collapse">

                <ul className="nav justify-content-between align-items-center w-100">


                    <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#toolkit">Toolkit</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact Me</a></li>
                </ul>
            </div>


        </nav>
    )
}

export default Navbar