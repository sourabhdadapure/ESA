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

export default class SplashComponent extends React.Component {
  render() {
    const { onPress } = this.props
    return (
      <Wrapper>
        <NavButton title="USER 1" onPress={onPress} />
        <NavButton title="USER 2" onPress={onPress} />
        <NavButton title="USER 3" onPress={onPress} />
      </Wrapper>
    )
  }
}
