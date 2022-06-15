import { MainPage } from './pages/main-page/main-page';
import { OfferPage } from './pages/offer-page/offer-page';
import { AuthPage } from './pages/auth-page/auth-page';
import { FavoritesPage } from './pages/favorites-page/favorites-page';
import { PrivateRoute } from './components/private-route/private-route';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const';
import { IOffer, IReview } from './interfaces/interfaces';

interface IAppScreenProps {
  placeCount: string;
  offers: IOffer[];
  reviews: IReview[];
}

function App({ placeCount, offers, reviews }: IAppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offers={offers} placeCount={placeCount} />}
        />
        <Route
          path={AppRoute.Room}
          element={<OfferPage offers={offers} reviews={reviews} />}
        />
        <Route path={AppRoute.SignIn} element={<AuthPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
