import { CardType } from '../../../const';
import { IOffer } from '../../../interfaces/interfaces';
import { convertRateToPercentage } from '../../../utils';
import { IPlaceCardStyle } from '../interfaces/IPlaceCardStyle';
import { getPlaceCardProps } from './getPlaceCardProps';

export const getPlaceCardStyle = (
  offer: IOffer,
  cardType: CardType,
): IPlaceCardStyle => {
  const { previewImage, price, isFavorite, title, type, isPremium, rate } =
    offer;

  const cardTypeProps = getPlaceCardProps(cardType);

  const premiumElement = isPremium ? (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  ) : null;

  const rateInPercentage = convertRateToPercentage(rate);

  return {
    cardTypeProps,
    premiumElement,
    rateInPercentage,
    previewImage,
    price,
    isFavorite,
    title,
    type,
  } as IPlaceCardStyle;
};
