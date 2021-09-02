import React, { useEffect, useState } from 'react'

const RenderIssLocation = () => {
  const [loaded, setLoaded] = useState(false)
  const [issLocation, setIssLocation] = useState({ longitude: null, latitude: null})

  const handleShowOnMap = () => {
    // Load map.
  }

  useEffect(() => {
    fetch('http://api.open-notify.org/iss-now.json').then(res => {
      return res.json()
    }).then(json => {
      const { longitude, latitude } = json.iss_position
      console.log(longitude, latitude)
      setIssLocation({longitude, latitude})
      setLoaded(true)
    }).catch(err => {
      console.error(err)
    })
  }, [])

  const locationData = (
    <>
      <h1>Current position of ISS:</h1>
      <p>Latitude: {issLocation.latitude}</p>
      <p>Longitude: {issLocation.longitude}</p>
      <button onClick={handleShowOnMap}>Show On Map</button>
    </>
  )

  return (
    <>
      {loaded && locationData}
    </>
  )
}

export default RenderIssLocation
