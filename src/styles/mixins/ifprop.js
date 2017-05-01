const ifprop = (name, value) => (rules = '') => (props = {}) => {
  if (typeof value === 'undefined') {
    return props[name] ? rules : null
  }
  return props[name] === value ? rules : null
}

export default ifprop
