import { css } from 'styled-components'

export default () => {
  return css`
    zoom:1;
    position:relative;
    &:after{
      content: "";
      display: table;
      clear: both;
      }
  `
}
