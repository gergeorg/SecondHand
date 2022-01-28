import renderGoods from "../modules/renderGoods.js";
import {checkSlider} from "../modules/slider.js";

const handlerSearch = e => {
  e.preventDefault()
  const searchURL = `?search=${e.target.search.value}`
  history.pushState(searchURL.substring(1),searchURL.substring(1), searchURL)
  renderGoods(searchURL)
  checkSlider()
}

const searchControl = ({ selectorBtn, selectorForm, selectorClose, classActive, breakpoint}) => {
  const btn = document.querySelector(selectorBtn)
  const form = document.querySelector(selectorForm)
  const close = document.querySelector(selectorClose)

  const activateForm = () => {
    form.classList.add(classActive)
    btn.removeEventListener('click', activateForm)
    btn.type = 'submit'
  }

  const deactivateForm = () => {
    form.classList.remove(classActive)
    btn.addEventListener('click', activateForm)
    btn.type = 'button'
  }

  if (document.documentElement.clientWidth > breakpoint) {
    btn.addEventListener('click', activateForm)
    close.addEventListener('click', deactivateForm)
  } else {
    btn.type = 'button'
  }

  form.addEventListener('submit', handlerSearch)
}

export default searchControl;
