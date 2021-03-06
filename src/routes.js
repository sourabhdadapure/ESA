import React from 'react'
import { Provider } from 'react-redux'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Splash, LogIn, GraphData } from './screens'

import configureStore from './config/configureStore'

const store = configureStore()

const AppStack = createStackNavigator({
  Splash: { screen: Splash },
  LogIn: { screen: LogIn },
  GraphData: { screen: GraphData }
})

const App = createAppContainer(AppStack)

export default class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
