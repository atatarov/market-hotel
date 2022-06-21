import { CardType } from '../../const';
import { IOffer } from '../../interfaces/interfaces';
import { activeOffer } from '../../store/action';
import { useAppDispatch } from '../../store/hooks';
import { PlaceCard } from '../place-card/place-card';

interface IPlacesBoardProps {
  offers: IOffer[];
  placeCount: string;
  city: string;
}

export function PlacesBoard({
  offers,
  placeCount,
  city,
}: IPlacesBoardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onSetActiveCard = (offer: IOffer) => {
    dispatch(activeOffer(offer));
  };

  const placeCards = offers.map((offer) => (
    <PlaceCard
      onSetActiveCard={onSetActiveCard}
      key={offer.id}
      offer={offer}
      cardType={CardType.Cities}
    />
  ));

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {placeCount} places to stay in {city}
      </b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>
            Popular
          </li>
          <li className="places__option" tabIndex={0}>
            Price: low to high
          </li>
          <li className="places__option" tabIndex={0}>
            Price: high to low
          </li>
          <li className="places__option" tabIndex={0}>
            Top rated first
          </li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {placeCards}
      </div>
    </section>
  );
}
