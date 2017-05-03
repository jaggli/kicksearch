import React, { Component } from 'react'
import styled from 'styled-components'

const QuestionContainer = styled.p`

`

class Question extends Component {
  render () {
    if (this.props.children) {
      return (
        <QuestionContainer>
          {this.props.children}
        </QuestionContainer>
      )
    } else {
      return null
    }
  }
}


export default Question
