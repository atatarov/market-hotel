import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../store/hooks';

export function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((store) => store.authStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to={AppRoute.Main}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={AppRoute.Favorites}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {authorizationStatus === AuthorizationStatus.Auth ? (
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  ) : (
                    <span className="header__login">Sign in</span>
                  )}
                </Link>
              </li>
              {authorizationStatus === AuthorizationStatus.Auth && (
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.SignIn}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
