import { View, Text, Button, Alert, Linking, StyleSheet, TouchableOpacity, FlatList, RefreshControl } from 'react-native'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import CustomButton from './CustomButton';
import loadData from '../utils/utils';

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

export default function DetailBlockCompoonent({point, url, setFunction, setIsLoading, isLoading}) {
  return (
         <FlatList
          refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => 
            loadData(
              url, 
              setFunction, 
              setIsLoading)}/>}
          data={[point]}
          renderItem={({item}) => 
              <Component>
                <ComponentDetails>
                    <ComponentTitle>{item.title}</ComponentTitle>
                </ComponentDetails>
                <ComponentImage source={{ uri: item.image }}/>
                <ComponentDetails>
                    <ComponentTitle>{item.address}</ComponentTitle>
                    <ComponentTitle>{item.longitude} {item.latitude}</ComponentTitle>
                </ComponentDetails>
                <CustomButton onPress={()=>
                  Linking.openURL(`geo:${item.latitude}, ${item.longitude}`)}>Мобильные карты</CustomButton>
                <CustomButton onPress={() => 
                  Linking.openURL(`https://yandex.ru/maps/?ll=${item.longitude},${item.latitude}&z=20`)}>Web Yandex maps</CustomButton>
              </Component> }/>
  )
};