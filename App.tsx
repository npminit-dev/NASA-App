import Header from './components/header'
import Apod from './components/apod'
import { NavigationContainer } from '@react-navigation/native'
import { NativeStackNavigationOptions, NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LastNApods from './components/lastNApods/LastNApods';
import lastNApod from './components/lastNApod';
import { ApodData } from './tools/useApods';

export type RootStackParamList = { // tipos para el stack
  Home: undefined,
  LastNApod: {
    data: ApodData | undefined
  },
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home', 'MainStack'>
export type LastNApodScreenProps = NativeStackScreenProps<RootStackParamList, 'LastNApod', 'MainStack'>

const Stack = createNativeStackNavigator<RootStackParamList>()

function Home(): JSX.Element {
  return (
    <View>
      <Header></Header>
      <Apod></Apod>
      <LastNApods nApods={5}></LastNApods>
    </View>
  )
}

function App(): JSX.Element {
  return (    
    <View style={styles.mainbox}>
    <StatusBar/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={NavHeaderOpts}
          initialRouteName='Home'
          id='MainStack'
        >
          <Stack.Screen 
            name='Home' 
            component={Home}
          />
          <Stack.Screen 
            name='LastNApod' 
            component={lastNApod}
            initialParams={{ data: undefined }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  mainbox: {
    backgroundColor: '#0B3D91',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingTop: 10
  }
});

const NavHeaderOpts: NativeStackNavigationOptions = {
  headerShown: false,
  headerBackVisible: true,
  contentStyle: {
    backgroundColor: 'transparent'
  }
}

export default App;
