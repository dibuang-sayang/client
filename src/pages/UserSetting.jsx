import {
  TileLayer,
  Popup,
  Marker,
  MapContainer,
  useMapEvents,
} from 'react-leaflet';
import { useQuery, useMutation } from '@apollo/client';
import { user, office } from '../query';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { currentUserVar } from '../cache';
import { Error404, Loader } from '../components';

export default function UserSetting() {
  const history = useHistory();
  const [position, setPosition] = useState({ lat: '', lng: '' });
  const [localData, setLocalData] = useState({});
  const [officeData, setOfficeData] = useState({
    address: '',
    latitude: -6.260676036065346,
    longitude: 106.78161619719772,
    phoneNumber: '',
    category: '',
  });
  const [addOffice] = useMutation(office.ADD_OFFICE, {
    context: {
      headers: {
        token: localStorage.getItem('token'),
      },
    },
    errorPolicy: 'all',
    onCompleted: () => {
      history.push('/');
    },
  });

  //cek token
  const { data: currentLoginUser, error, loading } = useQuery(
    user.FIND_USER_BY_ID,
    {
      context: {
        headers: {
          token: localStorage.getItem('token'),
        },
      },
      onCompleted: () => {
        console.log('sukses');
      },
    }
  );

  //set current user
  useEffect(() => {
    if (currentLoginUser?.user) {
      setLocalData(currentLoginUser.user);
    }
  }, [currentLoginUser]);

  //marker
  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        setOfficeData({
          ...officeData,
          latitude: e.latlng.lat,
          longitude: e.latlng.lng,
        });
        setPosition(e.latlng);
      },
      locationfound(e) {
        setPosition(e.latlng);
        setOfficeData({
          ...officeData,
          latitude: e.latlng.lat,
          longitude: e.latlng.lng,
        });
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  const onChangeHandler = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setOfficeData({
      ...officeData,
      [name]: value,
    });
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    addOffice({
      variables: {
        inputOffice: {
          ...officeData,
          category: currentUserVar().role,
        },
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  if (error) return <Error404 />;
  if (loading) return <Loader />;
  return (
    <div className="flex w-full justify-center mt-24 mb-24">
      <div className="flex flex-row w-11/12 gap-3">
        <div className="flex flex-col w-1/2 justify-center">
          {currentUserVar().role == 'pengrajin' ? (
            <div className="flex flex-col px-4 text-center">
              <span className="text-2xl font-bold font-custom mb-3">
                Pengrajin
              </span>
              <span className="text-justify">
                Kami menyadari setiap sampah yang kita pikir tidak memiliki daya
                jual, ternyata memiliki nilai jual dan juga dapat menjadi
                resource baru untuk menjadi bahan untuk produk upcycle.
              </span>
            </div>
          ) : (
            <div className="flex flex-col px-4 text-center">
              <span className="text-2xl font-bold font-custom mb-3">
                Pengepul
              </span>
              <span className="text-justify">
                Apabila kalian dapat mengubah nilai sampah yang dari tidak
                ternilai menjadi sesuatu yang lebih bermanfaat bergabunglah
                bersama kami sebagai pengrajin! disini kalian juga dapat menjual
                produk upcycling anda.
              </span>
            </div>
          )}

          <img
            src="https://cdn.discordapp.com/attachments/801791591927775257/802068635224768572/artwork_8.png"
            alt="gambar"
          />
          <div className="flex flex-row gap-2"></div>
        </div>
        <div className="w-1/2 flex flex-col justify-center px-3 gap-4">
          <span className="text-2xl font-bold font-custom">
            Complete Your Information
          </span>

          <div className="w-ful">
            <form className="w-full">
              <div className="grid grid-cols-1 gap-6 mt-4">
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="username"
                  >
                    Alamat
                  </label>
                  <input
                    onChange={onChangeHandler}
                    placeholder="Alamat lengkap kantor"
                    name="address"
                    type="text"
                    className="mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="emailAddress"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    onChange={onChangeHandler}
                    placeholder="+6285xxxxxxxxxxx"
                    name="phoneNumber"
                    type="text"
                    className="mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="password"
                  >
                    Latitude
                  </label>
                  <input
                    disabled
                    id="password"
                    placeholder={officeData.latitude}
                    type="text"
                    className="mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="passwordConfirmation"
                  >
                    Longitude
                  </label>
                  <input
                    disabled
                    id="passwordConfirmation"
                    placeholder={officeData.longitude}
                    type="text"
                    className="mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
              </div>
              <div className="flex w-full justify-center flex-col mt-4">
                <span className="text-gray-700 dark:text-gray-200 mb-2">
                  Pilih Lokasi Kantormu:{' '}
                </span>
                <MapContainer
                  center={[-6.260676036065346, 106.78161619719772]}
                  zoom={13}
                  scrollWheelZoom={false}
                  whenCreated={(map) => {
                    map.locate();
                  }}
                >
                  <TileLayer
                    className="w-full h-full"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <LocationMarker />
                </MapContainer>
                <div className="w-full flex flex-col">
                  <span className="text-justify w-full text-sm">
                    We are aware that location search may result in an inacurate
                    position of your pin. If it happen, choose the closest
                    location to you.
                  </span>
                  <span className="text-justify w-full text-sm">
                    Pro Tip: Write your precise address on Address input to make
                    sure your address is accurate
                  </span>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  onClick={(e) => onClickHandler(e)}
                  className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Update Account Information
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
