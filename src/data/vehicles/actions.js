import 'whatwg-fetch'

export const FETCH_LIST = 'data/status/FETCH_LIST'
export const FETCH_CORE_DATA = 'data/status/FETCH_LIST'

const apiUrl = 'https://kicksearch-data.herokuapp.com/api/v1/'

export const fetchList = (params = '') => {
  return {
    type: FETCH_LIST,
    payload: global.fetch(`${apiUrl}vehicles${params}`)
      .then(response => response.json())
  }
}

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
