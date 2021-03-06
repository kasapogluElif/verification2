import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {

  View,
  Text,


} from 'react-native';

import surveyPage from "./surveyPage"
import successPage from "./successPage"


const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Survey Page"
          component={surveyPage}
          options={{

            headerStyle: {
              backgroundColor: '#232F34',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />

        <Stack.Screen
          name="Success Page"
          component={successPage}
          options={{

            headerStyle: {
              backgroundColor: '#232F34',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerLeft: () => (
              <View></View>
            ),
          }}
        />

        



      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  // TOP BAR
  topBar: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
});
