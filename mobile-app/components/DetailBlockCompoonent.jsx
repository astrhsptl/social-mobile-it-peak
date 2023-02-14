import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'

const Component = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  align-self: center;
  justify-content: center;

  width: 98%;
  
  margin-top: 5px;

  background-color: white;

  border: 1px solid black;
  border-radius: 5px;

`;

const ComponentImage = styled.Image`

  width: 95%;
  height: 200px;

  margin-top: 15px;
  margin-bottom: 15px;
`;

const ComponentTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const ComponentDetails = styled.View`
  width: 95%;

  margin-bottom: 15px;
  margin-top: 10px;

  justify-content: center;
  align-content: center;

`;

export default function DetailBlockCompoonent({point}) {
  return (
    <Component>

        <ComponentDetails>
            <ComponentTitle>{point.title}</ComponentTitle>
        </ComponentDetails>
      
        <ComponentImage source={{ uri: point.image }}/>

        <ComponentDetails>
            <ComponentTitle>{point.address}</ComponentTitle>
            <ComponentTitle>{point.longitude} {point.latitude}</ComponentTitle>
        </ComponentDetails>

  </Component> 
  )
}