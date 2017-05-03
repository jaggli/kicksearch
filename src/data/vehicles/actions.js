import 'whatwg-fetch'

export const FETCH_LIST = 'data/status/FETCH_LIST'

const apiUrl = 'https://kicksearch-data.herokuapp.com/api/v1/'

export const fetchList = (params = '') => {
  return {
    type: FETCH_LIST,
    payload: global.fetch(`${apiUrl}vehicles${params}`)
      .then(response => response.json())
      .then(json => {
        return json
      })
  }
}
