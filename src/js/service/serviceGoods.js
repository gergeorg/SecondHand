// const URL_SERVER = 'http://localhost:3010'
const URL_SERVER = 'https://whispering-wave-11373.herokuapp.com'

const URL_POSTFIX = '/api/goods'

const getGoods = (query = '') =>
  fetch(URL_SERVER + URL_POSTFIX + query)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return new Error(response.statusText)
    })
    .catch(err => console.error(err))


const serviceGoods = async (fn, query, callback) => {
  fn(await getGoods(query))
  if (callback) callback()
}

export default serviceGoods
