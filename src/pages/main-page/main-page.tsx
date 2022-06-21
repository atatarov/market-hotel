import { Header } from './components/header';
import { MainWrapper } from './components/main-wrapper';

export function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <MainWrapper />
    </div>
  );
}
