import React, { Component } from 'react'
import Button, { IconButton } from 'components/Button'
import { connect } from 'react-redux'
import { fetchList } from '../../data/vehicles/actions'
import { getAllVehicles } from '../../data/vehicles/reducer'

class Home extends Component {
  componentDidMount () {
    this.props.fetchList()
  }
  render () {
    return (
      <div>
        <Button>Button Nr 1</Button>
        <Button primary>Button Nr 2</Button>
        <Button secondary>Button Nr 3</Button>
        <IconButton primary>
          Button with icon
        </IconButton>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  status: getAllVehicles(state)
})

export default connect(mapStateToProps, {
  fetchList
})(Home)
