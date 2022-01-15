import Swiper from '../libs/swiper-bundle.esm.browser.min.js'

const slider = ({ selectorSlider, selectorPagination, type, bulletClass, bulletActiveClass }) => {
new Swiper(selectorSlider, {
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
}

export default slider;
