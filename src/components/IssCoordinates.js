import React from 'react'

const IssCoordinates = ({ showMap, issLocation }) => {

  return (
    <>
      <h1>Current position of the international space station:</h1>
      <p>Latitude: {issLocation.latitude}</p>
      <p>Longitude: {issLocation.longitude}</p>
      <button onClick={() => showMap()}>Show on map</button>
    </>
  )
}

export default IssCoordinates
