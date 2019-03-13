import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ChartView from 'react-native-highcharts'

const Wrapper = styled.View``

export default class SplineGraph extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
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
        categories: [
          '09T08',
          '09T09',
          '09T10',
          '09T11',
          '09T12',
          '09T13',
          '09T14'
        ]
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
          name: 'Room Temperature',
          marker: {
            symbol: 'square'
          },
          data: [
            21.93,
            21.53,
            21.44,
            21.02,
            20.24,
            20.18,
            20.54,
            {
              y: 26.5,
              marker: {
                symbol:
                  'url(https://www.highcharts.com/samples/graphics/sun.png)'
              }
            }
          ]
        },
        {
          name: 'Bed Temparature',
          marker: {
            symbol: 'diamond'
          },
          data: [
            21.53,
            21.44,
            21.02,
            20.24,
            20.18,
            20.54,
            {
              y: 21.93,
              marker: {
                symbol:
                  'url(https://www.highcharts.com/samples/graphics/snow.png)'
              }
            }
          ]
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
