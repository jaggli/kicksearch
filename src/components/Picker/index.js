import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import concatParameters from 'concatParameters'

const PickerItem = styled.div`
  margin:0;
  padding:0;
  border:1px solid ${(props) => props.theme.color.border}
`

const PickerContainer = styled.div`
  
`

class Picker extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor (props) {
    super(props)

    this.renderItems = this.renderItems.bind(this)
    this.onClickAnswer = this.onClickAnswer.bind(this)
  }

  onClickAnswer (answer) {
    this.context.router.history.push(concatParameters(answer.value, this))
  }

  renderItems () {
    return this.props.data.answers.map((item) => {
      return (
        <PickerItem key={item.value} onClick={() => this.onClickAnswer(item)}>{item.title}</PickerItem>
      )
    })
  }

  render () {
    return (
      <PickerContainer>
        {this.renderItems()}
      </PickerContainer>
    )
  }
}

export default Picker
