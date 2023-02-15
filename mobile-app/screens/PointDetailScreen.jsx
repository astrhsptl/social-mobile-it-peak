import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import loadData from '../utils/utils';
import Loading from '../components/Loading';
import DetailBlockCompoonent from '../components/DetailBlockCompoonent';


const Container = styled.View`
  flex: 1;
  background-color: white;

`;

export default function PointDetailScreen({ route, navigation }) {
  const [point, setPoint] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {id, title} = route.params;

  useEffect(()=>{
      loadData(
        `http://alexander.kizimenko.fvds.ru/api/v1/docs/points/detail/${id}/`,
        setPoint, setIsLoading);
    navigation.setOptions({ title, });
  },[]);
    
  if (isLoading==true) {
    return(
        <Loading />) ;
  };
  return (
    <Container>
      <DetailBlockCompoonent 
        point={point}
        url={`http://alexander.kizimenko.fvds.ru/api/v1/docs/points/detail/${id}/`}
        setFunction={setPoint}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        />
    </Container>
  );
}