import React, { useMemo, useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigations/RootStack';


export default function App() {

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <RootStack />
    </NavigationContainer>
  );
}
