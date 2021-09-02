import React from 'react'
import './iss-coordinates.css'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'

const IssMapLocation = ({ issLocation, showCoordinates, refreshIssLocation }) => {
  const {longitude, latitude } = issLocation

  return (
    <div style={{ height: '100%', width: '100%' }} id="Iss-map location">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyABWPKtKCYlTKKBbHY6PReiBB99aR2lJzY' }}
        center={{ lat: latitude, lng: longitude}}
        defaultZoom={2}
      >
        <MapMarker
          lat={latitude}
          lng={longitude}
          title={`Latitude: ${latitude}, Longitude: ${longitude}`}
        />
      </GoogleMapReact>
      <a target="_blank" without="true" rel="noreferrer" href="https://icons8.com/icon/13800/marker">Marker</a> icon by <a target="_blank" without="true" rel="noreferrer" href="https://icons8.com">Icons8</a>
      <br/>
      <button id="show-coordinates-btn" className="iss-coordinates-btn" onClick={() => showCoordinates()}>Show coordinates</button>
      <button id="refresh-coordinates-btn" className="iss-coordinates-btn" onClick={() => refreshIssLocation()}>Refresh</button>
    </div>
  )
}

export default IssMapLocation
