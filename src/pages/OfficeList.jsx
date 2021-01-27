import React, { useState, useEffect } from 'react';
import { Error404, Loader } from '../components';
import { useMutation, useQuery } from '@apollo/client';
import { OfficeTabel } from '../components';
import { office, user } from '../query';

export default function OfficeList() {
  const { data: offices, loading, error } = useQuery(office.GET_ALL_OFFICE);
  const {
    data: userPosition,
    loading: userPositionLoading,
    error: userPositionError,
  } = useQuery(user.GET_USER_POSITION);
  const cariJarak = (lokasiUser, lokasiKantor) => {
    let x = Math.abs(lokasiUser[0] - lokasiKantor[0]);
    let y = Math.abs(lokasiUser[1] - lokasiKantor[1]);
    x = Math.pow(x, 2);
    y = Math.pow(y, 2);
    return Math.sqrt(x + y);
  };
  if (loading || userPositionLoading) return <Loader />;
  if (error || userPositionError) return <Error404 />;
  const lokasiUser = userPosition.getUserPosition;
  let sortedOffice = JSON.parse(JSON.stringify(offices.offices));
  sortedOffice.forEach((element) => {
    const lokasiKantor = [element.latitude, element.longitude];
    element['jarak'] = cariJarak(lokasiUser, lokasiKantor);
  });
  sortedOffice.sort((a, b) => a.jarak - b.jarak);
  const filtPengrajin = sortedOffice.filter((e) => e.category === 'pengrajin');
  const filtPengepul = sortedOffice.filter((e) => e.category === 'pengepul');
  return (
    <>
      {/** Pengepul */}
      <section className='pb-20 bg-gray-300 mt-10'>
        <div className='flex flex-wrap items-center'>
          <div className='w-full md:w-8/12 px-4 mr-auto ml-auto'>
            <div className='flex justify-center my-20'>
              <div className='flex flex-col w-full p-8 text-gray-800 pin-r pin-y md:w-4/5 lg:w-4/5'>
                <h1 className='text-xl'>PENGEPUL</h1>
                <table className='w-full shadow-lg rounded'>
                  <thead>
                    <tr className='text-center bg-emerald-200 border-b border-grey uppercase'>
                      <th className=' px-2 py-4 hidden md:table-cell  text-xs text-gray-700'>
                        Name
                      </th>
                      <th className='hidden md:table-cell text-xs text-gray-700'>
                        Address
                      </th>
                      <th className='hidden md:table-cell text-xs text-gray-700'>
                        Phone Number
                      </th>
                      <th className='hidden md:table-cell text-xs text-gray-700'>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  {filtPengepul.map((office) => {
                    return <OfficeTabel key={office.id} office={office} />;
                  })}
                </table>
              </div>
            </div>
          </div>

          <div className='w-full md:w-4/12 px-4 mr-auto ml-auto mt-5'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 bg-white-600 rounded-lg '>
              <img
                alt='...'
                src='https://cdn.discordapp.com/attachments/803847554725838858/803849026327150602/pengepul.png'
                className='w-full align-middle rounded-t-lg'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='relative py-20'>
        <div
          className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
          style={{ height: '80px', transform: 'translateZ(0)' }}
        >
          <svg
            className='absolute bottom-0 overflow-hidden'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          >
            <polygon
              className='text-white fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>

        <div className='container mx-auto px-4'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full md:w-4/12 ml-auto mr-auto'>
              <img
                alt='...'
                className='max-w-full rounded-lg'
                src='https://cdn.discordapp.com/attachments/803847554725838858/803851214751006770/pengrajin.png'
              />
            </div>
            <div className='w-full md:w-8/12 ml-auto mr-auto'>
              <div className='md:pr-12'>
                <div className='flex justify-center my-20'>
                  <div className='flex flex-col w-full pin-r pin-y md:w-4/5 lg:w-4/5'>
                    <h1 className='text-xl'>PENGRAJIN</h1>
                    <table className='w-full shadow-lg rounded'>
                      <thead>
                        <tr className='text-center bg-gray-300 border-b border-grey uppercase'>
                          <th className=' px-2 py-4 hidden md:table-cell  text-xs text-gray-700'>
                            Name
                          </th>
                          <th className='hidden md:table-cell text-xs text-gray-700'>
                            Address
                          </th>
                          <th className='hidden md:table-cell text-xs text-gray-700'>
                            Phone Number
                          </th>
                          <th className='hidden md:table-cell text-xs text-gray-700'>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      {filtPengrajin.map((office) => {
                        return <OfficeTabel key={office.id} office={office} />;
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** Pengrajin */}
    </>
  );
}
