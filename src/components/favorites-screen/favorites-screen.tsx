import { FavoritesCardScreen } from '../favorites-card-screen/favorites-card-screen';
import {Link} from 'react-router-dom';

export function FavoritesScreen(): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="#">
                    <span>Amsterdam</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                <FavoritesCardScreen />
                <FavoritesCardScreen />
              </div>
            </li>

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="#">
                    <span>Cologne</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                <FavoritesCardScreen />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
