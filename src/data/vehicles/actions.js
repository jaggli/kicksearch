import 'whatwg-fetch'
export const FETCH_LIST = 'data/status/FETCH_LIST'

const apiUrl = 'https://kicksearch-data.herokuapp.com/api/v1/'

export const fetchList = () => {
  return {
    type: FETCH_LIST,
    payload: fetch(apiUrl + 'vehicles')
  }
}
