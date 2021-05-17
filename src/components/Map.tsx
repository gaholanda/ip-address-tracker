import { useRef, useEffect } from 'react';
import Leaflet from 'leaflet';
import MapDiv from '../styles/components/map';

import 'leaflet/dist/leaflet.css';

function Map() {
  const refMap = useRef(null);

  useEffect(() => {
    const map = Leaflet.map(refMap.current).setView([-15.77972, -47.92972], 8);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);

  return <MapDiv ref={refMap}></MapDiv>;
}

export default Map;
