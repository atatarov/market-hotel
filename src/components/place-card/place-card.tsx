import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { BookmarkButton } from '../bookmark-button/bookmark-button';
import { getPlaceCardStyle } from './common/getPlaceCardStyle';
import { IPlaceCardProps } from './interfaces/IPlaceCardProps';

export function PlaceCard({ offer, cardType }: IPlaceCardProps): JSX.Element {
  const {
    id,
    cardTypeProps,
    premiumElement,
    rateInPercentage,
    previewImage,
    price,
    isFavorite,
    title,
    type,
  } = getPlaceCardStyle(offer, cardType);

  return (
    <article className={`${cardTypeProps.cardTypeClass} place-card`}>
      {premiumElement ? premiumElement : ''}
      <div
        className={`${cardTypeProps.wrapperTypeClass} place-card__image-wrapper`}
      >
        <Link to="/">
          <img
            className="place-card__image"
            src={previewImage}
            width={cardTypeProps.imageSize.width}
            height={cardTypeProps.imageSize.height}
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isActive={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: rateInPercentage }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.RoomId}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
