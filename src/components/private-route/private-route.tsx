import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../store/hooks';

interface IPrivateRouteGroups {
  children: JSX.Element;
}

export function PrivateRoute({ children }: IPrivateRouteGroups): JSX.Element {
  const authorizationStatus = useAppSelector((store) => store.authStatus);

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
}
