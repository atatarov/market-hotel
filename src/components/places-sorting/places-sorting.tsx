import { useState } from 'react';
import { placesSortingItems } from '../../const';
import { createKeyValue } from '../../utils';
import { SortingOption } from '../sorting-option/sorting-option';

export function PlacesSorting(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  const optionsOpenedClass = isOpened ? 'places__options--opened' : '';

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpened(!isOpened)}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${optionsOpenedClass}`}
      >
        {placesSortingItems.map((item, index) => {
          const keyValue = createKeyValue(item.title, index);
          return (
            <SortingOption
              onClosed={() => {
                setIsOpened(false);
              }}
              key={keyValue}
              type={item.type}
              title={item.title}
            />
          );
        })}
      </ul>
    </form>
  );
}
