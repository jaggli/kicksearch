import styled from 'styled-components'

const Header = styled.header`
  padding:0 ${(props) => props.theme.defaultGab}
  color:#fff;
  background-color:${(props) => props.theme.color.main};
`

export default Header
