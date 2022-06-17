import { IReview } from '../../../interfaces/interfaces';
import { createKeyValue } from '../../../utils';
import { ReviewForm } from '../review-form/review-form';
import { ReviewItem } from '../review-item/review-item';

interface IReviewListProps {
  reviews: IReview[];
}

export function ReviewList({ reviews }: IReviewListProps): JSX.Element {
  const reviewItems = reviews.map((review, index) => {
    const keyValue = createKeyValue(review.name, index);
    return <ReviewItem key={keyValue} review={review} />;
  });

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">{reviewItems}</ul>
      <ReviewForm />
    </section>
  );
}
