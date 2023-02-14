import { View, Text, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import React from 'react';
import BlockComponent from './BlockComponent';

export default function RenderBlockComponents({param, redirectPath, navigation}) {
  return (
    <FlatList
        // refreshControl={<RefreshControl refreshing={isLoading}/>}
        data={param}
        renderItem={({item}) => 
          <TouchableOpacity onPress={() => navigation.navigate(redirectPath, {id: item.id, title: item.title,})}>
            <BlockComponent item={item}/>
          </TouchableOpacity>
        }/>
  );
}