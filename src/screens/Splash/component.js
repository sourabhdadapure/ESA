import React from 'react'
import styled from 'styled-components'

import { NavButton } from '../../components'

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const SplashText = styled.Text`
  font-size: 15;
`

const Spacer = styled.View`
  height: 25;
`

export default class SplashComponent extends React.Component {
  render() {
    const { onPress } = this.props
    return (
      <Wrapper>
        <NavButton
          title="USER 1"
          onPress={() => {
            onPress('USER_1')
          }}
        />
        <Spacer />
        <NavButton
          title="USER 2"
          onPress={() => {
            onPress('USER_2')
          }}
        />
        <Spacer />
        <NavButton
          title="USER 3"
          onPress={() => {
            onPress('USER_3')
          }}
        />
      </Wrapper>
    )
  }
}
