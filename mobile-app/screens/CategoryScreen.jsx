import { StatusBar } from 'expo-status-bar';
import axios  from 'axios';
import styled from 'styled-components/native';
import { useEffect, useState } from 'react';
import RenderBlockComponents from '../components/RenderBlockComponents';
import loadData from '../utils/utils';
import Loading from '../components/Loading';


const Container = styled.View`
  flex: 1;
  background-color: white;
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

  if (isLoading==true) {
    return(
        <Loading />) ;
  };
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

      <ButtonOpacity onPress={() => 
        navigation.navigate('FAQsScreen',)} >
        <ButtonText>FAQs</ButtonText>
      </ButtonOpacity>
    </Container>
  );
}