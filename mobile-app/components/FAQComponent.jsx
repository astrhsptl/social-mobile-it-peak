import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components';


const Component = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  align-self: center;

  width: 98%;
  
  margin-top: 5px;

  background-color: white;
  justify-content: center;

  border: 1px solid black;
  border-radius: 5px;

`;

const ComponentTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const ComponentDetails = styled.View`
  max-width: 80%;
  height: 50px;

  justify-content: center;

`;


export default function FAQComponent({item}) {
  return (
    <Component>
        <ComponentDetails>
            <ComponentTitle>{item.title}</ComponentTitle>
        </ComponentDetails>
    </Component>
  )
}