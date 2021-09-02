import React, { useState } from 'react'
import './iss-location.css'
import RenderIssLocation from './RenderIssLocation'

const IssLocation = () => {
  const [getLocation, setGetLocation] = useState(false)

  const handleOnGetLocation = () => {
    setGetLocation(true)
  }

  const userQuestion = (
    <>
      <h1>Do you want to know the current location of the international space station?</h1>
      <button onClick={handleOnGetLocation}>Tell Me!</button>
    </>
  )
  return (
    <>
      {getLocation ? <RenderIssLocation /> : userQuestion}
    </>
  )
}

export default IssLocation
