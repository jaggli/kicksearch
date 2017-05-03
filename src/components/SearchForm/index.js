import React, { Component } from 'react'
import _ from 'lodash'

import Autocomplete from 'components/Autocomplete/'
import Picker from 'components/Picker/'

const SearchForm = class SearchForm extends Component {
  render () {
    switch (this.props.data.type) {
      case 'autocomplete':
        return (
          <div>
            <Autocomplete data={this.props.data} />
          </div>
        )
      case 'numeric':
        return (
          <div>
            <Picker data={this.props.data} />
          </div>
        )
      default:
        return <div>Type "{this.props.data.type}" not matching any</div>
    }
  }
}

export default SearchForm
