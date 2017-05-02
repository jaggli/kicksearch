import React, { Component } from 'react'
import Button, { IconButton } from 'components/Button'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Button>Button Nr 1</Button>
        <Button primary>Button Nr 2</Button>
        <Button secondary>Button Nr 3</Button>
        <IconButton primary>
          Button with icon
        </IconButton>
        Hello from new repo
      </div>
    )
  }
}
