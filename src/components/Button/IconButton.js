import React from 'react'
import Button from './Button'


const IconButton = (props) => (
  <Button {...props}>
    {props.children}
    <span>icon</span>
  </Button>
)


export default IconButton
