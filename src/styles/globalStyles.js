import { injectGlobal, css } from 'styled-components'
import Theme from './theme'

const globalStyles = css`
  body {
    margin: 0;
    min-width:320px;
    color:${Theme.color.text};
    font-size:${Theme.font.size};
    font-family:${Theme.font.family};
  }
`

injectGlobal([globalStyles])

export default globalStyles
