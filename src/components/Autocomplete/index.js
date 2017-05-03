import React, { Component } from 'react'
import styled from 'styled-components'

const AutocompleteList = styled.ul`
  margin:0;
  padding:0;
  list-style:none;
`

const AutocompleteItem = styled.li`
  border-bottom:1px solid ${(props) => props.theme.color.border};
  padding:${(props) => props.theme.defaultGab}
`

class Autocomplete extends Component {
  constructor (props) {
    super(props)

    this.onClickMake = this.onClickMake.bind(this)
  }

  onClickMake (event) {
    console.log(event.target.innerText)
  }

  renderList () {
    return this.props.data().map((make, index) => {
      return (
        <AutocompleteItem key={index} onClick={this.onClickMake}>
          {make}
        </AutocompleteItem>
      )
    })
  }

  render () {
    return (
      <AutocompleteList>
        {this.renderList()}
      </AutocompleteList>
    )
  }
}

export default Autocomplete
