import styled, { css } from 'styled-components'
import { ifprop } from 'styles/mixins'

const colorMixin = ({theme}) => css`
  background: ${theme.color};
`

const Button = styled.button`
  ${colorMixin}
  ${ifprop('primary', css`
    background:blue;
  `)}
  ${ifprop('secondary', css`
    background:red;
  `)}
`

export default Button
