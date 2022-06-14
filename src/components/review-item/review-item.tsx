import { IReview } from '../../interfaces/interfaces';
import { convertRateToPercentage, formatDate } from '../../utils';

type ReviewItemProps = {
    review: IReview;
}

export function ReviewItem(props: ReviewItemProps): JSX.Element {
  const { review } = props;

  const rateInPercentage = convertRateToPercentage(review.rate);

  const formattedDate = formatDate(review.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: rateInPercentage }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{formattedDate}</time>
      </div>
    </li>
  );
}
