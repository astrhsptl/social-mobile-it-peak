import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import RenderBlockComponents from '../components/RenderBlockComponents';
import loadData from '../utils/utils';



const Container = styled.View`
  flex: 1;
`;

export default function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    loadData('http://alexander.kizimenko.fvds.ru/api/v1/docs/categories/', setCategories);
    navigation.setOptions({ title: 'Категории пунктов помощи', });
  },[]);

  return (
    <Container>
      <RenderBlockComponents param={categories} redirectPath={'CategoryScreen'} navigation={navigation}/>
    </Container> 
  );
}