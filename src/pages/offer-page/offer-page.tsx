import { CardType, MapType } from '../../const';
import { IReview } from '../../interfaces/interfaces';
import { convertRateToPercentage, createKeyValue } from '../../utils';
import { BookmarkButton } from '../../components/bookmark-button/bookmark-button';
import { PlaceCard } from '../../components/place-card/place-card';
import { ReviewList } from '../../components/reviews/review-list/review-list';
import { MapComponent } from '../../components/map-component/map-component';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { fetchOfferAction } from '../../store/api-action';

interface IOfferPageProps {
  reviews: IReview[];
}

export function OfferPage({ reviews }: IOfferPageProps): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
    }
  }, [id]);

  const offer = useAppSelector((store) => store.selectedOffer);

  if (offer === undefined) {
    return <NotFoundPage />;
  }

  const images = offer.images?.map((image, index) => {
    const keyValue = createKeyValue(image, index);
    return (
      <div key={keyValue} className="property__image-wrapper">
        <img className="property__image" src={image} alt="studio" />
      </div>
    );
  });

  const properties = offer.goods?.map((property, index) => {
    const keyValue = createKeyValue(property, index);
    return (
      <li key={keyValue} className="property__inside-item">
        {property}
      </li>
    );
  });

  const rateInPercentage = convertRateToPercentage(offer.rate);

  const premium = offer.isPremium ? (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  ) : (
    ''
  );

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">{images}</div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {premium}
            <div className="property__name-wrapper">
              <h1 className="property__name">{offer.title}</h1>
              <BookmarkButton isActive={offer.isFavorite} isLarge />
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: rateInPercentage }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">
                {offer.rate}
              </span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">{properties}</ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="property__avatar user__avatar"
                    src={offer.host?.avatarUrl}
                    width="74"
                    height="74"
                    alt="Host"
                  />
                </div>
                <span className="property__user-name">{offer.host?.name}</span>
                <span className="property__user-status">
                  {offer.host?.isPro ? 'Pro ' : ''}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">{offer.description}</p>
              </div>
            </div>
            <ReviewList reviews={reviews} />
          </div>
        </div>
        <MapComponent
          type={MapType.Property}
          city={'Amsterdam'}
          activeOffer={offer}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            <PlaceCard offer={offer} cardType={CardType.Near} />
            <PlaceCard offer={offer} cardType={CardType.Near} />
            <PlaceCard offer={offer} cardType={CardType.Near} />
          </div>
        </section>
      </div>
    </main>
  );
}
