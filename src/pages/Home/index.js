import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { fetchList } from '../../data/vehicles/actions'
import { getList } from '../../data/vehicles/reducer'

import Content from 'components/Content/'
import Header from 'components/Header/'
import SearchForm from 'components/SearchForm/'
import PageTitle from 'components/PageTitle/'
import Question from 'components/Question/'

class Home extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor (props) {
    super(props)

    props.history.listen(()=>props.fetchList(props.history.location.search))
  }

  componentDidMount () {
    this.props.fetchList(this.props.history.location.search)
  }

  render () {
    // if fetch is not finished yet
    if (!this.props.vehiclesList.next) { return null }
    // if ready for result list
    if (this.props.vehiclesList.meta.length <= 20) {
      return <Redirect to={`/resultlist${this.props.history.location.search}`} />
    }

    const next = this.props.vehiclesList.next
    const { title } = next

    return (
      <div>
        <Header>
          <PageTitle centered>{title}</PageTitle>
        </Header>
        <Content>
          <Question>{next.question}</Question>
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