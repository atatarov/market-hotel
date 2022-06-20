import { IOffer } from '../interfaces/interfaces';
import { apartamentDict } from '../const';

const one: IOffer = {
  bedrooms: 5,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: [
    'Heating',
    'Kitchen',
    'Cable TV',
    'Washing machine',
    'Coffee machine',
    'Dishwasher',
    'Table',
  ],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: '3',
    isPro: true,
    name: 'Angelina',
  },
  id: '1',
  images: [
    'img/room.jpg',
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg',
    'img/studio-01.jpg',
    'img/apartment-01.jpg',
  ],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/room.jpg',
  price: 120,
  rate: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: apartamentDict['apartment'],
};

const two: IOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Sofa'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: '6',
    isPro: false,
    name: 'Veronika',
  },
  id: '2',
  images: [
    'img/room.jpg',
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg',
    'img/studio-01.jpg',
    'img/apartment-01.jpg',
  ],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 59.35514938496378,
    longitude: 4.85309666406198,
    zoom: 8,
  },
  maxAdults: 3,
  previewImage: 'img/room.jpg',
  price: 1500,
  rate: 3.9,
  title: 'Beautiful & luxurious studio at great location',
  type: apartamentDict['hotel'],
};

const three: IOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: [
    'Heating',
    'Kitchen',
    'Cable TV',
    'Washing machine',
    'Coffee machine',
    'Dishwasher',
  ],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: '3',
    isPro: true,
    name: 'Angelina',
  },
  id: '3',
  images: [
    'img/room.jpg',
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg',
    'img/studio-01.jpg',
    'img/apartment-01.jpg',
  ],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    zoom: 8,
  },
  maxAdults: 8,
  previewImage: 'img/apartment-03.jpg',
  price: 350,
  rate: 2.7,
  title: 'Beautiful & luxurious studio at great location',
  type: apartamentDict['apartment'],
};

const four: IOffer = {
  bedrooms: 12,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: [
    'Heating',
    'Kitchen',
    'Cable TV',
    'Washing machine',
    'Coffee machine',
    'Dishwasher',
  ],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: '9',
    isPro: false,
    name: 'Elena',
  },
  id: '4',
  images: [
    'img/room.jpg',
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg',
    'img/studio-01.jpg',
    'img/apartment-01.jpg',
  ],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 8,
  },
  maxAdults: 2,
  previewImage: 'img/apartment-03.jpg',
  price: 990,
  rate: 4.3,
  title: 'Beautiful & luxurious studio at great location',
  type: apartamentDict['house'],
};

export const offers: IOffer[] = [one, two, three, four];
