import RestaurantsListSource from '../../data/restaurants-list-resource';
import { createRestaurantItemTemplate } from '../template/template-creator';
const Favorite = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Restaurants Favorite</h2>
      <di id="restaurants" class="restaurants"></di>
    </div>
          `;
  },

  async afterRender() {
    const restaurants = await RestaurantsListSource.RestaurantsAll();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
