import React from 'react'
import styled from 'styled-components'

import { BarGraph, SplineGraph, Swipeable } from '../../components'

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const SplashText = styled.Text`
  font-size: 15;
`

export default class SplashComponent extends React.Component {
  render() {
    return (
      <Wrapper>
        <Swipeable />
      </Wrapper>
    )
  }
}
