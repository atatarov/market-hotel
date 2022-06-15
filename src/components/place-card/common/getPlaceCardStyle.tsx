import { CardType } from '../../../const';
import { IOffer, IPlaceCardStyle } from '../../../interfaces/interfaces';
import { convertRateToPercentage } from '../../../utils';
import { getPlaceCardProps } from './getPlaceCardProps';

export const getPlaceCardStyle = (offer: IOffer, cardType: CardType): IPlaceCardStyle => {
  const cardTypeProps = getPlaceCardProps(cardType);

  const premiumElement = offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null;

  const rateInPercentage = convertRateToPercentage(offer.rate);

  return {
    cardTypeProps,
    premiumElement,
    rateInPercentage,
    previewImage: offer.previewImage,
    price: offer.price,
    bookmarkIsActive: offer.isFavorite,
    title: offer.title,
    offerType: offer.type,
  } as IPlaceCardStyle;
};
