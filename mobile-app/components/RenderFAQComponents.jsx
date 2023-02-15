import { View, Text, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import React from 'react';
import loadData from '../utils/utils';
import FAQComponent from './FAQComponent';


export default function RenderFAQComponents({isLoading, url, setFunction, 
                                              setIsLoading, param, redirectPath, navigation}) {
  return (
    <FlatList
    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => loadData(url, setFunction, setIsLoading)}/>}
    data={param}
    renderItem={({item}) => 
      <TouchableOpacity onPress={() => navigation.navigate(redirectPath, {id: item.id, title: item.title,})}>
        <FAQComponent item={item}/>
      </TouchableOpacity>
    }/>
  );
}