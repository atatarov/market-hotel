import { IOffer } from './interfaces/interfaces';
import { City, FavoritesOffers } from './types/types';

const formatDateFromDateType = (date: Date): string =>
  date.toLocaleDateString('default', { day: 'numeric', month: 'long' });

export const formatDate = (date: number | Date): string => {
  let formattedDate = 'unknown';
  if (date instanceof Date) {
    formattedDate = formatDateFromDateType(date);
  } else if (typeof date === 'number') {
    const newDate = new Date(date);
    formattedDate = formatDateFromDateType(newDate);
  }
  return formattedDate;
};

export const createKeyValue = (value: string, index: number): string =>
  `${index}-${value}`;

export const convertRateToPercentage = (rate: number) => `${(100 / 5) * rate}%`;

export const filter = (offers: IOffer[]): FavoritesOffers =>
  offers.reduce<FavoritesOffers>(
    (result, offer) => {
      const cityName = offer.city.name;
      result[cityName as City].push(offer);
      return result;
    },
    {
      Paris: [],
      Cologne: [],
      Brussels: [],
      Amsterdam: [],
      Hamburg: [],
      Dusseldorf: [],
    } as FavoritesOffers,
  );
