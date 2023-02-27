import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurants) =>
  `<img class="restaurant__picture"  src ="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
<h2 class ="restaurant__rating">${restaurants.rating}</h2>
  <h2 class="restaurant__title">Restaurant : ${restaurants.name}</h2>
  <div class = "restaurant__info">
        <h2>Address : ${restaurants.address}</h2> 
        <h2>City : ${restaurants.city}</h2>
        <h2> Category : ${restaurants.categories.map((category) => `${category.name}`)}</h2>
        <h2> Makanan : ${restaurants.menus.foods.map((food) => `<em>${food.name}</em>`)}</h2>
        <h2> Minuman : ${restaurants.menus.drinks.map((drink) => `<em>${drink.name}</em>`)}</h2>
    </div>

    <div class = "restaurant__description">
    <p> <strong>Description</strong> ${restaurants.description} </p>
  </div>

  <div class = "restaurant__review">
    <h2> Review  </h2>
    ${restaurants.customerReviews.map((review) => `<p>${review.date}</p> <p>${review.name}</p> <p>${review.review}</p>`)}
  </div>
    `;

const createRestaurantItemTemplate = (restaurants) =>
  `
  <div class ="card">
    <div class = "restaurants-item">
        <div class = "restaurants-item__header">
            <img class = "restaurants-item__header__poster"  src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" width="450">
            <div>
              <h2><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h2>
            </div>   
          <div class = "restaurants-item__header__rating">
            <p>⭐️<span class="restaurants-item__header__rating__skor">${restaurants.rating}</span></p>
          </div>
        </div>
    </div>
  </div>
    `;

const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
       <i class="far fa-heart" aria-hidden="true"></i>
    </button>
  `;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
