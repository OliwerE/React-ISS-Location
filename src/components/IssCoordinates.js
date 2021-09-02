import React from 'react'

const IssCoordinates = ({ showMap, issLocation }) => {

  return (
    <>
      <h1>Current position of ISS:</h1>
      <p>Latitude: {issLocation.latitude}</p>
      <p>Longitude: {issLocation.longitude}</p>
      <button onClick={() => showMap()}>Show On Map</button>
    </>
  )
}

export default IssCoordinates
