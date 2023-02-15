import { StatusBar } from 'expo-status-bar';
import axios  from 'axios';
import styled from 'styled-components/native';
import { useEffect, useState } from 'react';
import RenderBlockComponents from '../components/RenderBlockComponents';
import loadData from '../utils/utils';


const Container = styled.View`
  flex: 1;
`;

export default function CategoryScreen({ route, navigation }) {
  const [points, setPoints] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {id, title} = route.params;

  useEffect(()=>{
    loadData(
      `http://alexander.kizimenko.fvds.ru/api/v1/docs/points/settings/?category_id=${id}`,
      setPoints, setIsLoading);
    navigation.setOptions({ title, });
  },[]);

  return (
    <Container>
      <RenderBlockComponents 
        isLoading={isLoading} 
        url={`http://alexander.kizimenko.fvds.ru/api/v1/docs/points/settings/?category_id=${id}`}
        setFunction={setPoints}
        setIsLoading={setIsLoading}
        param={points} 
        redirectPath={'PointDetailScreen'} 
        navigation={navigation}/>
    </Container>
  );
}