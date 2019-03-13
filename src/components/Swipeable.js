import React from 'react'
import styled from 'styled-components'
import Swiper from 'react-native-swiper'
import BarGraph from './BarGraph'
import SplineGraph from './SplineGraph'

const Wrapper = styled.View``

const TextWrapper = styled.Text`
  font-size: 20;
  color: red;
  text-align: center;
`

export default class Swipeable extends React.Component {
  render() {
    return (
      <Swiper>
        <Wrapper>
          <BarGraph />
        </Wrapper>
        <Wrapper>
          <TextWrapper>Room and Bed Temparatures</TextWrapper>
          <SplineGraph title="Interval 1" />
          <SplineGraph title="Interval 2" />
          <SplineGraph title="Interval 3" />
        </Wrapper>
        <Wrapper>
          <TextWrapper>Heart and Respiratory Rates</TextWrapper>
          <SplineGraph title="Interval 1" />
          <SplineGraph title="Interval 2" />
          <SplineGraph title="Interval 3" />
        </Wrapper>
      </Swiper>
    )
  }
}
