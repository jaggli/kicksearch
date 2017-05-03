import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { fetchList } from '../../data/vehicles/actions'
import { getList } from '../../data/vehicles/reducer'

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

    this.onClickMake = this.onClickMake.bind(this)
  }

  onClickMake (vehicle) {
    let currentUrl = this.context.router.route.location.search
    let linkTo = currentUrl ? `${currentUrl}&${this.props.id}=${vehicle.value}` : `?${this.props.id}=${vehicle.value}`
    
    this.context.router.history.push(linkTo)
    this.props.fetchList(linkTo)
  }

  renderList () {
    return this.props.data().map((vehicle) => {
      return (
        <AutocompleteItem key={vehicle.value} onClick={() => this.onClickMake(vehicle)}>
          {vehicle.title}
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

const mapStateToProps = (state) => ({
  vehiclesList: getList(state)
})

export default connect(mapStateToProps, {
  fetchList
})(Autocomplete)
