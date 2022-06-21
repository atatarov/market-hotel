import { CityBoardWrapper } from './city-board-wrapper';
import { Tabs } from './tabs';

export function MainWrapper(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <CityBoardWrapper />
    </main>
  );
}
