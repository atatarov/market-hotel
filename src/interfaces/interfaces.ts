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

export interface IRateFragment {
  value: string;
  id: string;
}

export interface ISize {
  width: string;
  height: string;
}

export interface IBookmarkStyle {
  buttonClassName: string;
  image: string;
  size: ISize;
  hiddenText: string;
}
export interface ICardTypeProps {
  cardTypeClass: string;
  wrapperTypeClass: string;
  imageSize: ISize;
}

export interface IPlaceCardStyle {
  cardTypeProps: ICardTypeProps;
  premiumElement: JSX.Element | null;
  rateInPercentage: string;
  previewImage: string;
  price: number;
  bookmarkIsActive: boolean;
  title: string;
  offerType: string;
}
