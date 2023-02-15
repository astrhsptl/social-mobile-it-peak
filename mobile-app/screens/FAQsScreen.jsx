import { FlatList, RefreshControl, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import loadData from '../utils/utils';
import BlockComponent from '../components/BlockComponent';
import FAQComponent from '../components/FAQComponent';
import RenderFAQComponents from '../components/RenderFAQComponents';
import Loading from '../components/Loading';


const Container = styled.View`
  flex: 1;
`;

export default function FAQsScreen({navigation}) {
    const [faqs, setFAQs] = useState({});
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(()=>{
      loadData('http://alexander.kizimenko.fvds.ru/api/v1/docs/faq/', setFAQs, setIsLoading);
      navigation.setOptions({ title: 'FAQs', });
    },[]);
    
    if (isLoading==true) {
      return(
          <Loading />) ;
    };
  
    return (
      <Container>
        <RenderFAQComponents
            isLoading={isLoading}
            url={'http://alexander.kizimenko.fvds.ru/api/v1/docs/faq/'}
            setFunction={setFAQs}
            setIsLoading={setIsLoading} 
            param={faqs}
            redirectPath={'FAQDetailScreen'}
            navigation={navigation}/>
      </Container> 
    );
};




