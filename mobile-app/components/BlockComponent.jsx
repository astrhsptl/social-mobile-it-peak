import { View, Text } from 'react-native'
import styled from 'styled-components/native';
import React from 'react'

const Component = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  align-self: center;

  width: 98%;
  
  margin-top: 5px;

  background-color: white;

  border: 1px solid black;
  border-radius: 5px;

`;

const ComponentImage = styled.Image`
  width: 100px;
  height: 100px;

  margin: 8px 10px;
`;

const ComponentTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const ComponentDetails = styled.View`
  flex: 1;

  justify-content: center;

`;

export default function BlockComponent({item, redirectPath,}) {
  return (
        <Component>
            <ComponentImage source={{ uri: item.image }}/>
            <ComponentDetails>
                <ComponentTitle>{item.title}</ComponentTitle>
            </ComponentDetails>
        </Component>
  )
}