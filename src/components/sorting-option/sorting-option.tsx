import { SortType } from '../../const';
import { sortOffers } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export interface ISortingOptionProps {
  title: string;
  type: SortType;
  onClosed: () => void;
}

export function SortingOption({
  title,
  type,
  onClosed,
}: ISortingOptionProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeSortType = useAppSelector((state) => state.sortType);

  const optionActiveClass =
    activeSortType === type ? 'places__option--active' : '';

  return (
    <li
      className={`places__option ${optionActiveClass}`}
      tabIndex={0}
      onClick={() => {
        dispatch(sortOffers(type));
        onClosed();
      }}
    >
      {title}
    </li>
  );
}
