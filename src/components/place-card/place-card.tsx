import { Link } from 'react-router-dom';
import { CardType } from '../../const';
import { IOffer } from '../../interfaces/interfaces';
import { BookmarkButton } from '../bookmark-button/bookmark-button';
import { getPlaceCardStyle } from './common/getPlaceCardStyle';

type PlaceCardProps = {
  offer: IOffer;
  cardType: CardType;
}

export function PlaceCard({ offer, cardType } : PlaceCardProps): JSX.Element {
  const {
    cardTypeProps,
    premiumElement,
    rateInPercentage,
    previewImage,
    price,
    bookmarkIsActive,
    title,
    offerType,
  } = getPlaceCardStyle(offer, cardType);

  return (
    <article className={`${cardTypeProps.cardTypeClass} place-card`}>
      {premiumElement ? premiumElement : ''}
      <div className={`${cardTypeProps.wrapperTypeClass} place-card__image-wrapper`}>
        <Link to="#">
          <img className="place-card__image"
            src={previewImage}
            width={cardTypeProps.imageSize.width}
            height={cardTypeProps.imageSize.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isActive={bookmarkIsActive}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rateInPercentage}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#">{title}</Link>
        </h2>
        <p className="place-card__type">{offerType}</p>
      </div>
    </article>
  );
}
