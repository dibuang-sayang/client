import { Fragment } from 'react';
import { ProductCard } from './index';
import { product } from '../query';
import { useQuery } from '@apollo/client';
import Loader from './Loader';
import Error404 from './Error404';

export default function MarketHome(props) {
  const { loading, error, data: products } = useQuery(product.FIND_ALL_PRODUCT);

  if (loading) return <Loader />
  if (error) return <Error404 />
  return (
    <Fragment>
      <div className="flex flex-wrap -m-4">
        {products.products.map((product) => {
          return <ProductCard product={product} key={product.id}></ProductCard>;
        })}
      </div>

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
    </Fragment>
  );
}
