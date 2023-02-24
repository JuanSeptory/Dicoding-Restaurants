import RestaurantsListSource from '../../data/restaurants-list-resource';
import { createRestaurantItemTemplate } from '../template/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
      <h2 class="content__heading">Restaurants List</h2>
      <div id="restaurants" class="restaurants"></div>
    </div>
            `;
  },

  async afterRender() {
    const restaurants = await RestaurantsListSource.RestaurantsAll();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurants) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default Home;
