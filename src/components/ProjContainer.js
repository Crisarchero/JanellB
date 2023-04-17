import React from 'react'
import {forwardRef} from 'react'
import Buttons from './Buttons'

const ProjContainer = forwardRef((props, ref) => {
  
  return (
    <div id="project-container" ref = {ref} style = {props.style} className="shadow-sm mt-5 mb-5">
     
      {/*The project image*/}
      <figure className="container overflow-hidden p-0">
        <img className="border rounded" src={props.project.img} alt=""></img>
        <figcaption className="text-center">Main Tools:  {props.project.tools}</figcaption>
      </figure>

      {/**The project's info */}
      <div id="project-info" className="p-1 mx-3">
        <Buttons code={props.project.code} url={props.project.url} />
        <article>
          <h3>{props.project.title}:</h3>
          <p>{props.project.description}</p>
        </article>
      </div>

    </div>
  )
})

export default ProjContainer