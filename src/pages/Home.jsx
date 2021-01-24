import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Hero, ProductHomepage } from '../components';
import dummyData from '../assets/dummy-data-pengepul.json';
import { axios } from '../config';

export default function Home() {
  const [position, setPosition] = useState();

  useEffect(() => {
    axios.get('http://ip-api.com/json/?fields=61439').then((data) => {
      // console.log(data.data.lat);
      setPosition([data.data.lat, data.data.lon]);
    });
  }, [position]);
  return (
    <div>
      <Hero />
      {/* Produk Pasar Dummy */}
      <div className="flex flex-row w-full justify-center">
        {[...Array(3)].map((el, i) => {
          return <ProductHomepage key={i} />;
        })}
        {position}
      </div>
      {/* Map Display */}
      <div className="box-border w-full flex justify-center my-8">
        {position && (
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
        )}
      </div>
    </div>
  );
}
