import { CardType } from '../../../const';
import { ICardTypeProps } from '../../../interfaces/interfaces';

export const getPlaceCardProps = (cardType: CardType): ICardTypeProps => {
  const citiesProps: ICardTypeProps = {
    cardTypeClass: 'cities__place-card',
    wrapperTypeClass: 'cities__image-wrapper',
    imageSize: { width: '260', height: '200' },
  };

  switch(cardType) {
    case CardType.Near:
      return {
        cardTypeClass: 'near-places__card',
        wrapperTypeClass: 'near-places__image-wrapper',
        imageSize: citiesProps.imageSize,
      };
    case CardType.Favorites:
      return {
        cardTypeClass: 'favorites__card',
        wrapperTypeClass: 'favorites__image-wrapper',
        imageSize: {width: '150', height: '110'},
      };
    case CardType.Cities:
      return citiesProps;
    default:
      return citiesProps;
  }
};
