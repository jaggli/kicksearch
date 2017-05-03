import React, { Component } from 'react'

import Content from 'components/Content/'
import Header from 'components/Header/'
import PageTitle from 'components/PageTitle/'

const ResultList = class ResultList extends Component {
  render () {
    return (
      <div>
        <Header>
          <PageTitle>Resultlist</PageTitle>
        </Header>
        <Content>
          content
        </Content>
      </div>
    )
  }
}

export default ResultList
