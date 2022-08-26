import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import RootNavigator from './src/presentation';
import { DataProvider } from './src/application';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle='light-content' />
      <DataProvider>
        <RootNavigator />
      </DataProvider>
    </SafeAreaView>
  );
};

export default App;
