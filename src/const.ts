import { IRateFragment, ISortingOption } from './interfaces/interfaces';
import { ApartamentDict, CitiesDict, CitiesLocations } from './types/types';

export const apartamentDict: ApartamentDict = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

export const citiesDict: CitiesDict = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
};

export const citiesLocations: CitiesLocations = {
  Paris: {
    name: citiesDict['Paris'],
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  Cologne: {
    name: citiesDict['Cologne'],
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  Brussels: {
    name: citiesDict['Brussels'],
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  Amsterdam: {
    name: citiesDict['Amsterdam'],
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  Hamburg: {
    name: citiesDict['Hamburg'],
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  Dusseldorf: {
    name: citiesDict['Dusseldorf'],
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
};

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  RoomId = '/offer/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const rateFragments: IRateFragment[] = [
  {
    id: '5-stars',
    value: '5',
  },
  {
    id: '4-stars',
    value: '4',
  },
  {
    id: '3-stars',
    value: '3',
  },
  {
    id: '2-stars',
    value: '2',
  },
  {
    id: '1-stars',
    value: '1',
  },
];

export enum CardType {
  Cities = 'Cities',
  Near = 'Near',
  Favorites = 'Favorites',
}

export enum MapType {
  Property = 'property',
  Cities = 'cities',
}

export enum SortType {
  Popular = 'Popular',
  PriceToHigh = 'PriceToHigh',
  PriceToLow = 'PriceToLow',
  TopRated = 'TopRated',
}

export const placesSortingItems: ISortingOption[] = [
  {
    title: 'Popular',
    type: SortType.Popular,
  },
  {
    title: 'Price: low to high',
    type: SortType.PriceToHigh,
  },
  {
    title: 'Price: high to low',
    type: SortType.PriceToLow,
  },
  {
    title: 'Top rated first',
    type: SortType.TopRated,
  },
];

export enum APIRoute {
  Offers = '/hotels',
  Offer = '/hotels/{hotelId}',
  Nearby = '/hotels/{hotelId}/nearby',
  Favorite = '/favorite',
  FavoriteStatus = '/favorite/{hotelId}/{status}',
  Comments = '/comments/{hotelId}',
  Login = '/login',
  Logout = '/logout',
}
