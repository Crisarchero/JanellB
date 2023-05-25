import React from 'react'
import gitHub from '../images/icons/github-mark.png'
import linkedIn from '../images/icons/linkedin_icon.png'
import resumeIcon from '../images/icons/icons8-cv-50.png'


import { useEffect, useRef } from 'react'
import gsap from 'gsap'


const Hero = () => {
  let hero = useRef(null)
  useEffect(() => {
    gsap.to(hero.current, { opacity: 1, duration: 4 })
  }, [])
  return (
    <div id="hero" ref={hero} style={{ opacity: 0 }} className='bg-transparent d-flex flex-column justify-content-center'>
      <HeroInfo />

    </div>
  )
}

const HeroInfo = () => {
  useEffect(() => {
    gsap.utils.toArray("#hero-info img").forEach(icon => {

      icon.addEventListener("mouseover", () => gsap.to(icon, { scale: 1.3 }))
      icon.addEventListener("mouseout", () => gsap.to(icon, { scale: 1 }))
    }
    )
  }, [])
  return (
    <article id="hero-info" className="p-5">
      <h1 className="">Welcome!</h1>

      <p>I'm a junior web developer!</p>

      <a className = "me-2" href="https://github.com/Crisarchero"><img src={gitHub} alt="Github" title = "Github" /></a>

     <a className = "mx-2" href="https://www.linkedin.com/in/janell-brown-b5895026a/"><img src={linkedIn} alt="LinkedIn" title = "LinkedIn"/></a>
      <a className = " mx-2"
      href = "https://janellresume.tiiny.site/">
      <img src = {resumeIcon} alt = "Resume" title = "My Resume"></img></a>
    </article>
  )
}
export default Hero