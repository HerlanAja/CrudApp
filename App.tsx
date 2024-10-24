import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ItemList">
        <Stack.Screen name="ItemList" component={ItemList} />
        <Stack.Screen name="ItemForm" component={ItemForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
