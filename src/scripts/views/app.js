import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
class App {
  constructor({ hamburger, navMenu, main, jumbotron }) {
    this._hamburger = hamburger;
    this._navMenu = navMenu;
    this._main = main;
    this._jumbotron = jumbotron;

    this.__initialAppShell();
  }

  __initialAppShell() {
    DrawerInitiator.init({
      hamburger: this._hamburger,
      navMenu: this._navMenu,
      main: this._main,
      jumbotron: this._jumbotron,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._main.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
