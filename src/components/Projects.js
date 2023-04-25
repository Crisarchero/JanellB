import React, { Component } from 'react'

//GSAP
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//Images
import ProjContainer from './ProjContainer'
import activity_img from '../images/activity_generator.png'
import mynotes_img from '../images/mynotes.png'
import ourSong_img from '../images/our_song.png'
import r_p_s_img from '../images/rps.png'

export default class Projects extends Component {


  constructor(props) {
    
    super(props);
    //Refsssssssssssssssssssssssssssss
    this.containerRef = React.createRef(null)
    this.firstProjectRef = React.createRef(null)
    this.secondProjectRef = React.createRef(null)
    this.thirdProjectRef = React.createRef(null)
    this.fourthProjectRef = React.createRef(null)

    //State
    this.state = {
      showAll: true,
      counter: 0,
      viewport: window.innerWidth
    };
  }
  
  projects =
  [{
    title: "MyNotes",
    img: mynotes_img,
    tools: "MERN stack",
    description: 
    "A fullstack, digital notebook that uses the MERN stack."  
    +"  It's a bit like a private, personal blog."
    +"  It includes basic authentication and JSON Web Tokens."
    +"  Use 'guest' with the password 'easypassword' to test."
   ,
    url: "https://main--mynotebooksapp.netlify.app",
    code: "https://github.com/Crisarchero/MyNotes",
  },
  {
    title: "Rock Paper Scissors",
    img: r_p_s_img,
    tools: "HTML/CSS, JS",
    description: 
    "A rock paper scissors minigame!"
    +"  I used plain JS, HTML and CSS for this aside from GSAP."
    +"  The game goes on for as many rounds as you'd like and keeps track"
    + " of your wins and losses.",
    url: "https://crisarchero.github.io/rock_paper_scissors/",
    code: "https://github.com/Crisarchero/rock_paper_scissors",
  },
  {
    title: "OurSong",
    img: ourSong_img,
    tools: "React, Bootstrap, SCSS, HTML/CSS",
    description: "A landing page for a fictional music store." 
    +"This is a proof of concept, so none of the links actually work and are just for show."
    +"  I wanted to do a more creative kind of landing page, so the style might be a little unconventional.",
    url: "https://crisarchero.github.io/our-song/",
    code: "https://github.com/Crisarchero/our-song",
  },
  {
    title: "Activity Generator",
    img: activity_img,
    tools: "React, REST API",
    description: "A simple activity generator that uses the Bored API."
    +"  I used this project to practice making API calls and get more familiar with React."
    +"  I also used Material UI in some places, but not to a great extent.",
    url: "https://crisarchero.github.io/activityGenerator/",
    code: "https://github.com/Crisarchero/activityGenerator",
  },


  ]

  componentDidMount() {//Setting up SrollTrigger.

    gsap.to(this.containerRef.current, { duration: 3, opacity: 1, x: 0 })
    gsap.registerPlugin(ScrollTrigger)

    this.componentDidUpdate()  

  }
  componentDidUpdate() {
  
    if (this.state.showAll) { //These are all the animations for each project in list view.

      
      gsap.fromTo(this.firstProjectRef.current, { x: -200 }, {
        scrollTrigger: {
          trigger: this.firstProjectRef.current,
          start: "top 65%",
        },
        opacity: 1,
        duration: 1.5,
        x: 0
      })
      gsap.fromTo(this.secondProjectRef.current, { x: 200 }, {
        scrollTrigger: {
          trigger: this.secondProjectRef.current,
          start: "top 50%",
        },
        opacity: 1,
        duration: 1.5,
        x: 0
      })
      gsap.fromTo(this.thirdProjectRef.current, { x: -200 }, {
        scrollTrigger: {
          trigger: this.thirdProjectRef.current,
          start: "top 50%",
        },
        opacity: 1,
        duration: 1.5,
        x: 0
      })
      gsap.fromTo(this.fourthProjectRef.current, { x: 200 }, {
        scrollTrigger: {
          trigger: this.fourthProjectRef.current,
          start: "top 50%",
        },
        opacity: 1,
        duration: 1.5,
        x: 0
      })

    }
    else { //The animation for a collapsed view.
      ScrollTrigger.refresh()
      gsap.set(this.containerRef.current,{x:0})
      gsap.to(this.containerRef.current, {
        duration: 0.5, opacity: 1,
      })
    }

  }

  //Function for moving the carousel backwards.
  back = () => {
    gsap.set(this.containerRef.current, { opacity: 0 })
    if (this.state.counter > 0) {

      this.setState({ counter: this.state.counter - 1 })
    }
    else {
      this.setState({ counter: this.projects.length - 1 })
    }
  }


  //Function for moving the carousel forward.
  forward = () => {
    gsap.set(this.containerRef.current, { opacity: 0 })
    if (this.state.counter < this.projects.length - 1) {

      this.setState({ counter: this.state.counter + 1 })
    }
    else {
      this.setState({ counter: 0 })
    }
  }

  //Animations for the button.

  button_onMouseEnter({ currentTarget }) {
    gsap.to(currentTarget, {
      duration: 0.2,
      scale: 1.1,
    })
  }
  button_onMouseOut({ currentTarget }) {
    gsap.to(currentTarget, {
      duration: 0.3,
      scale: 1,
    })
  }

  //The portfolio projects.
  render() {
    return (
      <div id="projects" className="p-2">
        <h2>What I Have Worked On...</h2>
        <button id="carousel-button" className="btn btn-secondary" onClick={() => {
          gsap.set(this.containerRef.current, { opacity: 0 })
          this.setState({ showAll: !this.state.showAll })
        }} onMouseEnter={this.button_onMouseEnter} onMouseOut={this.button_onMouseOut}> {this.state.showAll ? "Collapse" : "List View"}</button>

        {this.state.showAll ?

          //The projects in list view.  Shows all of them at once.
          <div className="d-flex flex-column" >
            <ProjContainer ref={this.firstProjectRef} style={{ opacity: 0 }} project={this.projects[0]} />
            <ProjContainer ref={this.secondProjectRef} style={{ opacity: 0 }} project={this.projects[1]} />
            <ProjContainer ref={this.thirdProjectRef} style={{ opacity: 0 }} project={this.projects[2]} />
            <ProjContainer ref={this.fourthProjectRef} style={{ opacity: 0 }} project={this.projects[3]} />
          </div>

          :
          /**The projects in carousel/single view mode.*/
          <div id="project-carousel" className="d-flex" style={{ opacity: 0 }} ref={this.containerRef}>
            <button onMouseEnter={this.button_onMouseEnter} onMouseOut={this.button_onMouseOut} className="btn flex-shrink-1 align-self-center" onClick={this.back}>&lt;</button>
            <ProjContainer project={this.projects[this.state.counter]} />
            <button onMouseEnter={this.button_onMouseEnter} onMouseOut={this.button_onMouseOut} className="btn flex-shrink-1 align-self-center" onClick={this.forward}>&gt;</button>
          </div>
        }



      </div>
    )
  }
}
