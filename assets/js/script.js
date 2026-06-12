const hamburger = document.getElementById('hamburger');
    const navMenu   = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('is-open');
      navMenu.classList.toggle('is-open');
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('is-open');
        navMenu.classList.remove('is-open');
      });
    });