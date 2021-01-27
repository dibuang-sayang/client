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
  console.log(filtPengrajin, 'ini');
  console.log(filtPengepul, 'ok');

  // return (
  //   <div className='flex justify-center my-20'>
  //     <div className='flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5'>
  //       <p>{JSON.stringify(userPosition)}</p>
  //       <table className='table-auto w-full text-sm lg:text-base'>
  //         <thead>
  //           <tr className='h-12 uppercase'>
  //             <th className='text-center'>ADDRESS</th>
  //             <th className='text-center'>PHONE NUMBER</th>
  //             <th className='text-center'>CATEGORY</th>
  //           </tr>
  //         </thead>
  //         {sortedOffice.map((office) => {
  //           return <OfficeTabel key={office.id} office={office}></OfficeTabel>;
  //         })}
  //       </table>
  //     </div>
  //   </div>
  // );
  return (
		<>
			{/** Pengepul */}
      <div className='flex justify-center my-20'>
        <div className='flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5'>
          <h1 className='text-xl'>PENGEPUL</h1>
          <table className='w-full shadow-lg rounded'>
            <thead>
              <tr class='text-center bg-gray-300 border-b border-grey uppercase'>
                <th class=' px-2 py-4 hidden md:table-cell  text-sm text-gray-700'>
                  Name
                </th>
                <th class='hidden md:table-cell text-sm text-gray-700'>
                  Address
                </th>
                <th class='hidden md:table-cell text-sm text-gray-700'>
                  Phone Number
                </th>
                <th class='hidden md:table-cell text-sm text-gray-700'>
                  Category
                </th>
              </tr>
            </thead>
            {filtPengepul.map((office) => {
              return <OfficeTabel key={office.id} office={office} />;
            })}
          </table>
        </div>
      </div>
						
			{/** Pengrajin */}
      <div className='flex justify-center my-20'>
        <div className='flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5'>
          <h1 className='text-xl'>PENGRAJIN</h1>
          <table className='w-full shadow-lg rounded'>
            <thead>
              <tr class='text-center bg-gray-300 border-b border-grey uppercase'>
                <th class=' px-2 py-4 hidden md:table-cell  text-sm text-gray-700'>
                  Name
                </th>
                <th class='hidden md:table-cell text-sm text-gray-700'>
                  Address
                </th>
                <th class='hidden md:table-cell text-sm text-gray-700'>
                  Phone Number
                </th>
                <th class='hidden md:table-cell text-sm text-gray-700'>
                  Category
                </th>
              </tr>
            </thead>
            {filtPengrajin.map((office) => {
              return <OfficeTabel key={office.id} office={office} />;
            })}
          </table>
        </div>
      </div>
    </>
  );
}
