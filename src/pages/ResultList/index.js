import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchList, fetchCoreData } from '../../data/vehicles/actions'
import { getList, getCoreData } from '../../data/vehicles/reducer'

import Content from 'components/Content/'
import Header from 'components/Header/'
import PageTitle from 'components/PageTitle/'

const ResultList = class ResultList extends Component {
  componentDidMount () {
    this.props.fetchList(this.props.history.location.search)
    this.props.fetchCoreData(this.props.history.location.search)
  }

  renderList () {
    console.log(this.props)
    if (!this.props.vehiclesList.list) {
      return <div>No results</div>
    }
    
    return this.props.vehiclesList.list.map((vehicle) => {

      return (
        <li key={vehicle.Id}>
          {vehicle.MakeId} - {vehicle.ModelId}
        </li>
      )
    })
  }

  render () {
    return (
      <div>
        <Header>
          <PageTitle>Resultlist</PageTitle>
        </Header>
        <Content>
          <ul>
            { this.renderList() }
          </ul>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  vehiclesList: getList(state),
  coreDataList: getCoreData(state)
})

export default connect(mapStateToProps, {
  fetchList,
  fetchCoreData
})(ResultList)
