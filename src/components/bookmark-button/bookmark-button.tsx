import { getBookmarkStyle } from './common/getBookmarkStyle';
import { IBookmarkButtonProps } from './interfaces/IBookmarkButtonProps';

export function BookmarkButton({
  isActive,
  isLarge,
}: IBookmarkButtonProps): JSX.Element {
  const { buttonClassName, image, size, hiddenText } = getBookmarkStyle(
    isActive,
    isLarge,
  );

  return (
    <button className={buttonClassName} type="button">
      <svg className={image} width={size.width} height={size.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{hiddenText}</span>
    </button>
  );
}
