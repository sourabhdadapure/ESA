import React from 'react'
import SplashComponent from './component'

export default class SplashContainer extends React.Component {
  render() {
    return (
      <SplashComponent
        onPress={() => {
          this.props.navigation.navigate('GraphData')
        }}
      />
    )
  }
}
