import { Link } from 'react-router-dom';

export function NotFoundPage(): JSX.Element {
  return (
    <section>
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}
