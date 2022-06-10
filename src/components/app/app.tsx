import { MainScreen } from '../main-screen/main-screen';
import { OfferScreen } from '../offer-screen/offer-screen';
import { AuthScreen } from '../auth-screen/auth-screen';
import { FavoritesScreen } from '../favorites-screen/favorites-screen';
import { PrivateRoute } from '../private-route/private-route';
import { NotFoundScreen } from '../not-found-screen/not-found-screen';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type AppScreenProps = {
  placeCount: string;
}

function App(props: AppScreenProps): JSX.Element {
  const {placeCount} = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen placeCount={placeCount}/>}
        />
        <Route
          path={AppRoute.Room}
          element={<OfferScreen/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<AuthScreen/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
