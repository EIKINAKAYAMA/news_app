import React from "react";
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export const DetailsScreen = () => {
  const [ flat, setText ] = React.useState('');
 return (
   <View >
     <Text>詳細画面</Text>
     <TextInput type='flat' value={flat} onChangeText={text => setText(text)}/>
   </View>
 );
}