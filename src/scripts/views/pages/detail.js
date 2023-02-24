import UrlParser from '../../routes/url-parser';
import RestaurantsListSource from '../../data/restaurants-list-resource';
import { createRestaurantDetailTemplate } from '../template/template-creator';

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const restaurant = await RestaurantsListSource.DetailRestaurant(url.id);
    console.log(restaurant);
    const RestaurantContainer = document.querySelector('#restaurant');
    RestaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
