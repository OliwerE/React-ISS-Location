import React from 'react'
import './your-name-response.css'

const YourNameResponse = ({ textBeforeName, name, textAfterName }) => {
  return (
    <>
      <h1>{textBeforeName + name + textAfterName}</h1>
    </>
  )
}

export default YourNameResponse
