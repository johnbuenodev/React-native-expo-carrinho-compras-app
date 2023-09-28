import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';

import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Route } from './src/Routes';
import CartProvider from './src/contexts/CartContext/CartContext';

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer style={styles.container}>
      
      <CartProvider>
        <StatusBar backgroundColor="#FAFAFA" barStyle={'dark-content'} />
        <Route />
      </CartProvider>

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
