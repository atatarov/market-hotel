import { getBookmarkStyles } from './common/getstyles';

type BookmarkButtonProps = {
    isActive: boolean;
    isLarge?: boolean;
}

export function BookmarkButton({isActive, isLarge}: BookmarkButtonProps): JSX.Element {
  const { buttonClassName, image, size, hiddenText } = getBookmarkStyles(isActive, isLarge);

  return (
    <button className={buttonClassName} type="button">
      <svg className={image} width={size.width} height={size.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{hiddenText}</span>
    </button>
  );
}
