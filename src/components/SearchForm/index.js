import React, { Component } from 'react'
import _ from 'lodash'

import Input from 'components/Input/'
import Autocomplete from 'components/Autocomplete/'

const SearchForm = class SearchForm extends Component {
  constructor (props) {
    super(props)

    this.state = { list: [] }

    this.onChangeAutocompleteInput = this.onChangeAutocompleteInput.bind(this)
  }

  onChangeAutocompleteInput (event) {
    let list = this.props.data.answers
    let value = event.target.value

    if (!value) { return this.setState({list: []}) }

    let regex = new RegExp(value, 'i')
    let matchingList = list.filter(element => regex.test(element.title))

    this.setState({ list: matchingList })
  }

  render () {
    switch (this.props.data.type) {
      case 'autocomplete':
        return (
          <div>
            <Input placeholder='z.b. Audi' onChange={this.onChangeAutocompleteInput} />
            <Autocomplete data={() => this.state.list} id={this.props.data.id} />
          </div>
        )
      case 'numeric':
        console.log( this.props.data.answers )
        return (
          <div>

          </div>
        )
      default:
        return <div>Type "{this.props.data.type}" not matching any</div>
    }
  }
}

export default SearchForm
