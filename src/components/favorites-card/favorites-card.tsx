import { Link } from 'react-router-dom';
import { IOffer } from '../../interfaces/interfaces';
import { convertRateToPercentage } from '../../utils';
import { BookmarkButton } from '../bookmark-button/bookmark-button';

type FavoritesCardProps = {
  offer: IOffer;
}

export function FavoritesCard(props: FavoritesCardProps): JSX.Element {
  const {offer} = props;

  const rateInPercentage = convertRateToPercentage(offer.rate);

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src="img/room-small.jpg" width="150" height="110" alt="Place image"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
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
          <Link to="#">Wood and stone place</Link>
        </h2>
        <p className="place-card__type">Private room</p>
      </div>
    </article>
  );
}
