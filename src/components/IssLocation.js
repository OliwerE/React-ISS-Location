import React, { useState, useEffect } from 'react'
import './iss-location.css'
import IssCoordinates from './IssCoordinates'
import IssMapLocation from './IssMapLocation'

const IssLocation = () => {
  const [loaded, setLoaded] = useState(false)
  const [issLocation, setIssLocation] = useState({ longitude: null, latitude: null })

  const [showLocation, setShowLocation] = useState(false)
  const [showMap, setShowMap] = useState(false)

  useEffect(() => {
    fetch('http://api.open-notify.org/iss-now.json').then(res => {
      return res.json()
    }).then(json => {
      const { longitude, latitude } = json.iss_position
      console.log(longitude, latitude)
      setIssLocation({ longitude, latitude })
      setLoaded(true)
    }).catch(err => {
      console.error(err)
    })
  }, [])

  const handleShowMap = () => {
    if (showMap === false) {
      setShowMap(true)
    }
  }

  const handleOnGetLocation = () => {
    setShowLocation(true)
  }

  const userQuestion = (
    <>
      <h1>Do you want to know the current location of the international space station?</h1>
      <button onClick={handleOnGetLocation}>Tell Me!</button>
    </>
  )

    const issData = (
      <>
        {showMap ? <IssMapLocation issLocation={issLocation} /> : <IssCoordinates showMap={handleShowMap} issLocation={issLocation} />}
      </>
    )

  return (
    <>
      {loaded && (showLocation ? issData : userQuestion)}
    </>
  )
}

export default IssLocation
