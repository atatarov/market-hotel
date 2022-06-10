import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteGroups = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

export function PrivateRoute(props: PrivateRouteGroups): JSX.Element {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth
    ? children
    :<Navigate to={AppRoute.SignIn} />;
}
