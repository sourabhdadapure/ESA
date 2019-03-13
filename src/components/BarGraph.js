import React from 'react'
import styled from 'styled-components'
import ChartView from 'react-native-highcharts'

const Wrapper = styled.View``

export default class BarGraph extends React.Component {
  render() {
    const options = {
      global: {
        useUTC: false
      },
      lang: {
        decimalPoint: ',',
        thousandsSep: '.'
      }
    }

    const conf = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Sleep Intervals'
      },
      xAxis: {
        categories: ['Interval 1', 'Interval 2', 'Interval 3']
      },
      yAxis: {
        min: 0,
        title: {
          text: ''
        }
      },
      tooltip: {
        pointFormat:
          '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
      },
      plotOptions: {
        column: {
          stacking: 'percent'
        }
      },
      series: [
        {
          name: 'Awake',
          data: [4260, 3060, 3600]
        },
        {
          name: 'Deep',
          data: [2520, 7440, 6240]
        },
        {
          name: 'Light',
          data: [15180, 13260, 15600]
        },
        {
          name: 'Out',
          data: [420, null, 900]
        }
      ]
    }
    return (
      <ChartView
        style={{ height: 400 }}
        config={conf}
        options={options}
        originWhitelist={['']}
      />
    )
  }
}
