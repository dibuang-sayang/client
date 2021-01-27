import React from 'react';
import { startChat } from '../config/firestore'
import {useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { user } from '../query'


export default function OfficeTable({ office }) {
	const history = useHistory()
	const { data: dataCurrentUser } = useQuery(user.GET_CURRENT_USER)
	const chatTriggerHandler = (emailOffice, emailUser) => {
		startChat(emailOffice, emailUser);
		history.push(`/chat/${emailOffice}`);
	};

  const fullName = office.User?.firstName + ' ' + office.User?.lastName;
  const { address, latitude, longitude, phoneNumber, category } = office;
  return (
    <tbody className='bg-white'>
      <tr className='accordion border-b border-grey-light hover:bg-gray-100'>
        <td className='inline-flex'>
          <span className='py-3 w-40 ml-4'>
            <p className='text-gray-800 text-sm'>{fullName.toUpperCase()}</p>
            <p className='hidden md:table-cell text-xs text-gray-500 font-medium'>
              {category.toUpperCase()}
            </p>
          </span>
        </td>
        <td className='inline-flex md:table-cell text-center'>
          <span className='py-3 w-20 text-center'>
            <p className='text-gray-800 text-sm text-center'>{address.toUpperCase()}</p>
            <p onClick={() => window.open(`https://www.google.com/maps/@?api=1&map_action=map&${latitude},${longitude}`)}
              className='hidden md:table-cell cursor-pointer text-xs text-gray-500 font-medium text-center'>
              OPEN IN GOOGLE MAPS
            </p>
          </span>
        </td>
        <td className='text-center hidden md:table-cell'>
          <p className='text-sm text-gray-700 font-medium text-center'>
            {phoneNumber.toUpperCase()}
          </p>
        </td>
        <td className='text-center'>
					<button
						onClick={() => {
							chatTriggerHandler(
								office.User?.email,
								dataCurrentUser.getCurrentUser.email
							);
						}}
						className='rounded px-2 py-2 bg-green-500 hover:bg-green-700 text-white text-md'>
            Chat!
          </button>
        </td>
      </tr>
    </tbody>
  );
}
