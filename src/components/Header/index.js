import styled from 'styled-components'

const Header = styled.header`
  padding:0 ${(props) => props.theme.defaultGab};
  box-shadow: 0px 2px 5px #666;
  color:#fff;
  background-color:${(props) => props.theme.color.main};
  box-sizing:border-box;
`

export default Header
