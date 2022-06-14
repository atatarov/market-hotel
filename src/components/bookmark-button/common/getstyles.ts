import { BookmarkStyle, ISize } from '../../../interfaces/interfaces';

export const getBookmarkStyles = (isActive: boolean, isLarge?: boolean): BookmarkStyle => {

  const bookmarkProps = isLarge ? {
    hiddenText: 'In bookmarks',
    size: { width: '31', height: '33' } as ISize,
    image: 'property__bookmark-icon',
  } : {
    hiddenText: 'To bookmarks',
    size: { width: '18', height: '19' } as ISize,
    image: 'place-card__bookmark-icon',
  };

  const bookmarkStateClass = isActive ? 'place-card__bookmark-button--active' : '';
  const bookmarkSizeClass = isLarge ?  'property' : 'place-card';

  const buttonClassName = `${bookmarkSizeClass}__bookmark-button ${bookmarkStateClass} button`;

  return {
    buttonClassName,
    ...bookmarkProps,
  } as BookmarkStyle;
};
