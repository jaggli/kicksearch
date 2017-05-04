import styled, { css } from 'styled-components'
import { ifprop } from 'styles/mixins'

const PageTitle = styled.h1`
  margin:0;
  padding:20px 0;
  
  font-size:24px;
  font-weight:${props => props.theme.font.weight.semibold};
  
  ${ifprop('centered', css`
    text-align:center;
  `)}
`




export default PageTitle
