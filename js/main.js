import burgerMenu from "./modules/burger.js";
import searchControl from "./modules/searchControl.js";
import selectControl from "./modules/selectControl.js";
import slider from "./modules/slider.js";
import renderGoods from "./modules/renderGoods.js";
import interceptLink from "./modules/interceptLink.js";


burgerMenu({
  selectorBtn: '.nav__btn',
  selectorMenu: '.nav',
  selectorClose: '.nav__link, .header__btn',
  classActive: 'nav__active',

})

searchControl({
  selectorBtn: '.search__button',
  selectorForm: '.search',
  selectorClose: '.search__close',
  classActive: 'search__active',
  breakpoint: 760,
})

selectControl({
  selectorBtn: '.footer__subtitle',
  selectorSelect: '.footer__nav-item',
  classActive: 'footer__item-active',
  breakpoint: 760,
})

const checkSlider = slider({
  selectorParentSlider: '.hero',
  selectorSlider: '.hero__slider',
  selectorPagination: '.hero__swiper-pagination',
  bulletClass: 'hero__swiper-line',
  bulletActiveClass: 'hero__swiper-line--active',
})

renderGoods(location.search, () => {
  document.body.style.opacity = '1'
})

interceptLink(checkSlider)



