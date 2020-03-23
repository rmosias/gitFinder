import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="Usuários" component={Main} />
        <Stack.Screen name="Perfil" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
