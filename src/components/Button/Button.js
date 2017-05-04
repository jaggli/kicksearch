import styled from 'styled-components'
// import styled, { css } from 'styled-components'
// import { ifprop } from 'styles/mixins'

// const colorMixin = ({theme}) => css`
//   background: ${theme.color};
// `

// const Button = styled.button`
//   ${colorMixin}
//   ${ifprop('primary', css`
//     background:blue;
//   `)}
//   ${ifprop('secondary', css`
//     background:red;
//   `)}
// `

const Button = styled.a`
  padding:10px 0;
  display:block;
  width:100%;
  background-color:${props => props.theme.color.buttonBackground};
  text-align:center;
`

export default Button
