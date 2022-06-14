import { MainPage } from '../main-page/main-page';
import { OfferPage } from '../offer-page/offer-page';
import { AuthPage } from '../auth-page/auth-page';
import { FavoritesPage } from '../favorites-page/favorites-page';
import { PrivateRoute } from '../private-route/private-route';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { IOffer, IReview } from '../../interfaces/interfaces';

type AppScreenProps = {
  placeCount: string;
  offers: IOffer[];
  reviews: IReview[];
}

function App(props: AppScreenProps): JSX.Element {
  const { placeCount, offers, reviews } = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offers={offers} placeCount={placeCount}/>}
        />
        <Route
          path={AppRoute.Room}
          element={<OfferPage offers={offers} reviews={reviews}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<AuthPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
