import React from 'react'
import './your-name-form.css'

const YourNameForm = ({ submitForm }) => {
  return (
    <div id="your-name-form">
      <form onSubmit={submitForm}>
        <label htmlFor="your-name" >What's your name?</label>
        <br />
        <input id="name" name="your-name" type="text" minLength="1" placeholder="Name" required/>
        <br />
        <input id="submit-button" type="submit" value="Continue" />
      </form>
    </div>
  )
}

export default YourNameForm
