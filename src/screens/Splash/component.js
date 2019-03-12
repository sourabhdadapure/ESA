import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { getSleepData } from '../../modules/sleepData'

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
    user1: state
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
        <SplashText> Splash</SplashText>
      </Wrapper>
    )
  }
}
