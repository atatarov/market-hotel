export interface IReview {
  avatar: string;
  name: string;
  rate: number;
  date: Date;
  text: string;
}

export interface ILocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface ICity {
  location: ILocation;
  name: string;
}

export interface IHost {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export interface IOffer {
  bedrooms: number;
  city: ICity;
  description: string;
  goods: string[];
  host: IHost;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: ILocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rate: number;
  title: string;
  type: string;
}

export type IRateFragment = {
  value: string;
  id: string;
}
