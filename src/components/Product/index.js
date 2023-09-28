import Ionicons from '@expo/vector-icons/Ionicons';

import { useContext, useState } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { CartContent } from '../../contexts/CartContext/CartContext';

export function Product({data, addCart}) {

    // const { addCart } = useContext(CartContent);

    function addfunc() {
      addCart();
    }

    return(
        <View style={styles.container}>
        
          <View>
           <Text style={styles.title}>{data.name}</Text>
           <Text>R$ {data.price.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={styles.buttonAdd} onPress={() => addfunc()}>
            <Text style={styles.somar}>+</Text>
          </TouchableOpacity>
 
        </View>
    );
}

const styles = StyleSheet.create({
  //style={styles.price}
  container: {
    borderWidth: 1,
    borderColor: "DFDFDF",
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: '500',
    fontSize: 16
  },
  somar: {
    fontWeight: 'bold',
    fontSize: 22,
    color: "#FFFF"
  },
  buttonAdd: {
    paddingStart: 12,
    paddingEnd: 12,
    backgroundColor: '#00BFFF',
    borderRadius: 12,//6
    paddingTop: 6,
    paddingBottom: 6
  }
});