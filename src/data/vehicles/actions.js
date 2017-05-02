import 'whatwg-fetch'
export const FETCH_LIST = 'data/status/FETCH_LIST'

const apiUrl = 'https://kicksearch-data.herokuapp.com/api/v1/'

export const fetchList = () => {
  return {
    type: FETCH_LIST,
    payload: global.fetch(apiUrl + 'vehicles')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        return json
      })
  }
}
