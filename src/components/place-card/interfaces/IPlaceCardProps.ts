import { CardType } from '../../../const';
import { IOffer } from '../../../interfaces/interfaces';

export interface IPlaceCardProps {
  offer: IOffer;
  cardType: CardType;
  onSetActiveCard?: (offer: IOffer) => void;
}
