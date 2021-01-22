import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Hero } from '../components';
export default function Home() {
  const position = [51.505, -0.09];
  return (
    <div>
      <Hero />
      <div class="box-border">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            className="w-full h-full"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}></Marker>
        </MapContainer>
      </div>
    </div>
  );
}
