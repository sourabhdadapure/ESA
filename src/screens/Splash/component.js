import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { getSleepData } from '../../modules/sleepData'
import { BarGraph, SplineGraph, Swipeable } from '../../components'

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const SplashText = styled.Text`
  font-size: 15;
`

@connect(
  state => ({
    user1: state.sleepData.user1,
    user2: state.sleepData.user2,
    user3: state.sleepData.user3
  }),
  { getSleepData }
)
export default class SplashComponent extends React.Component {
  componentDidMount() {
    this.props.getSleepData()
  }

  render() {
    return (
      <Wrapper>
        <Swipeable />
      </Wrapper>
    )
  }
}
