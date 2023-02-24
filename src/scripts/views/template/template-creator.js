import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurants) =>
  `
    <h2 class="restaurant__title">${restaurants.name}</h2>
    <img class="restaurant__picture"  src ="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
    <div class = "restaurant__info">
        <h3> Information</h3>
        <h4>${restaurants.address}</h4>
        <h4>${restaurants.city}</h4>
        <h4>${restaurants.description}</h4>
       
        <h4>${restaurant.customerReviews}</h4>
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

export { createRestaurantDetailTemplate, createRestaurantItemTemplate };
