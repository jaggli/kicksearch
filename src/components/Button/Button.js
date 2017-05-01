import styled, { css } from 'styled-components'
import { ifprop } from 'styles/mixins'

const colorMixin = ({theme}) => css`
  background: ${theme.color};
`

const Button = styled.button`
  ${colorMixin}
  ${ifprop('primary')`
    background:blue;
  `}
  ${ifprop('secondary')`
    background:red;
  `}
`

export default Button
