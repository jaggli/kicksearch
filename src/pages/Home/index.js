import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMakeList } from '../../data/vehicles/actions'
import { getVehicleMakes } from '../../data/vehicles/reducer'
import _ from 'lodash'

import Content from 'components/Content/'
import Header from 'components/Header/'
import PageTitle from 'components/PageTitle/'
import Input from 'components/Input/'
import Autocomplete from 'components/Autocomplete/'

class Home extends Component {
  constructor (props) {
    super(props)

    this.onChangeInput = this.onChangeInput.bind(this)

    this.state = { list: [] }
  }

  componentDidMount () {
    this.props.fetchMakeList()
  }

  onChangeInput (event) {
    const makeList = _.map(this.props.vehicles.MakeId, element => element)
    const value = event.target.value

    if (!value) { return this.setState({list: []}) }

    let regex = new RegExp('^' + value, 'i')
    const matchingList = makeList.filter(element => regex.test(element))

    this.setState({ list: matchingList })
  }

  render () {
    return (
      <div>
        <Header>
          <PageTitle centered>Marke</PageTitle>
        </Header>
        <Content>
          <Input placeholder='z.b. Audi' onChange={this.onChangeInput} />
          <Autocomplete data={() => this.state.list} />
        </Content>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  vehicles: getVehicleMakes(state)
})

export default connect(mapStateToProps, {
  fetchMakeList
})(Home)
