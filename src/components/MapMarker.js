import React from 'react'
import image from '../img/icons8-marker-48.png'

const MapMarker = ({ title }) => {
  return (
    <>
      <img src={image} width="20" height="20" alt="Location" title={title} />
    </>
  )
}

export default MapMarker
