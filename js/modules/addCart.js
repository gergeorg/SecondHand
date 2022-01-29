import {getStorage} from "../service/serviceStorage.js"

const addCart = (elem, text) => {
  let obj = {}
  const cart = getStorage('cart');
  const findItem = cart.find(item => item.id === elem.dataset.id);

  if (findItem) {
    obj = findItem
    obj.count += 1
  } else {
    obj.count = 1
    obj.id = elem.dataset.id
    cart.push(obj)
  }

  if (text) {
    elem.textContent = text.replace('{count}', obj.count)
  }

  getStorage('cart', cart)
}

const controlCart = ({selectorAdd, selectorRemove, selectorParent, text}) => {
  const parent = document.querySelector(selectorParent)

  parent.addEventListener('click', e => {
    const target = e.target.closest(selectorAdd)
    if (target) {
      addCart(target, text)
    }


  })
}

export default controlCart

// setStorage
