import Ionicons from '@expo/vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

import { useContext, useState } from "react";

import { StyleSheet, Text, View } from "react-native";

import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { SafeAreaView } from "react-native-safe-area-context";

import { Product } from '../../components/Product';
import { CartContent } from '../../contexts/CartContext/CartContext';

export function Home() {

    const navigation = useNavigation();

    const { cartList, addCart } = useContext(CartContent);

    const [listProd, SetListProd] = useState([
      {
       id: "1",
       name: "Coca cola 2L",
       price: 9.50,
      //  quantity: 0,
      //  total: 0
      },
      {
        id: "2",
        name: "trufa Chocolate",
        price: 4.20,
        //quantity: 0,
        // total: 0
       },
       {
        id: "3",
        name: "Queijo 500g",
        price: 15.75,
        //quantity: 0,
        // total: 0
       },
       {
        id: "4",
        name: "Batata frita Porção",
        price: 23.85,
        //quantity: 0,
        // total: 0
       },
       {
        id: "5",
        name: "Guarana Lata 350g",
        price: 23.85,
        //quantity: 0,
        // total: 0
       },
    ])
    return(
        <SafeAreaView style={styles.container}>
        
        <View style={styles.cartContent}>
          <Text style={styles.title}>Lista de Produtos</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Carrinho") }   style={styles.cartButton}>
            {
            ( cartList?.length > 0 ) ?  
            <View style={styles.dot}>
              <Text style={styles.dotText}>{cartList?.length}</Text>
            </View>
            : null}
            <Ionicons name='cart-outline' size={32} color="#000" />
          </TouchableOpacity>
        </View>

        <FlatList 
         style={styles.listCustom}
         data={listProd}
         keyExtractor={(item) => String(item.id)}
         renderItem={ ({item}) => <Product data={item} addCart={ () => addCart(item) } /> }
        />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#FAFAFA",
    paddingEnd: 16,
    paddingStart: 16
  },
  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
    height: 65,
    // borderWidth: 2, 
    // borderColor: '#000',
    // paddingRight: 4
  },
  title: {
   fontSize:24,
   fontWeight: 'bold'
  },
  cartButton: {
   height: 65,
   width: 40,
   justifyContent: 'center'
  },
  dot: {
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: "orange",
   padding: 2,
   width: 26,
   height: 26,
   borderRadius: 12,
   position: 'absolute',
   zIndex: 99, /* add z index para cair por cima do icon */
   bottom: 36,
   right: -0
  },
  dotText: {
    fontSize: 13 /* 12 */
  }
});