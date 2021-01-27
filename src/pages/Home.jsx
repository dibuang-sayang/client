import { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import { Hero, ProductHomepage, ChatBox } from '../components';
import { FooterBar } from '../components';
import { useQuery } from '@apollo/client';
import { office, user } from '../query';
import { startChat } from '../config/firestore';
import { useHistory } from 'react-router-dom';
import { pengepul, pengrajin, anggota } from '../config/utils';
import { userPositionVar, currentUserVar } from '../cache';

export default function Home() {
  const [position, setPosition] = useState([6.2088, 106.8456]);
  const { data: dataCurrentUser } = useQuery(user.GET_CURRENT_USER);
  const history = useHistory();
  const { data: dataOffices, error, loading, refetch } = useQuery(
    office.GET_ALL_OFFICE
  );
  const [localOffices, setLocalOffices] = useState({ offices: [] });
  // const { data: currentLoginUser, refetch } = useQuery(user.FIND_USER_BY_ID, {
  //   context: {
  //     headers: {
  //       token: localStorage.getItem('token'),
  //     },
  //   },
  //   onCompleted: () => {
  //     console.log('sukses');
  //   },
  // });

  // useEffect(()=> {
  //   console.log("masuk");
  //     refetch()
  // }, [])

  useEffect(() => {
    if (dataOffices) {
      console.log(dataOffices);
      setLocalOffices(dataOffices);
      refetch();
    }
  }, [dataOffices]);

  // console.log(location.state);
  // useEffect(() => {
  //   const currentUserPost = [position.lat, position.lng]
  //   if(currentUserPost[0]) {
  //     console.log(userPositionVar());
  //     userPositionVar(currentUserPost)

  //   }
  // }, [position])

  const LocationMarker = () => {
    const map = useMapEvents({
      locationfound(e) {
        setPosition(e.latlng);
        console.log(e.latlng, 'ini ');
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
    return <h1>loading..</h1>;
  } else
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
                        el.User.email !==
                          dataCurrentUser.getCurrentUser.email ? (
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
                        el.User.email !==
                          dataCurrentUser.getCurrentUser.email ? (
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
