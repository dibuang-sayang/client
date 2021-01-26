import {
  FooterBar,
  SidebarMarket,
  MarketHome,
  ProductDetail,
  ProductAdd,
} from '../components';
import { product } from '../query';
import { useQuery } from '@apollo/client';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useEffect } from 'react';

export default function Market() {
  const { loading, error, data: products, refetch } = useQuery(
    product.FIND_ALL_PRODUCT
  );
  let { path, url } = useRouteMatch();
  console.log(path);

  useEffect(() => {
    refetch()
  } , [products])
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error !!!</h1>;
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-row my-20">
        <div className="w-3/12 bg-gray-200">
          <SidebarMarket />
        </div>
        <div className="w-9/12 container px-5 py-24 mx-auto">
          <Switch>
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
