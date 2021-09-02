import React from 'react'
import './your-name-form.css'

const YourNameForm = ({ submitForm }) => {
  return (
    <>
      <form onSubmit={submitForm}>
        What's your name? <input id="name" type="text" placeholder="Name" />
        <input type="submit" value="Send" />
      </form>
    </>
  )
}

export default YourNameForm
