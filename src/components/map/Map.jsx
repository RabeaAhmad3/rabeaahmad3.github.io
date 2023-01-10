import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[38.9072, -77.0369]} zoom={5} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[38.9072, -77.0369]}>
        <Popup></Popup>
      </Marker>
      <div className="map-content">
        <span>Location : Washington, DC </span>
        <br />
        <span>Email: rabeaahmad11@gmail.com</span>
      </div>
    </MapContainer>
  )
}

export default Map;