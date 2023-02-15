import { View, Text } from 'react-native'
import styled from 'styled-components/native';
import React from 'react'

const Component = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  align-self: center;

  width: 97%;

  margin-top: 5px;
  background-color: white;

  border: 1px solid black;
  border-radius: 10px;

`;

const ComponentImage = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 10px;


`;

const ComponentDetails = styled.View`
  width: 100%;
  margin-bottom: 5px;
`;

const ComponentTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;

  margin-top: 7px;
  align-self: center;
`;

const TextDiscription = styled.Text`
  font-size: 14px;
  font-weight: 400;
  margin-top: 7px;
`;

const ComponentDiscription = styled.View`
  max-width: 95%;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export default function BlockComponent({item, redirectPath,}) {
  return (
        <Component>
            <ComponentImage source={{ uri: item.image }}/>
            
            <ComponentDetails>
                <ComponentTitle>{item.title}</ComponentTitle>
            </ComponentDetails>

            <ComponentDiscription>
              <TextDiscription>{item.description}</TextDiscription>
            </ComponentDiscription>

        </Component>
  )
}