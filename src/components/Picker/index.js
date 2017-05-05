import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import concatParameters from 'helpers/concatParameters'

const FieldImage = styled.img`
  max-height:100%;
  width:100%;
  vertical-align:top;
`
const FieldImageContainer = styled.div`
  
`

const FieldText = styled.span`
  
`

const TextFieldOnly = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  min-height:150px;
`

const FieldItem = styled.div`
  border-radius:4px;
  border:1px solid ${(props) => props.theme.color.border};
  padding:10px;
  height:100%;
  box-sizing:border-box;
  display: flex;
  flex-direction: column;
  text-align:center;
  &:active,
  &:hover{ background-color:#ccc; }
`

const PickerItem = styled.div`
  margin:0 0 ${props => props.theme.defaultGab} 0;
  padding:0 0 0 ${props => props.theme.defaultGab};
  width:50%;
  box-sizing:border-box;
  -webkit-tap-highlight-color:transparent;
`

const PickerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left:-${props => props.theme.defaultGab}
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
    this.context.router.history.push(
      concatParameters(
        `${this.props.data.id}=${answer.value}`,
        this.context.router.route.location.search
      )
    )
  }

  renderItems () {
    return this.props.data.answers.map((item) => {
      return (
        <PickerItem key={item.value} onClick={() => this.onClickAnswer(item)}>
          <FieldItem>
            {item.image ? (
              <div>
                <FieldImageContainer>
                  <FieldImage src={item.image} alt='image'/>
                </FieldImageContainer>
                <FieldText>{item.title}</FieldText>
              </div>
            ) : (
              <TextFieldOnly>
                <FieldText>{item.title}</FieldText>
              </TextFieldOnly>
            )}
          </FieldItem>
        </PickerItem>
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
