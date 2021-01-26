import {
  FooterBar,
  SidebarMarket,
  MarketHome,
  ProductDetail,
  ProductAdd,
} from '../components';
import { product } from '../query';
import { useQuery } from '@apollo/client';
import { Switch, Route } from 'react-router-dom';

export default function Market() {
  const { loading, error, data: products } = useQuery(product.FIND_ALL_PRODUCT);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error !!!</h1>;
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-row my-20">
        <div className="w-3/12 bg-gray-200">
          <SidebarMarket />
        </div>
        <div className="w-9/12 container px-5 py-24 mx-auto">
          <ProductAdd />
          {/* <Switch>
            <Route path="/produk/:id" component={ProductDetail} />
            <Route path="/add" component={ProductAdd} />
            <Route path="/" component={MarketHome} />
          </Switch> */}
          {/* <MarketHome products={products} /> */}
        </div>
      </div>
      <FooterBar />
    </section>
  );
}
