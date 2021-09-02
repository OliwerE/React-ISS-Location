import React from 'react'
import './your-name-form.css'

const YourNameForm = ({ submitForm }) => {
  return (
    <>
      <form onSubmit={submitForm}>
        What's your name?* <input id="name" type="text" minLength="1" placeholder="Name" required/>
        <input type="submit" value="Send" />
      </form>
    </>
  )
}

export default YourNameForm
