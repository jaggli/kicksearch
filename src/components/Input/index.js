import styled from 'styled-components'

const Input = styled.input`
  border:none;
  border-radius:0;
  border-bottom:2px solid ${(props) => props.theme.color.border};
  padding:${(props) => props.theme.defaultGab};
  box-sizing:border-box;
  width:100%;
  font-size:${(props) => props.theme.font.size};
  outline:none;
`

export default Input
