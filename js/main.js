import burgerMenu from "./modules/burger.js";
import searchControl from "./modules/searchControl.js";
import selectControl from "./modules/selectControl.js";
import slider from "./modules/slider.js";
import renderGoods from "./modules/renderGoods.js";
import interceptLink from "./modules/interceptLink.js";
import itemModal from "./modules/itemModal.js";
import addFavorite from "./modules/addFavorite.js";
import controlCart from "./modules/addCart.js";
import renderCart from "./modules/renderCart.js";


burgerMenu({
  selectorBtn: '.nav__btn',
  selectorMenu: '.nav',
  selectorClose: '.nav__link, .header__btn',
  classActive: 'nav__active',

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

searchControl({
  selectorBtn: '.search__button',
  selectorForm: '.search',
  selectorClose: '.search__close',
  classActive: 'search__active',
  breakpoint: 760,
  callback: checkSlider,
})

renderGoods(location.search, () => {
  document.body.style.opacity = '1'
})

interceptLink(checkSlider)

itemModal({
  selectorHandler: '.goods__descr-btn',
  selectorParent: '.goods__list',
  selectorModal: '.overlay__item',
  selectorClose: '.overlay__btn-close',
  classActive: 'overlay__active',
})

itemModal({
  selectorHandler: '.header__btn-cart',
  selectorModal: '.overlay__cart',
  selectorClose: '.overlay__btn-close',
  classActive: 'overlay__active',
  callback: renderCart,
})

addFavorite({
  selectorTarget: '.good__favorite-btn',
  selectorParent: '.goods__list',
  linkFavoriteHandler: '.header__btn-favorite',

})

addFavorite({
  selectorTarget: '.modal-item__btn-to-favorite',
  linkFavoriteHandler: '.header__btn-favorite',
  changeActiveClass: '.good__favorite-btn',
})

controlCart ({
  selectorAdd: '.good__to-cart',
  selectorParent: '.goods__list',
  text: '{count} в корзине',
})

controlCart ({
  selectorAdd: '.modal-item__btn-to-cart ',
  text: '{count} в корзине',
  selectorText: {
    selector: '.good__to-cart',
    text: '{count} в корзине',
  },
})

controlCart ({
  selectorAdd: '.props__btn-plus',
  selectorRemove: '.props__btn-min',
  selectorParent: '.modal-cart__list',
  selectorText: {
    selector: '.good__to-cart',
    text: '{count} в корзине',
  },
  callback: renderCart,
})

// props__btn-min
// props__btn-plus
