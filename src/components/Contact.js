
import { useForm, ValidationError } from '@formspree/react';
import gsap from 'gsap'
const Contact = () => {
  const [state, handleSubmit] = useForm("mbjezvor");


  //Hover animations for the button.
  function button_mouseEnter({ currentTarget }) {
    gsap.to(currentTarget, {
      scale: 1.05,
    })
  }
  function button_mouseExit({ currentTarget }) {
    gsap.to(currentTarget, {
      scale: 1,

    })
  }


  if (state.succeeded) {
    return <p>Your message was sent! Thank you!</p>;
  }

  return (
    <div id="contact">

      <h2 className="text-center">Reach Out!</h2>

      <form onSubmit={handleSubmit}>
        <label for="email">Your Name: </label>
        <input className="form-control" type="name" name="name" required />
        <label for="email">Your Email: </label>
        <input className="form-control" type="email" name="email" required />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <label for="message">Message:</label>
        <textarea className="form-control" id="message" name="message" required />

        <button className="btn btn-light w-100 mt-3"
          type="submit"
          disabled={state.submitting}
          onMouseEnter={button_mouseEnter}
          onMouseOut={button_mouseExit}>
          Send Message
        </button>

      </form>


    </div>
  )
}

export default Contact