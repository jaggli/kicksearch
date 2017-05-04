export default (key, value, currentParams) => currentParams ? `${currentParams}&${key}=${value}` : `?${key}=${value}`
