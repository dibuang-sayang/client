import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from '@apollo/client'
import { user } from '../query'
import React, {useState, useEffect} from 'react'

export default function UserSetting() {

  const [localData, setLocalData] = useState({})

  const {data: currentLoginUser, error, loading} = useQuery(user.FIND_USER_BY_ID, {
    context: {
      headers: {
        token: localStorage.getItem('token')
      }
    },
    onCompleted: () =>{ 
      console.log('sukses')
    }
  })

  useEffect(() => {
    if(currentLoginUser?.user){
      console.log(currentLoginUser);
      setLocalData(currentLoginUser.user)
    }
  }, [currentLoginUser])

  const position = [-6.260676036065346, 106.78161619719772];
  return (
    <div className="flex w-full justify-center mt-24">
      <div className="flex flex-row w-11/12">
        <div className="w-1/2">
          <span className="text-2xl font-bold font-custom">
            Select Your Role
          </span>
          <div className="flex flex-row gap-2">
            <div class="max-w-xs bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-auto">
              <img
                class="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />

              <div class="py-5 text-center">
                <a
                  href="/"
                  class="block text-2xl text-gray-800 dark:text-white font-bold"
                >
                  Penyumbang
                </a>
                <span class="text-sm text-gray-700 dark:text-gray-200">
                  Kamu punya sampah untuk disumbangkan atau dijual?
                </span>
              </div>
            </div>
            <div class="max-w-xs bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-auto">
              <img
                class="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />

              <div class="py-5 text-center">
                <a
                  href="/"
                  class="block text-2xl text-gray-800 dark:text-white font-bold"
                >
                  Pengepul
                </a>
                <span class="text-sm text-gray-700 dark:text-gray-200">
                  Pendaur ulang sampah yang gitu-gitu
                </span>
              </div>
            </div>
            <div class="max-w-xs bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-auto">
              <img
                class="w-full h-40 object-cover"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />

              <div class="py-5 text-center">
                <a
                  href="/"
                  class="block text-2xl text-gray-800 dark:text-white font-bold"
                >
                  Pengrajin
                </a>
                <span class="text-sm text-gray-700 dark:text-gray-200">
                  Pengrajin sampah gitu-gitu
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center px-3">
          <span className="text-2xl font-bold font-custom">
            Input Your Location
          </span>
          <div className="w-full">
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              className="testes"
            >
              <TileLayer
                className="w-full h-full"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <div>Posisi Kamu</div>
                </Popup>
              </Marker>
              );
            </MapContainer>
            <div className="w-full flex flex-col">
              <span className="text-justify w-full text-sm">
                We are aware that location search may result in an inacurate
                position of your pin. If it happen, choose the closest location
                to you.
              </span>
              <span className="text-justify w-full text-sm">
                Pro Tip: Write your precise address on Address input to make
                sure your address is accurate
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
