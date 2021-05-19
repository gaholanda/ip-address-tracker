import { useContext } from 'react';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { AppContext } from '../contexts/AppContext';
import MapDiv from '../styles/components/map';

import 'leaflet/dist/leaflet.css';

function Map() {
  const { info } = useContext(AppContext);
  const markerIcon = Leaflet.icon({ iconUrl: 'images/icon-location.svg' });
  return (
    <MapDiv>
      <MapContainer
        center={[info.location.lat, info.location.lng]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[info.location.lat, info.location.lng]}
          icon={markerIcon}
        />
      </MapContainer>
    </MapDiv>
  );
}

export default Map;
