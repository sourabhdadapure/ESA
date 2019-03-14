import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ChartView from 'react-native-highcharts'

const Wrapper = styled.View``

export default class BarGraph extends React.Component {
  static propTypes = {
    awakeData: PropTypes.array.isRequired,
    deepData: PropTypes.array.isRequired,
    lightData: PropTypes.array.isRequired,
    outData: PropTypes.array.isRequired
  }

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
        text: 'Sleep Stages'
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
          data: this.props.awakeData
        },
        {
          name: 'Deep',
          data: this.props.deepData
        },
        {
          name: 'Light',
          data: this.props.lightData
        },
        {
          name: 'Out',
          data: this.props.outData
        }
      ]
    }
    return (
      <ChartView
        style={{ height: 400, top: 50 }}
        config={conf}
        options={options}
        originWhitelist={['']}
      />
    )
  }
}
