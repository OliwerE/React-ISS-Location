import React from 'react'

const IssCoordinates = ({ showMap, issLocation }) => {

  return (
    <>
      <p>Latitude: {issLocation.latitude}</p>
      <p>Longitude: {issLocation.longitude}</p>
      <button onClick={() => showMap()}>Show on map</button>
    </>
  )
}

export default IssCoordinates
