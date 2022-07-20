import { CardType } from '../../const';
import { IOffer } from '../../interfaces/interfaces';
import { setActiveOffer } from '../../store/action';
import { useAppDispatch } from '../../store/hooks';
import { PlaceCard } from '../place-card/place-card';
import { PlacesSorting } from '../places-sorting/places-sorting';

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

  const onSetActiveCard = (offer: IOffer): void => {
    dispatch(setActiveOffer(offer));
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
      <PlacesSorting />
      <div className="cities__places-list places__list tabs__content">
        {placeCards}
      </div>
    </section>
  );
}
