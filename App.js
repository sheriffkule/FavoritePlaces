import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="All Places"
            component={AllPlaces}
            options={({navigation}) => ({
              headerRight: ({tintColor}) => (
                <IconButton
                  icon="add"
                  size={25}
                  color={tintColor}
                  onPress={() => navigation.navigate('Add Place')}
                />
              ),
            })}
          />
          <Stack.Screen name="Add Place" component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
