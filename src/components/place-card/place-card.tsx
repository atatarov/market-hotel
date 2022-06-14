import { Link } from 'react-router-dom';
import { IOffer } from '../../interfaces/interfaces';
import { convertRateToPercentage } from '../../utils';
import { BookmarkButton } from '../bookmark-button/bookmark-button';

type PlaceCardProps = {
  offer: IOffer;
}

export function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { offer } = props;

  const premium = offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : '';

  const rateInPercentage = convertRateToPercentage(offer.rate);

  return (
    <article className="cities__place-card place-card">
      {premium}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isActive={offer.isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rateInPercentage}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#">{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
