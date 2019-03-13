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
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { getSleepData, user1 } = this.props
    getSleepData()
  }

  buildGraphData = arr => {}

  render() {
    const { gettingSleepData, user1 } = this.props
    const heartRateAxes1 = buildAxes(user1.heartRate[0])
    const respiratoryAxes1 = buildAxes(user1.respiratoryRate[0])
    const heartRateAxes2 = buildAxes(user1.heartRate[1])
    const respiratoryAxes2 = buildAxes(user1.respiratoryRate[1])
    const heartRateAxes3 = buildAxes(user1.heartRate[2])
    const respiratoryAxes3 = buildAxes(user1.respiratoryRate[2])
    //
    const roomTemperature1 = buildAxes(user1.roomTemperature[0])
    const bedTemperature1 = buildAxes(user1.bedTemperature[0])
    const roomTemperature2 = buildAxes(user1.roomTemperature[1])
    const bedTemperature2 = buildAxes(user1.bedTemperature[1])
    const roomTemperature3 = buildAxes(user1.roomTemperature[2])
    const bedTemperature3 = buildAxes(user1.bedTemperature[2])

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
            y1Axis={roomTemperature1.yAxis}
            y2Axis={bedTemperature1.yAxis}
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
            y1Axis={roomTemperature2.yAxis}
            y2Axis={bedTemperature2.yAxis}
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
            y1Axis={roomTemperature3.yAxis}
            y2Axis={bedTemperature3.yAxis}
          />
        </Wrapper>
        <Wrapper>
          <TextWrapper>Heart and Respiratory Rates</TextWrapper>
          <SplineGraph
            title="Interval 1"
            y1Title="Heart"
            y2Title="Respiratory"
            xAxis={heartRateAxes1.xAxis}
            y1Axis={heartRateAxes1.yAxis}
            y2Axis={respiratoryAxes1.yAxis}
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
            y1Axis={heartRateAxes2.yAxis}
            y2Axis={respiratoryAxes2.yAxis}
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
            y1Axis={heartRateAxes3.yAxis}
            y2Axis={respiratoryAxes3.yAxis}
          />
        </Wrapper>
      </Swiper>
    )
  }
}
