import React, { useState } from 'react'
import './iss-location.css'
import IssCoordinates from './IssCoordinates'
import IssMapLocation from './IssMapLocation'

const IssLocation = () => {
  const [getLocation, setGetLocation] = useState(false)
  const [showMap, setShowMap] = useState(false)

  const handleShowMap = () => {
    if (showMap === false) {
      setShowMap(true)
    }
  }

  const handleOnGetLocation = () => {
    setGetLocation(true)
  }

  const userQuestion = (
    <>
      <h1>Do you want to know the current location of the international space station?</h1>
      <button onClick={handleOnGetLocation}>Tell Me!</button>
    </>
  )

    const issData = (
      <>
        {showMap ? <IssMapLocation /> : <IssCoordinates showMap={handleShowMap} />}
      </>
    )

  return (
    <>
      {getLocation ? issData : userQuestion}
    </>
  )
}

export default IssLocation
