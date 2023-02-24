// import dataRestorant from '/xampp/htdocs/Dicoding/Menjadi Front-End Web Developer Expert/restaurant-apps/src/DATA.json';

const DrawerInitiator = {
  init({ hamburger, navMenu, main, jumbotron }) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach((n) =>
      n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      })
    );

    main.addEventListener('click', (event) => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      event.stopPropagation();
    });

    jumbotron.addEventListener('click', (event) => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      event.stopPropagation();
    });
  },
};

export default DrawerInitiator;
