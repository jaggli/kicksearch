const ifprop = (...args) => props => {
  const rules = args.slice(-1)
  const names = args.slice(0, -1)
  return names.reduce((total, name) => total && !!props[name], true) ? rules : null
}

export default ifprop
