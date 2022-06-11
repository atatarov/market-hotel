import { IReview } from '../interfaces/interfaces';
import { formatDate } from '../utils';

export const review: IReview = {
  avatar: '',
  name: 'Kolya',
  rate: 4.8,
  date: formatDate(new Date()),
  text: `A quiet cozy and picturesque that hides behind
    a river by the unique lightness of Amsterdam. The building
    s green and from 18th century.`,
};
