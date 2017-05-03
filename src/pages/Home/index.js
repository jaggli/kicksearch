import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { fetchList } from '../../data/vehicles/actions'
import { getList } from '../../data/vehicles/reducer'

import Content from 'components/Content/'
import Header from 'components/Header/'
import SearchForm from 'components/SearchForm/'
import PageTitle from 'components/PageTitle/'

class Home extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount () {
    this.props.fetchList(this.context.router.route.location.search)
    
  }

  componentWillUpdate () {
    console.log("componentWillUpdate", this.props.history.location.search)
    // console.log("componentDidUpdate", this.props.fetchList(this.context.router.route.location.search))
  }

  render () {
    if (!this.props.vehiclesList.next) {
      return <div>loading...</div>
    }
    const next = this.props.vehiclesList.next
    const { title } = next

    return (
      <div>
        <Header>
          <PageTitle centered>{title}</PageTitle>
        </Header>
        <Content>
          <SearchForm data={next} />
        </Content>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  vehiclesList: getList(state)
})

export default connect(mapStateToProps, {
  fetchList
})(Home)