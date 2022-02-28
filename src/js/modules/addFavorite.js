import {getStorage, toggleStorage} from "../service/serviceStorage.js"

const addFavorite = ({ selectorTarget, selectorParent, linkFavoriteHandler, changeActiveClass }) => {
  const links = document.querySelectorAll(linkFavoriteHandler)

  const updateLinks = () => {
    links.forEach(link => {
      link.href = `?list=${getStorage('favorite')}`
    })
  }

  updateLinks()

  if (selectorParent) {
    const parent = document.querySelector(selectorParent)

    parent.addEventListener('click', e => {
      const target = e.target.closest(selectorTarget)
      if(target) {
        target.classList.toggle('active')
        toggleStorage('favorite', target.dataset.id)
        updateLinks()
      }
    })
  } else {
    const target = document.querySelector(selectorTarget)
    target.addEventListener('click', e => {
      target.classList.toggle('active')
      toggleStorage('favorite', target.dataset.id)
      updateLinks()

      document.querySelectorAll(`${changeActiveClass}[data-id="${target.dataset.id}"]`)
        .forEach(elem => {
          elem.classList.toggle('active')
        })
    })
  }


}

export default addFavorite
