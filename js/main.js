const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

setInterval(function () {
  const windowScrollTop = window.pageYOffset;
  if (windowScrollTop > 150) {
    document.querySelector('.fs-dp__logo').classList.add('ds-none');
    document.querySelector(".header__logo-img").classList.remove('ds-none');
  }
}, 10);

setInterval(function () {
  const windowScrollTop = window.pageYOffset;
  if (windowScrollTop < 150) {
    document.querySelector('.fs-dp__logo').classList.remove('ds-none');
    document.querySelector(".header__logo-img").classList.add('ds-none');
  }
}, 10);

document.querySelector('.header__btn-open').addEventListener('click', menuOpen);

function menuOpen() {
  document.querySelector(".menu").classList.toggle('menu--active');
}

document.querySelector('.menu__close').addEventListener('click', menuClose);

function menuClose() {
  document.querySelector(".menu").classList.toggle('menu--active');
}