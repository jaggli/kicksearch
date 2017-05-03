import styled from 'styled-components'

const Header = styled.header`
  top:0;
  right:0;
  left:0;
  color:#fff;
  background-color:${(props) => props.theme.color.main};
`

export default Header
