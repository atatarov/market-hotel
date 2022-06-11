import { IOffer } from '../interfaces/interfaces';

export type ApartamentType = 'apartment' | 'room' | 'house' | 'hotel';

export type ApartamentDict = {
  [key in ApartamentType]: string;
};

export type Offer = IOffer[];
