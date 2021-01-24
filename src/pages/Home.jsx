import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Hero, ProductHomepage } from '../components';
import dummyData from '../assets/dummy-data-pengepul.json';

export default function Home() {
  const [displayPop, setDisplayPop] = useState(null);
  const position = [-6.260676036065346, 106.78161619719772];
  return (
    <div>
      <Hero />
      {/* Produk Pasar Dummy */}
      <div className="flex flex-row w-full justify-center">
        {[...Array(3)].map((el, i) => {
          return <ProductHomepage key={i} />;
        })}
      </div>
      {/* Map Display */}
      <div className="box-border w-full flex justify-center my-8">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            className="w-full h-full"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {dummyData.map((el, i) => {
            return (
              <Marker position={el.lokasi} key={i}>
                <Popup>
                  <div>{el.nama}</div>
                </Popup>
              </Marker>
            );
          })}
          {/* {displayPop && (
          )} */}
        </MapContainer>
      </div>
    </div>
  );
}
