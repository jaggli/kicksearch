import React, { Component } from 'react'
import styled from 'styled-components'
import { clear } from 'styles/mixins'

import { connect } from 'react-redux'
import { fetchList } from '../../data/vehicles/actions'
import { getList } from '../../data/vehicles/reducer'

import Content from 'components/Content/'
import Header from 'components/Header/'
import PageTitle from 'components/PageTitle/'

const ImageContainer = styled.div`
  margin-right:${props => props.theme.defaultGab}
  float:left;
  width:120px;
  height:90px;
  position:relative;
`

const Image = styled.img`
  position:absolute;
  top:50%;
  left:50%;
  max-width:100%;
  max-height:100%;
  transform: translate(-50%, -50%);
`

const ListContainer = styled.ul`
  list-style:none;
  margin:0;
  padding:0;
`

const ListItem = styled.li`
  ${clear}
  border-bottom:1px solid ${props => props.theme.color.border};
  margin-bottom:${props => props.theme.defaultGab};
  padding-bottom:${props => props.theme.defaultGab};
`

const ResultList = class ResultList extends Component {
  componentDidMount () {
    // get vehicles list if direct call
    if (!this.props.vehiclesList.length) {
      this.props.fetchList(this.props.history.location.search)
    }
  }

  renderList () {
    if (!this.props.vehiclesList.list) {
      return <div>No results</div>
    }

    return this.props.vehiclesList.list.map((vehicle) => {
      return (
        <ListItem key={vehicle.Id}>
          <ImageContainer>
            {vehicle.Images ? (
              <Image src={vehicle.Images} alt={`${vehicle.MakeId} - ${vehicle.ModelId}`} />
            ) : (
              <Image src={process.env.PUBLIC_URL + '/img/no-pic.jpg'} alt='no image' />
            )}
          </ImageContainer>
          {vehicle.MakeId} - {vehicle.ModelId}
          <br />
          {vehicle.FirstRegYear} - {vehicle.Km}km
          <br />
          CHF {vehicle.Price}.-
        </ListItem>
      )
    })
  }

  render () {
    if (!this.props.vehiclesList.list) {
      return <div>loading...</div>
    }
    return (
      <div>
        <Header>
          {this.props.vehiclesList.meta.length !== 1 ? (
            <PageTitle>{this.props.vehiclesList.meta.length} passende Fahrzeuge gefunden</PageTitle>
          ) : (
            <PageTitle>{this.props.vehiclesList.meta.length} passendes Fahrzeuge gefunden</PageTitle>
          )}
        </Header>
        <Content>
          <ListContainer>
            { this.renderList() }
          </ListContainer>
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
})(ResultList)
