import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import concatParameters from 'helpers/concatParameters'

import { connect } from 'react-redux'
import { fetchList } from '../../data/vehicles/actions'
import { getList } from '../../data/vehicles/reducer'

import Content from 'components/Content/'
import Header from 'components/Header/'
import Footer from 'components/Footer/'
import SearchForm from 'components/SearchForm/'
import PageTitle from 'components/PageTitle/'
import Question from 'components/Question/'
import Button from 'components/Button/'

class Home extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.unlistenHistory = props.history.listen(() => {
      props.fetchList(props.history.location.search)
    })
    this.onClickSkip = this.onClickSkip.bind(this)
  }

  componentDidMount () {
    this.props.fetchList(this.props.history.location.search)
  }

  componentWillUnmount () {
    this.unlistenHistory();
  }

  onClickSkip () {
    this.context.router.history.push(
      concatParameters(
        `${this.props.vehiclesList.next.id}=`,
        this.props.history.location.search
      )
    )
  }

  render () {
    // if fetch is not finished yet
    if (!this.props.vehiclesList.next) { return null }
    // if ready for resultlist
    if (this.props.vehiclesList.meta.length <= 40 && this.props.history.location.search) {
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
        <Footer>
          <Button onClick={this.onClickSkip}>Überspringen</Button>
        </Footer>
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