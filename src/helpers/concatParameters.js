export default function (value, _this) {
  const currentUrl = _this.context.router.route.location.search
  const linkTo = currentUrl ? `${currentUrl}&${_this.props.data.id}=${value}` : `?${_this.props.data.id}=${value}`
  return linkTo
}
