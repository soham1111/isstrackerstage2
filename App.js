
import React from 'react';

import {NavigatonContainer}from '@react-navigation/native'
import{createStackNavigator}from '@react-navigation/stack'
import HomeScreen from "./screens/HomeScreen";
import IssLocationScreen from "./screens/Iss";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Update";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IssLocation" component={IssLocationScreen} />
        <Stack.Screen name="Meteors" component={MeteorScreen} />
        <Stack.Screen name="Updates" component={UpdateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
