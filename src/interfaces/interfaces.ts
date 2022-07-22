import { SortType } from '../const';

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
  id: string;
  isPro: boolean;
  name: string;
}

export interface IServerHost {
  avatarUrl: string;
  id: string;
  isPro: boolean;
  name: string;
}

export interface IOffer {
  bedrooms: number;
  city: ICity;
  description: string;
  goods: string[];
  host: IHost;
  id: string;
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

export interface IServerOffer {
  bedrooms: number;
  city: ICity;
  description: string;
  goods: string[];
  host: IServerHost;
  id: string;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: ILocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export interface IRateFragment {
  value: string;
  id: string;
}

export interface ISize {
  width: string;
  height: string;
}

export interface ISortingOption {
  title: string;
  type: SortType;
}

export interface IUserData {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
}

export interface IServerUserData {
  avatar_url: string;
  email: string;
  id: number;
  is_pro: boolean;
  name: string;
  token: string;
}
