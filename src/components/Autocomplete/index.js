import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import concatParameters from 'helpers/concatParameters'

import Input from 'components/Input/'

const AutocompleteList = styled.ul`
  margin:0;
  padding:0;
  list-style:none;
`

const AutocompleteItem = styled.li`
  border-bottom:1px solid ${props => props.theme.color.border};
  padding:${props => props.theme.defaultGab}
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

  onClickAutocompleteItem (answer) {
    this.context.router.history.push(
      concatParameters(
        this.props.data.id,
        answer.value,
        this.context.router.route.location.search
      )
    )
  }

  renderList () {
    return this.state.list.map((answer) => {
      return (
        <AutocompleteItem key={answer.value} onClick={() => this.onClickAutocompleteItem(answer)}>
          {answer.title}
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
