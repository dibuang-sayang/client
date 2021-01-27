import {
  FooterBar,
  SidebarMarket,
  MarketHome,
  ProductDetail,
  ProductAdd,
  ProductEdit,
  Error404,
  Loader,
} from '../components';
import { product } from '../query';
import { useQuery } from '@apollo/client';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useEffect } from 'react';
import { GuardedRoute } from 'react-router-guards';

export default function Market() {
  const { loading, error, data: products, refetch } = useQuery(
    product.FIND_ALL_PRODUCT
  );
  const { path } = useRouteMatch();

  useEffect(() => {
    refetch();
  }, [products, refetch]);
  if (loading) return <Loader />
  if (error) return <Error404 />
  return (
    <section className="text-gray-600 body-font">
      <div
        className="h-96 w-full bg-cover bg-center mt-16 overflow-hidden"
        style={{
          backgroundImage:
            'url(https://cdn.discordapp.com/attachments/803847554725838858/804023972286955520/workshop.png)',
        }}
      >
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-70">
          <div className="text-center flex flex-col">
            <span className="text-6xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-indigo-300 shadow-inner">
              Barang Sampah jadi Berkah
            </span>
            <span className="text-white font-bold tracking-wider text-4xl shadow-2xl">
              Telusuri berbagai produk daur ulang di pasar kami!
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="w-3/12 bg-gray-200">
          <SidebarMarket />
        </div>
        <div className="w-9/12 container px-5 py-24 mx-auto">
          <Switch>
            <GuardedRoute
              path={`${path}/produk/:id/edit`}
              component={ProductEdit}
            />
            <Route path={`${path}/produk/:id`} component={ProductDetail} />
            <Route path={`${path}/add`} component={ProductAdd} />
            <Route path={path} component={MarketHome} />
          </Switch>
        </div>
      </div>
      <FooterBar />
    </section>
  );
}
