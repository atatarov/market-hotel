import { getIcon } from './utils/getIcon';

export const URL_MARKER_DEFAULT = './img/pin.svg';
export const URL_MARKER_CURRENT = './img/pin-active.svg';

export const defaultCustomIcon = getIcon(URL_MARKER_DEFAULT);
export const currentCustomIcon = getIcon(URL_MARKER_CURRENT);
