import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ChartView from 'react-native-highcharts'

const Wrapper = styled.View``

export default class SplineGraph extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    xAxis: PropTypes.array.isRequired,
    y1Title: PropTypes.string.isRequired,
    y1Axis: PropTypes.array.isRequired,
    y2Title: PropTypes.string.isRequired,
    y2Axis: PropTypes.array.isRequired
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
        type: 'spline'
      },
      title: {
        text: this.props.title
      },

      xAxis: {
        categories: this.props.xAxis
      },
      yAxis: {
        title: {
          text: 'Temperature'
        },
        labels: {
          formatter: function() {
            return this.value + '°'
          }
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      series: [
        {
          name: this.props.y1Title,
          marker: {
            symbol: 'square'
          },
          data: this.props.y1Axis

          // {
          //   y: 26.5,
          //   marker: {
          //     symbol:
          //       'url(https://www.highcharts.com/samples/graphics/sun.png)'
          //   }
          // }
        },
        {
          name: this.props.y2Title,
          marker: {
            symbol: 'diamond'
          },
          data: this.props.y2Axis
          // {
          //   y: 21.93,
          //   marker: {
          //     symbol:
          //       'url(https://www.highcharts.com/samples/graphics/snow.png)'
          //   }
          // }
        }
      ]
    }

    return (
      <ChartView
        style={{ height: 250 }}
        config={conf}
        options={options}
        originWhitelist={['']}
      />
    )
  }
}
