import React from 'react'
import styled from 'styled-components'
import Swiper from 'react-native-swiper'

const Swipe1 = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #9dd6eb;
`

const Swipe2 = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #97cae5;
`

const Swipe3 = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #92bbd9;
`

const TextWrapper = styled.Text`
  font-size: 25;
  color: white;
`

export default class Swipeable extends React.Component {
  render() {
    return (
      <Swiper showsButtons={true}>
        <Swipe1>
          <TextWrapper> SLIDE 1</TextWrapper>
        </Swipe1>
        <Swipe2>
          <TextWrapper> SLIDE 2</TextWrapper>
        </Swipe2>
        <Swipe3>
          <TextWrapper> SLIDE 3</TextWrapper>
        </Swipe3>
      </Swiper>
    )
  }
}
