export default (value, currentParams) => currentParams ? `${currentParams}&${value}` : `?${value}`
