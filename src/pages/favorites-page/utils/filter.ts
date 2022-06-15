import { IOffer } from '../../../interfaces/interfaces';
import { City, FavoritesOffers } from '../../../types/types';

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
