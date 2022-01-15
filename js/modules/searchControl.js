const searchControl = ({ selectorBtn, selectorForm, selectorClose, classActive, breakpoint}) => {
  const btn = document.querySelector(selectorBtn)
  const form = document.querySelector(selectorForm)
  const close = document.querySelector(selectorClose)

  const activateForm = () => {
    form.classList.add(classActive)
    if (document.documentElement.clientWidth >= breakpoint) {
      btn.removeEventListener('click', activateForm)
    }
    if (document.documentElement.clientWidth <= breakpoint) {
      btn.type = 'submit'
    }
  }

  const deactivateForm = () => {
    form.classList.remove(classActive)
    btn.addEventListener('click', activateForm)
    btn.type = 'button'
  }



  btn.addEventListener('click', activateForm)
  close.addEventListener('click', deactivateForm)
}

export default searchControl;
