import serviceGoods from "../service/serviceGoods.js";
import {getStorage} from  "../service/serviceStorage.js"

const createCard = ({id, title, image, price, discountPrice}) => {
  const allFavorite = getStorage('favorite')
  const allCart = getStorage('cart')
  const itemCart = allCart.find(item => item.id === id)


  const li = document.createElement('li')
  li.classList.add('goods__item')

  li.insertAdjacentHTML('beforeend', `
    <article class="good">
      <img src="${image}" alt="${title}" class="good__img">
      <button class="${allFavorite.includes(id) ?
                    'good__favorite-btn active' :
                    'good__favorite-btn'} btn-reset" data-id="${id}">
        <svg class="hidden" width="28" height="24">
          <use xlink:href="img/icon.svg#fav"></use>
        </svg>
      </button>

      <div class="good__control-wrapper">
        <h3 class="good__title">${title}</h3>
        <button class="good__to-cart btn__to-cart btn-reset" data-id="${id}">${itemCart ? `${itemCart.count} в корзине` : 'В корзину'}</button>
        <span class="goods__price">${discountPrice ? `${discountPrice} ₽
          <span class="goods__price-old">${price} ₽</span>`  : `${price} ₽`}
        </span>
        <button class="goods__descr-btn btn-reset" data-id="${id}">
          <span class="goods__descr-text">Подробнее</span></button>
      </div>
    </article>
  `)

  return li
}

const renderCards = (parent) => {
  return (data) => {
    parent.append(...data.map(createCard));
  }
}

const renderGoods = (query, callback) => {
  const list = document.querySelector('.goods__list')
  list.textContent = ''
  serviceGoods(renderCards(list), query, callback)
}

export default renderGoods
