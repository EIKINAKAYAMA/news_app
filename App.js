import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from "./screens/Home";
import { DetailsScreen } from "./screens/Details";


export default function App() {
 const Stack = createStackNavigator();

 return (
   <PaperProvider>
    <NavigationContainer>

      {/* 画面遷移の各ページを管理する */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Details" component={ DetailsScreen } />
      </Stack.Navigator>

    </NavigationContainer>
  </PaperProvider>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});
