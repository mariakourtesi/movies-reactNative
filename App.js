import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieListScreen from './MovieListScreen';
import MovieDetailScreen from './MovieDetailScreen';


const Stack = createStackNavigator();

function App() {
  return ( 
    <NavigationContainer >
    <Stack.Navigator >
    <Stack.Screen name = "MoviesList"
    component = {MovieListScreen}/>
    <Stack.Screen name = "MovieDetails" component = {MovieDetailScreen} >
    </Stack.Screen> 
    </Stack.Navigator>
     </NavigationContainer>
  );
}


export default App;