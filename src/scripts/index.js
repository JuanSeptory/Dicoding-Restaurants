import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-regrister';

const app = new App({
  hamburger: document.querySelector('.hamburger'),
  navMenu: document.querySelector('.nav-menu'),
  main: document.querySelector('#maincontent'),
  jumbotron: document.querySelector('.jumbotron'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
