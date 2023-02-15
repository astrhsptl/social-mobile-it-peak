import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import Loading from '../components/Loading';
import RenderBlockComponents from '../components/RenderBlockComponents';
import loadData from '../utils/utils';

const Container = styled.View`
  flex: 1;
  background-color: white;

`;

const CategotryBox = styled.View`
  border: 2px solid black;
`;

const ButtonOpacity = styled.TouchableOpacity`
  background-color: #000;
  
  width: 98%;

  border: 1px solid #fff;
  border-radius: 5px;
  margin-top: 4px;
  padding: 12px 10px;
  align-self: center;

`;

const ButtonText = styled.Text`
  color: #000;

  align-self: center;
  color: #fff;

  font-size: 14px;
  font-weight: bold;
`;

export default function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    loadData('http://alexander.kizimenko.fvds.ru/api/v1/docs/categories/', setCategories, setIsLoading);
    navigation.setOptions({ title: 'Категории пунктов помощи', });
  },[]);


  if (isLoading==true) {
    return(
        <Loading />) ;
  };
  
  return (
    <Container>
      <RenderBlockComponents 
        isLoading={isLoading} 
        url={'http://alexander.kizimenko.fvds.ru/api/v1/docs/categories/'}
        setFunction={setCategories}
        setIsLoading={setIsLoading}
        param={categories} 
        redirectPath={'CategoryScreen'} 
        navigation={navigation}/>

      <ButtonOpacity onPress={() => 
        navigation.navigate('FAQsScreen',)} >
        <ButtonText>FAQs</ButtonText>
      </ButtonOpacity>
    </Container> 
  );
};