import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import axios  from 'axios';
import styled from 'styled-components/native';
import loadData from '../utils/utils';
import DetailBlockCompoonent from '../components/DetailBlockCompoonent';


const Container = styled.View`
  flex: 1;
`;

export default function PointDetailScreen({ route, navigation }) {
  const [point, setPoint] = useState({});
  const {id, title} = route.params;

  useEffect(()=>{
      loadData(
        `http://alexander.kizimenko.fvds.ru/api/v1/docs/points/detail/${id}/`,
        setPoint);
    navigation.setOptions({ title, });
  },[]);

  return (
    <Container>
      <DetailBlockCompoonent point={point}/>
    </Container>
  );
}