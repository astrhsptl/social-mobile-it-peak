import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'


const ButtonText = styled.Text`
    font-size: 20px;
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
    border: 1px solid black;
    border-radius: 2px;
`;


export default function Button({text, path, navigation}) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(path)}>
            <ButtonText>{ text }</ButtonText>
        </TouchableOpacity>
    )
};