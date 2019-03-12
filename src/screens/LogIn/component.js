import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const LogInText = styled.Text`
  font-size: 15;
`

const LogInComponent = () => (
  <Wrapper>
    <LogInText>LogIn Screen</LogInText>
  </Wrapper>
)

export default LogInComponent
