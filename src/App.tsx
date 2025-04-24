import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Auth from './routes/Auth';
import Routes from './routes/Routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}

export default App