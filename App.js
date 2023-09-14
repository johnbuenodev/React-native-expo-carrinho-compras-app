import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { NativeScreenNavigationContainer } from 'react-native-screens';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Route } from './src/Routes';

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer style={styles.container}>
      <Route />
      <StatusBar backgroundColor="#FAFAFA" barStyle={'dark-content'} />
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
