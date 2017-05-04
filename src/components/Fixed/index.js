import styled, { css } from 'styled-components'
import { ifprop } from 'styles/mixins'

const Fixed = styled.div`
  padding:${props => props.theme.defaultGab};
  background-color:#fff;
  position:fixed;
  right:0;
  left:0;
  ${ifprop('bottom', css`
    bottom:0;
  `)}
  ${ifprop('top', css`
    top:0;
  `)}
`

export default Fixed
