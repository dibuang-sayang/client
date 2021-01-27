import { Switch, useRouteMatch } from 'react-router-dom';
import {
  OfficeHome,
  ProductAdd,
  SidebarOffice,
  ProductEdit,
  FooterBar,
} from '../components';
import { GuardedRoute } from 'react-router-guards';

export default function Office() {
  const { path } = useRouteMatch();

  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-row mt-16">
        <div className="w-3/12 bg-gray-200">
          <SidebarOffice />
        </div>
        <div className="w-9/12 container px-5 mx-auto">
          <Switch>
            <GuardedRoute
              path={`${path}/produk/:id/edit`}
              component={ProductEdit}
            />
            <GuardedRoute path={`${path}/produk/add`} component={ProductAdd} />
            <GuardedRoute path={path} component={OfficeHome} />
          </Switch>
        </div>
      </div>
      <FooterBar />
    </section>
  );
}
