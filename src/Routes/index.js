import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, View } from "react-native";

import { Carrinho } from "../pages/Carrinho";
import { Home } from "../pages/Home";

const Stack = createNativeStackNavigator();

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
