import React from 'react'
import SplashComponent from './component'

import { connect } from 'react-redux'
import { userSelector } from '../../modules/users'

@connect(
  null,
  { userSelector }
)
export default class SplashContainer extends React.Component {
  render() {
    const { navigation, userSelector } = this.props
    return (
      <SplashComponent
        onPress={user => {
          userSelector(user)
          navigation.navigate('GraphData')
        }}
      />
    )
  }
}
