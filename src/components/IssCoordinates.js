import React from 'react'
import './iss-coordinates.css'

const IssCoordinates = ({ showMap, issLocation, refreshIssLocation }) => {

  return (
    <>
      <p>Latitude: {issLocation.latitude}</p>
      <p>Longitude: {issLocation.longitude}</p>
      <button id="show-map-btn" className="iss-coordinates-btn" onClick={() => showMap()}>Show on map</button>
      <button id="refresh-coordinates-btn" className="iss-coordinates-btn" onClick={() => refreshIssLocation()}>Refresh</button>
    </>
  )
}

export default IssCoordinates
