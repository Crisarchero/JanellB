import React from 'react'
import Janell_img from '../images/Janell_Brown_img.png'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const About = () => {

  let about = useRef(null)
  useEffect(() => {
    setTimeout(() => {
        //The ScrollTrigger's animations will begin to early if ScrollTrigger loads too fast.
        //To fix the problem ScrollTrigger will load with a slight delay.
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(about.current, {
        scrollTrigger: {
          trigger: about.current,
          start: "top center",

        },
        opacity: 1,
        duration: 1,
      })
    }, 1000)

  }, [])
  return (
    <div id="about" style={{ opacity: 0 }} ref={about}>
      <h2 className="border-bottom border-5 border-primary px-1">Some Basic Stuff About Me...</h2>
      <div className = "d-flex flex-md-row flex-column align-items-center p-5">

      
        <article className = "p-5">
          <p>
            I'm a recent graduate from Collin College, who graduated with honors and an associate degree in Web and Mobile Development.
            I first discovered web development in a highschool class, and I've diven deeper into its world over the past couple of years.
            It's far more complex than I realized, but it's also fun with plenty of creative possibilities!
            My hope is to work in web development and I'm very excited to learn more!
          </p>
          <p>
            When I'm not coding, I like to spend my free time drawing, writing, and playing games.
          </p>
        </article>
      </div>

    </div>
  )
}

export default About