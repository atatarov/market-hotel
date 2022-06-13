export type ApartamentType = 'apartment' | 'room' | 'house' | 'hotel';

export type ApartamentDict = {
  [key in ApartamentType]: string;
};

