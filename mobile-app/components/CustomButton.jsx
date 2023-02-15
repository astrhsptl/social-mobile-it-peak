import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components'


const ButtonOpacity = styled.TouchableOpacity`
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 12px 10px;
    margin: 0 auto;
    margin-bottom: 10px;
`;

const ButtonText = styled.Text`
      color: #000;

      align-self: center;

      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
`;

export default function CustomButton({onPress, children}) {
  return (
    <ButtonOpacity onPress={onPress} >
        <ButtonText>{children}</ButtonText>
    </ButtonOpacity>

  );
};