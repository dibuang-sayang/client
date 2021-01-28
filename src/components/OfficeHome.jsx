import { Fragment, useEffect } from 'react';
import { ProductCard } from './index';
import { useQuery } from '@apollo/client';
import { office as OfficeQuery, user } from '../query';
import { useHistory } from 'react-router-dom';
import Loader from './Loader';
import Error404 from './Error404';

export default function OfficeHome(props) {
  const history = useHistory();
  const { data, error, loading, refetch } = useQuery(
    OfficeQuery.GET_OFFICE_BY_ID,
    {
      errorPolicy: 'all',
      context: {
        headers: {
          token: localStorage.getItem('token'),
        },
      },
    }
  );

  const { data: currentUser, loading: loadingCurrentUser } = useQuery(
    user.GET_CURRENT_USER
  );

  const goToAddProduct = () => {
    history.push('/pasar/produk/add');
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading || loadingCurrentUser) {
    return <Loader />
  }
  if (error) return <Error404 />
  return (
    <Fragment>
      <div className="grid grid-cols-4 gap-3">
        {data.office ? (
          data.office.Products.map((Product) => {
            return <ProductCard key={Product.id} product={Product} />;
          })
        ) : (
          <div className="w-full flex justify-center">
            <span className="text-4xl my-80">BELUM ADA DATA PRODUK</span>
          </div>
        )}
      </div>

      {data.office && (
        <div className="flex w-full justify-center mt-10">
          <div
            href="#"
            className="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-600 rounded-md cursor-not-allowed"
          >
            previous
          </div>

          <div
            href="#"
            className="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 rounded-md"
          >
            1
          </div>

          <div
            href="#"
            className="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 rounded-md"
          >
            2
          </div>

          <div
            href="#"
            className="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 rounded-md"
          >
            3
          </div>

          <div
            href="#"
            className="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 rounded-md"
          >
            Next
          </div>
        </div>
      )}
    </Fragment>
  );
}
