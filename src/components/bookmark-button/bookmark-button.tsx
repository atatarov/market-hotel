import { getBookmarkStyle } from './common/getBookmarkStyle';

type BookmarkButtonProps = {
    isActive: boolean;
    isLarge?: boolean;
}

export function BookmarkButton({isActive, isLarge}: BookmarkButtonProps): JSX.Element {
  const { buttonClassName, image, size, hiddenText } = getBookmarkStyle(isActive, isLarge);

  return (
    <button className={buttonClassName} type="button">
      <svg className={image} width={size.width} height={size.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{hiddenText}</span>
    </button>
  );
}
