import FavoriteRestaurantIdb from '../../data/restaurant-favorite-idb';
import { createRestaurantItemTemplate } from '../template/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Restaurants Favorite</h2>
      <div id="restaurants" class="restaurants"></div>
    </div>
          `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    console.log(restaurants);
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
