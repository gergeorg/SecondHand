import Swiper from '../libs/swiper-bundle.esm.browser.min.js'

const slider = ({ selectorParentSlider, selectorSlider, selectorPagination, type, bulletClass, bulletActiveClass }) => {
  const swiper = new Swiper(selectorSlider, {
    init: false,
    autoplay: {
      delay: 6000,
    },
    loop: true,
    effect: 'fade',
    pagination: {
      el: selectorPagination,
      type: 'bullets',
      bulletClass,
      bulletActiveClass,
      clickable: true,
    },

    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop()
        })

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start()
        })
      }
    }
  })

  const checkSlider = () => {
    const regexp = /\?(search|category|list)=/;
    const href = location.href

    if (regexp.test(href)) {
      swiper.disable()
      document.querySelector(selectorParentSlider)?.remove()
    } else {
      swiper.init()
    }
  }
  checkSlider()
  return checkSlider
}

export default slider;
