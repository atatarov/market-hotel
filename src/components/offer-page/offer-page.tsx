import { CardType } from '../../const';
import { IOffer, IReview } from '../../interfaces/interfaces';
import { convertRateToPercentage, createKeyValue } from '../../utils';
import { BookmarkButton } from '../bookmark-button/bookmark-button';
import { PlaceCard } from '../place-card/place-card';
import { Reviews } from '../reviews/reviews';

type OfferPageProps = {
  offers: IOffer[];
  reviews: IReview[];
}

export function OfferPage(props: OfferPageProps): JSX.Element {
  const { offers, reviews } = props;
  const [offer] = offers;

  const images = offer.images.map((image, index) => {
    const keyValue = createKeyValue(image, index);
    return (
      <div key={keyValue} className="property__image-wrapper">
        <img className="property__image" src={image} alt="Photo studio" />
      </div>
    );
  });

  const properties = offer.goods.map((property, index)=>{
    const keyValue = createKeyValue(property, index);
    return (
      <li key={keyValue} className="property__inside-item">
        {property}
      </li>
    );
  });

  const rateInPercentage = convertRateToPercentage(offer.rate);

  const premium = offer.isPremium ? <div className="property__mark"><span>Premium</span></div> : '';

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {premium}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
              <BookmarkButton isActive={offer.isFavorite} isLarge/>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: rateInPercentage }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rate}</span>
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
              <ul className="property__inside-list">
                {properties}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {offer.host.name}
                </span>
                <span className="property__user-status">
                  {offer.host.isPro ? 'Pro ': ''}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {offer.description}
                </p>
              </div>
            </div>
            <Reviews reviews={reviews}/>
          </div>
        </div>
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
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
