import React from 'react'
import './iss-map-location.css'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'

const IssMapLocation = ({ issLocation }) => {
  const {longitude, latitude } = issLocation
  return (
    <div style={{ height: '100%', width: '100%' }} id="Iss-map location">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyABWPKtKCYlTKKBbHY6PReiBB99aR2lJzY' }}
        defaultCenter={{ lat: parseInt(latitude), lng: parseInt(longitude)}}
        defaultZoom={5}
      >
        <MapMarker
          lat={parseInt(latitude)}
          lng={parseInt(longitude)}
          title={`Latitude: ${latitude}, Longitude: ${longitude}`}
        />
      </GoogleMapReact>
      <a target="_blank" without rel="noreferrer" href="https://icons8.com/icon/13800/marker">Marker</a> icon by <a target="_blank" without rel="noreferrer" href="https://icons8.com">Icons8</a>
    </div>
  )
}

export default IssMapLocation
