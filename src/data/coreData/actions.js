import 'whatwg-fetch'

export const FETCH_CORE_DATA = 'data/status/FETCH_CORE_DATA'

const apiUrl = 'https://kicksearch-data.herokuapp.com/api/v1/'

export const fetchCoreData = (params = '') => {
  if (params) {
    params = '?filter=' + params.substring(1).replace(/=\d+&*/g, ',').slice(0, -1)
  }

  return {
    type: FETCH_CORE_DATA,
    payload: global.fetch(`${apiUrl}coreData${params}`)
      .then(response => response.json())
  }
}
