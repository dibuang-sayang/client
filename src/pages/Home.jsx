import { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import { Error404, Hero, HeroMarketHome, Loader } from '../components';
import { FooterBar } from '../components';
import { useQuery } from '@apollo/client';
import { office, user } from '../query';
import { startChat } from '../config/firestore';
import { useHistory } from 'react-router-dom';
import { pengepul, pengrajin } from '../config/utils';
import { userPositionVar } from '../cache';

export default function Home() {
  const [position, setPosition] = useState([6.2088, 106.8456]);
  const { data: dataCurrentUser } = useQuery(user.GET_CURRENT_USER);
  const history = useHistory();
  const { data: dataOffices, loading, error, refetch } = useQuery(
    office.GET_ALL_OFFICE
  );
  const [localOffices, setLocalOffices] = useState({ offices: [] });
  useEffect(() => {}, [dataCurrentUser]);
  useEffect(() => {
    if (dataOffices) {
      setLocalOffices(dataOffices);
      refetch();
    }
  }, [dataOffices]);
  const LocationMarker = () => {
    const map = useMapEvents({
      locationfound(e) {
        setPosition(e.latlng);
        userPositionVar([e.latlng.lat, e.latlng.lng]);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  const chatTriggerHandler = (emailOffice, emailUser) => {
    startChat(emailOffice, emailUser);
    history.push(`/chat/${emailOffice}`);
  };

  if (loading) {
    return <Loader />;
  }
  if (error) return <Error404 error={error} />;
  return (
    <div>
      <Hero />
      {/* <section class="text-gray-600 body-font mb-16">
        {currentUserVar.firstName &&(
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-11/12 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                Bergabung untuk mencari Anggota, Pengepul, ataupun Pengrajin di
                sekitar Anda. Mulai langkah sekarang untuk berkontribusi
                menyelamatkan bumi.
              </h1>
              <button class="flex-shrink-0 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mt-10 sm:mt-0">
                Daftar
              </button>
            </div>
          </div>
        )}

        </section> */}
      {/* Produk Pasar Dummy */}
      <HeroMarketHome />

      <div className="flex flex-col w-full justify-center text-center">
        {/* {[...Array(1)].map((el, i) => {
            return <ProductHomepage key={i} />;
          })} */}
        <span className="text-8xl w-full font-black text-center mt-24 text-gray-300">
          CARI PENGEPUL DAN PENGRAJIN DI SEKITAR ANDA
        </span>
        <div className="flex w-full text-center justify-center mt-4">
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {/* Map Display */}

      <div className="box-border w-full flex justify-center my-8 mt-16">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          whenCreated={(map) => {
            map.locate();
          }}
          style={{ height: '35rem', zIndex: 0 }}
        >
          <TileLayer
            className="w-full h-full"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {localOffices.offices.map((el, i) => {
            if (el.category === 'pengrajin') {
              return (
                <Marker
                  position={[el.latitude, el.longitude]}
                  key={i}
                  icon={pengrajin}
                >
                  <Popup>
                    <div className="flex flex-col w-60 h-32 relative gap-1">
                      <div className="">{el.category.toUpperCase()}</div>
                      <div className="font-extrabold tracking-widest">
                        {el.User?.firstName} {el.User?.lastName}
                      </div>
                      <div>{el.phoneNumber}</div>
                      <div>{el.address}</div>
                      {el.User &&
                      el.User.email !== dataCurrentUser.getCurrentUser.email ? (
                        <button
                          className="py-2 px-6 bg-green-500 hover:bg-green-800 hover:text-white absolute bottom-0 right-0"
                          onClick={() => {
                            chatTriggerHandler(
                              el.User.email,
                              dataCurrentUser.getCurrentUser.email
                            );
                          }}
                        >
                          chat
                        </button>
                      ) : (
                        <div>yours</div>
                      )}
                    </div>
                  </Popup>
                </Marker>
              );
            } else {
              return (
                <Marker
                  position={[el.latitude, el.longitude]}
                  key={i}
                  icon={pengepul}
                >
                  <Popup>
                    <div className="flex flex-col w-60 h-32 relative gap-1">
                      <div className="">{el.category.toUpperCase()}</div>
                      <div className="font-extrabold tracking-widest">
                        {el.User?.firstName} {el.User?.lastName}
                      </div>
                      <div>{el.phoneNumber}</div>
                      <div>{el.address}</div>
                      {el.User &&
                      el.User.email !== dataCurrentUser.getCurrentUser.email ? (
                        <button
                          className="py-2 px-6 bg-green-500 hover:bg-green-800 hover:text-white absolute bottom-0 right-0"
                          onClick={() => {
                            chatTriggerHandler(
                              el.User.email,
                              dataCurrentUser.getCurrentUser.email
                            );
                          }}
                        >
                          chat
                        </button>
                      ) : (
                        <div>yours</div>
                      )}
                    </div>
                  </Popup>
                </Marker>
              );
            }
          })}
          <LocationMarker />
        </MapContainer>
      </div>
      <FooterBar />
    </div>
  );
}
