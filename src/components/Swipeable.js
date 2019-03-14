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
    const { getSleepData } = this.props
    getSleepData()
  }

  render() {
    const { gettingSleepData, user1 } = this.props

    const {
      heartRate,
      respiratoryRate,
      bedTemperature,
      roomTemperature
    } = user1
    console.log(
      'USER1',
      roomTemperature,
      heartRate,
      respiratoryRate,
      bedTemperature,
      roomTemperature
    )

    if (gettingSleepData) {
      return <ActivityIndicator size="large" color="black" />
    }
    return (
      <Swiper>
        <Wrapper>
          <BarGraph awakeData={[]} deepData={[]} lightData={[]} outData={[]} />
        </Wrapper>
        <Wrapper>
          <TextWrapper>Room and Bed Temparatures</TextWrapper>
          <SplineGraph
            y1Title="Room"
            y2Title="Bed"
            title="Interval 1"
            xAxis={roomTemperature[0].xAxis}
            y1Axis={roomTemperature[0].yAxis}
            y2Axis={bedTemperature[0].yAxis}
          />
          <SplineGraph
            y1Title="Room"
            y2Title="Bed"
            title="Interval 2"
            xAxis={roomTemperature[1].xAxis}
            y1Axis={roomTemperature[1].yAxis}
            y2Axis={bedTemperature[1].yAxis}
          />
          <SplineGraph
            y1Title="Room"
            y2Title="Bed"
            title="Interval 3"
            xAxis={roomTemperature[2].xAxis}
            y1Axis={roomTemperature[2].yAxis}
            y2Axis={bedTemperature[2].yAxis}
          />
        </Wrapper>
        <Wrapper>
          <TextWrapper>Heart and Respiratory Rates</TextWrapper>
          <SplineGraph
            title="Interval 1"
            y1Title="Heart"
            y2Title="Respiratory"
            xAxis={heartRate[0].xAxis}
            y1Axis={heartRate[0].yAxis}
            y2Axis={respiratoryRate[0].yAxis}
          />
          <SplineGraph
            title="Interval 2"
            y1Title="Heart"
            y2Title="Respiratory"
            xAxis={[heartRate[1].xAxis]}
            y1Axis={heartRate[1].yAxis}
            y2Axis={heartRate[1].yAxis}
          />
          <SplineGraph
            title="Interval 3"
            y1Title="Heart"
            y2Title="Respiratory"
            xAxis={[heartRate[2].xAxis]}
            y1Axis={heartRate[2].yAxis}
            y2Axis={respiratoryRate[2].yAxis}
          />
        </Wrapper>
      </Swiper>
    )
  }
}
