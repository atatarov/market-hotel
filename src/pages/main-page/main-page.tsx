import { IOffer } from '../../interfaces/interfaces';
import { Header } from './components/header';
import { MainWrapper } from './components/main-wrapper';

interface IMainPageProps {
  placeCount: string;
  offers: IOffer[];
}

export function MainPage({ placeCount, offers }: IMainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <MainWrapper placeCount={placeCount} offers={offers} />
    </div>
  );
}
