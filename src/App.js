import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Navigator from './components/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" translucent={true} />
      <Navigator />
    </NavigationContainer>
  )
};

export default App;
