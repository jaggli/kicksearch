import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import concatParameters from 'concatParameters'

import Input from 'components/Input/'

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
  static contextTypes = {
    router: PropTypes.object
  }

  constructor (props) {
    super(props)
    
    this.onClickAutocompleteItem = this.onClickAutocompleteItem.bind(this)
    this.onChangeAutocompleteInput = this.onChangeAutocompleteInput.bind(this)
    this.renderList = this.renderList.bind(this)

    this.state = { list: [] }
  }

  onChangeAutocompleteInput (event) {
    let answers = this.props.data.answers
    let value = event.target.value

    if (!value) { return this.setState({list: []}) }

    let regex = new RegExp(value, 'i')
    let matchingList = answers.filter(element => regex.test(element.title))

    this.setState({ list: matchingList })
  }

  onClickAutocompleteItem (vehicle) {
    this.context.router.history.push(concatParameters(vehicle.value, this))
  }

  renderList () {
    return this.state.list.map((vehicle) => {
      return (
        <AutocompleteItem key={vehicle.value} onClick={() => this.onClickAutocompleteItem(vehicle)}>
          {vehicle.title}
        </AutocompleteItem>
      )
    })
  }

  render () {
    return (
      <div>
        <Input placeholder='z.b. Audi' onChange={this.onChangeAutocompleteInput} />
        <AutocompleteList>
          {this.renderList()}
        </AutocompleteList>
      </div>
    )
  }
}

export default Autocomplete
