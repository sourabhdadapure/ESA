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
          <BarGraph
            awakeData={[4260, 3060, 3600]}
            deepData={[2520, 7440, 6240]}
            lightData={[15180, 13260, 15600]}
            outData={[420, 0, 900]}
          />
        </Wrapper>
        <Wrapper>
          <TextWrapper>Room and Bed Temparatures</TextWrapper>
          <SplineGraph
            y1Title="Room"
            y2Title="Bed"
            title="Interval 1"
            xAxis={[
              '09T08',
              '09T09',
              '09T10',
              '09T11',
              '09T12',
              '09T13',
              '09T14'
            ]}
            y1Axis={[21.93, 21.53, 21.44, 21.02, 20.24, 20.18, 20.54]}
            y2Axis={[21.53, 21.44, 21.02, 20.24, 20.18, 20.54]}
          />
          <SplineGraph
            y1Title="Room"
            y2Title="Bed"
            title="Interval 2"
            xAxis={[
              '09T08',
              '09T09',
              '09T10',
              '09T11',
              '09T12',
              '09T13',
              '09T14'
            ]}
            y1Axis={[21.93, 21.53, 21.44, 21.02, 20.24, 20.18, 20.54]}
            y2Axis={[21.53, 21.44, 21.02, 20.24, 20.18, 20.54]}
          />
          <SplineGraph
            y1Title="Room"
            y2Title="Bed"
            title="Interval 3"
            xAxis={[
              '09T08',
              '09T09',
              '09T10',
              '09T11',
              '09T12',
              '09T13',
              '09T14'
            ]}
            y1Axis={[21.93, 21.53, 21.44, 21.02, 20.24, 20.18, 20.54]}
            y2Axis={[21.53, 21.44, 21.02, 20.24, 20.18, 20.54]}
          />
        </Wrapper>
        <Wrapper>
          <TextWrapper>Heart and Respiratory Rates</TextWrapper>
          <SplineGraph
            title="Interval 1"
            y1Title="Heart"
            y2Title="Respiratory"
            xAxis={[
              '09T08',
              '09T09',
              '09T10',
              '09T11',
              '09T12',
              '09T13',
              '09T14'
            ]}
            y1Axis={[21.93, 21.53, 21.44, 21.02, 20.24, 20.18, 20.54]}
            y2Axis={[21.53, 21.44, 21.02, 20.24, 20.18, 20.54]}
          />
          <SplineGraph
            title="Interval 2"
            y1Title="Heart"
            y2Title="Respiratory"
            xAxis={[
              '09T08',
              '09T09',
              '09T10',
              '09T11',
              '09T12',
              '09T13',
              '09T14'
            ]}
            y1Axis={[21.93, 21.53, 21.44, 21.02, 20.24, 20.18, 20.54]}
            y2Axis={[21.53, 21.44, 21.02, 20.24, 20.18, 20.54]}
          />
          <SplineGraph
            title="Interval 3"
            y1Title="Heart"
            y2Title="Respiratory"
            xAxis={[
              '09T08',
              '09T09',
              '09T10',
              '09T11',
              '09T12',
              '09T13',
              '09T14'
            ]}
            y1Axis={[21.93, 21.53, 21.44, 21.02, 20.24, 20.18, 20.54]}
            y2Axis={[21.53, 21.44, 21.02, 20.24, 20.18, 20.54]}
          />
        </Wrapper>
      </Swiper>
    )
  }
}
