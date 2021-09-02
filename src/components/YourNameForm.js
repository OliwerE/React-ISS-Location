import React from 'react'

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
