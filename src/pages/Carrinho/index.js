import { useIsFocused } from "@react-navigation/native";

import { useContext, useEffect, useState } from "react";

import { StyleSheet, Text, View, FlatList } from "react-native";

import { CartItem } from "../../components/CartItem";
import { CartContent } from "../../contexts/CartContext/CartContext";

export function Carrinho() {

    const isFocused = useIsFocused();

    const { cartList, addCart, subCart, totalCarrinho } = useContext(CartContent);
    const [cartListLocal, setCartListLocal] = useState([]); 
   
    useEffect(() => {
      

      function loadData() {
        setCartListLocal(cartList);
      }

      loadData();

      return () => { setCartListLocal([]) };
    }, [isFocused]);

    return(
        <View style={styles.container}>
         
          <FlatList 
           style={styles.listCustom}
           showsVerticalScrollIndicator={false}
           ListEmptyComponent={ <Text style={{ textAlign:"center", padding: 16, fontSize: 16 }}>Carrinho vazio!</Text>}
           data={cartListLocal}
           keyExtractor={(item) => item.id}
           renderItem={ ({item}) => <CartItem data={item} addItem={() => addCart(item)} subItem={() => subCart(item)} />}
           ListFooterComponent={<Text style={{ textAlign:"left", padding: 14, fontSize: 20 }}>Total R$ {totalCarrinho.toFixed(2)}</Text>}
          />

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#FAFAFA",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14
  }
});