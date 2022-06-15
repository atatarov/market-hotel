import { IReview } from '../interfaces/interfaces';

export const review: IReview = {
  avatar: 'img/avatar-max.jpg',
  name: 'Kolya',
  rate: 4.8,
  date: new Date(),
  text: `A quiet cozy and picturesque that hides behind
    a river by the unique lightness of Amsterdam. The building
    s green and from 18th century.`,
};

export const reviews: IReview[] = [review];
