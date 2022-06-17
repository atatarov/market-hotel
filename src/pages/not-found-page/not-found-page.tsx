import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export function NotFoundPage(): JSX.Element {
  return (
    <section>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Main}>Вернуться на главную</Link>
    </section>
  );
}
