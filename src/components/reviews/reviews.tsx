import { IReview } from '../../interfaces/interfaces';
import { createKeyValue } from '../../utils';
import { RateForm } from '../rate-form/rate-form';
import { ReviewItem } from '../review-item/review-item';

type ReviewsProps = {
    reviews: IReview[];
}

export function Reviews(props: ReviewsProps): JSX.Element {
  const { reviews } = props;

  const reviewItems = reviews.map((review, index) => {
    const keyValue = createKeyValue(review.name, index);
    return (<ReviewItem key={keyValue} review={review}/>);
  });

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewItems}
      </ul>
      <RateForm/>
    </section>
  );
}
