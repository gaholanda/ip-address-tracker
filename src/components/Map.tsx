import React, { useContext, useState, useEffect } from 'react';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { AppContext } from '../contexts/AppContext';
import MapDiv from '../styles/components/map';

import 'leaflet/dist/leaflet.css';

function Map() {
  const [map, setMap] = useState(null);
  const { info } = useContext(AppContext);
  const markerIcon = Leaflet.icon({
    iconUrl: 'images/icon-location.svg',
    iconAnchor: [15, 40],
    iconSize: [30, 40],
  });

  useEffect(() => {
    if (map) {
      map.setView(
        [info.location?.lat ?? 0, info.location?.lng ?? 0],
        map.getZoom()
      );
    }
  }, [info]);

  return (
    <MapDiv>
      <MapContainer
        center={[info.location?.lat ?? 0, info.location?.lng ?? 0]}
        zoom={12}
        scrollWheelZoom={true}
        whenCreated={(map) => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[info.location?.lat ?? 0, info.location?.lng ?? 0]}
          icon={markerIcon}
        />
      </MapContainer>
    </MapDiv>
  );
}

export default Map;
