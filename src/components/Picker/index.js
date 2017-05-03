import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { fetchList } from '../../data/vehicles/actions'
import { getList } from '../../data/vehicles/reducer'

const PickerItem = styled.div`
  margin:0;
  padding:0;
  background-color:red;
`

class Picker extends Component {
  renderItems () {
    console.log(this.props)
    return (
      <PickerItem></PickerItem>
    )
  }

  render () {
    return (
      <div>
        {this.renderItems()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  vehiclesList: getList(state)
})

export default connect(mapStateToProps, {
  fetchList
})(Picker)
