import { ICardTypeProps } from './ICardTypeProps';

export interface IPlaceCardStyle {
  id: string;
  cardTypeProps: ICardTypeProps;
  premiumElement: JSX.Element | null;
  rateInPercentage: string;
  previewImage: string;
  price: number;
  isFavorite: boolean;
  title: string;
  type: string;
}
