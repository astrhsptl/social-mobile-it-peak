import { View, Text, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import React from 'react';
import BlockComponent from './BlockComponent';
import loadData from '../utils/utils';

export default function RenderBlockComponents({isLoading, url, setFunction, 
                                              setIsLoading, param, redirectPath, navigation}) {
  return (
    <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => loadData(url, setFunction, setIsLoading)}/>}
        data={param}
        renderItem={({item}) => 
          <TouchableOpacity onPress={() => navigation.navigate(redirectPath, {id: item.id, title: item.title,})}>
            <BlockComponent item={item}/>
          </TouchableOpacity>
        }/>
  );
}