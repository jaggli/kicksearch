import 'whatwg-fetch'

export const FETCH_LIST = 'data/status/FETCH_LIST'
export const FETCH_MAKE_LIST = 'data/status/FETCH_MAKE_LIST'

const apiUrl = 'https://kicksearch-data.herokuapp.com/api/v1/'

export const fetchList = () => {
  return {
    type: FETCH_LIST,
    payload: global.fetch(apiUrl + 'vehicles')
      .then(response => response.json())
      .then(json => {
        return json
      })
  }
}

export const fetchMakeList = () => {
  return {
    type: FETCH_MAKE_LIST,
    payload: global.fetch(apiUrl + 'coredata?filter=MakeId')
      .then(response => response.json())
      .then(json => {
        return json
      })
  }
}
