import React from 'react'
import { ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Swiper from 'react-native-swiper'

import { BarGraph, SplineGraph } from '../components'
import { getSleepData } from '../modules/sleepData'
import { buildAxes } from '../utility'

const Wrapper = styled.View``

const TextWrapper = styled.Text`
  font-size: 20;
  color: red;
  text-align: center;
`

@connect(
  state => {
    const { user1 } = state.sleepData

    return {
      user1
    }
  },
  { getSleepData }
)
export default class Swipeable extends React.Component {
  componentDidMount() {
    this.props.getSleepData()
  }

  buildGraphData = arr => {}

  render() {
    const { gettingSleepData, user1 } = this.props
    const axes = buildAxes(user1.heartRate[0])
    console.log('BUILD AXES', buildAxes(user1.heartRate[0]))
    if (gettingSleepData) {
      return <ActivityIndicator size="large" color="black" />
    }
    return (
      <Swiper>
        <Wrapper>
          <BarGraph
            awakeData={
              [
                // sleepStages[0].awake,
                // sleepStages[1].awake,
                // sleepStages[2].awake
              ]
            }
            deepData={
              [
                // sleepStages[0].deep,
                // sleepStages[1].deep,
                // sleepStages[2].deep
              ]
            }
            lightData={
              [
                // sleepStages[0].light,
                // sleepStages[1].light,
                // sleepStages[2].light
              ]
            }
            outData={
              [
                // sleepStages[0].out,
                // sleepStages[1].out,
                // sleepStages[2].out
              ]
            }
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
            xAxis={[]}
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
