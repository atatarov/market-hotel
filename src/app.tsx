import { MainPage } from './pages/main-page/main-page';
import { OfferPage } from './pages/offer-page/offer-page';
import { AuthPage } from './pages/auth-page/auth-page';
import { FavoritesPage } from './pages/favorites-page/favorites-page';
import { PrivateRoute } from './components/private-route/private-route';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from './const';
import { IReview } from './interfaces/interfaces';

interface IAppScreenProps {
  reviews: IReview[];
}

function App({ reviews }: IAppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route
          path={AppRoute.Room}
          element={<OfferPage reviews={reviews} />}
        />
        <Route path={AppRoute.SignIn} element={<AuthPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
