import React from 'react'
import './iss-map-location.css'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'

const IssMapLocation = () => {

  

  return (
    <div style={{ height: '100%', width: '100%' }} id="Iss-map location">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyABWPKtKCYlTKKBbHY6PReiBB99aR2lJzY' }}
        defaultCenter={{ lat: 20.95, lng: 30.33}}
        defaultZoom={5}
      >
        <MapMarker
          lat={20.955413}
          lng={30.337844}
        />
      </GoogleMapReact>
      <a target="_blank" href="https://icons8.com/icon/13800/marker">Marker</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </div>
  )
}

export default IssMapLocation
