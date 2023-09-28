import { createDrawerNavigator } from '@react-navigation/drawer';

import { StyleSheet, View } from "react-native";

import { Carrinho } from "../pages/Carrinho";
import { Home } from "../pages/Home";

const Stack = createDrawerNavigator();

export function Route() {

    return(
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
          name="Home"
          component={Home}
          options={{
           headerShown: false
          }}
          />
          <Stack.Screen 
          name="Carrinho"
          component={Carrinho}
          options={{
            headerTitle: 'Meu Carrinho',
          }}
          />
        </Stack.Navigator>
    );
}
