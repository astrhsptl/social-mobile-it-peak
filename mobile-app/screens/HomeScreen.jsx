import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import Loading from '../components/Loading';
import RenderBlockComponents from '../components/RenderBlockComponents';
import loadData from '../utils/utils';

const Container = styled.View`
  flex: 1;
`;

const CategotryBox = styled.View`
`;

const ButtonOpacity = styled.TouchableOpacity`
  background-color: #000;
  
  width: 98%;

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
          <CategotryBox>
          <RenderBlockComponents 
            isLoading={isLoading} 
            url={'http://alexander.kizimenko.fvds.ru/api/v1/docs/categories/'}
            setFunction={setCategories}
            setIsLoading={setIsLoading}
            param={categories} 
            redirectPath={'CategoryScreen'} 
            navigation={navigation}/>
        </CategotryBox>
        <ButtonOpacity onPress={() => 
          navigation.navigate('FAQsScreen',)} >
          <ButtonText>FAQs</ButtonText>
        </ButtonOpacity>
    </Container> 
  );
};
