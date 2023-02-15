import { View, Text, Linking, FlatList, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import loadData from '../utils/utils';
import styled from 'styled-components';
import CustomButton from '../components/CustomButton';
import axios from 'axios';
import Loading from '../components/Loading';


const Container = styled.View`
  flex: 1;
  background-color: white;

`;

const ComponentTitle = styled.Text`
  font-size: 17px;
  margin: 10px 0;

  font-weight: 700;
`;

const ComponentDetails = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  align-self: center;
  justify-content: center;

  width: 95%;
  
  margin-top: 5px;

  background-color: white;

  border-radius: 5px;
`;

const ComponentText = styled.Text`
  margin-top: 10px;
  margin-bottom: 20px;


  font-size: 15px;
  font-weight: 400;
`;

const ButtonOpacity = styled.TouchableOpacity`
  background-color: #000;
  
  width: 100%;

  border: 1px solid #fff;
  border-radius: 5px;
  
  padding: 12px 10px;
  margin-top: 5px;
  align-self: center;

`;

const ButtonText = styled.Text`
  color: #000;

  align-self: center;
  color: #fff;

  font-size: 14px;
  font-weight: bold;
`;


export default function FAQDetailScreen({ route, navigation }) {
    const [point, setPoint] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {id, title} = route.params;  

    useEffect(()=>{
        loadData(
          `http://alexander.kizimenko.fvds.ru/api/v1/docs/faq/${id}/`,
          setPoint, setIsLoading);
        navigation.setOptions({ title, });
    },[]);
    
    if (isLoading==true) {
      return(
          <Loading />) ;
    }; 
    return (
        <Container>
          <FlatList
          refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => 
            loadData(
              `http://alexander.kizimenko.fvds.ru/api/v1/docs/faq/${id}/`, 
              setPoint, 
              setIsLoading)}/>}
          data={[point]}
          renderItem={({item}) => 
              <ComponentDetails>
                <ComponentTitle>{item.title}</ComponentTitle>
                <ComponentText>{item.discription}</ComponentText>
                <ButtonOpacity onPress={() => 
                    Linking.openURL(item.doc)}>
                    <ButtonText>Скачать документ</ButtonText>
                </ButtonOpacity>
              </ComponentDetails>
           }/>
        </Container>
    );
};