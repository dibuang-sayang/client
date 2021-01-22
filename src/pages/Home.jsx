import { Navbar } from '../components';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
export default function Home() {
  const position = [51.505, -0.09]
  return (
    <div>
      <Navbar />
      <div class="box-border">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
