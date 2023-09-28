import Ionicons from '@expo/vector-icons/Ionicons';

import { useContext, useEffect, useState } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function CartItem({data, addItem, subItem }) {

     /* <Text>Total R$ {data.price.toFixed(2)}</Text> */

    const [quantityItem, setQuantityItem] = useState(data?.quantity); 

    useEffect(() => {

      function loadData() {
        setQuantityItem(data?.quantity);
      }

      loadData();
      
    },[data?.quantity]);

    function addFunc() {
      addItem(); 
      setQuantityItem(quantityItem => quantityItem + 1);
    }

    function subFunc() {
      subItem(); 
      if(quantityItem === 0) {
        setQuantityItem(0);
        return;
      }
      setQuantityItem(quantityItem => quantityItem - 1);
    }

    return(
        <View style={styles.container}>
        
          <View>
           <Text style={styles.title}>{data.name}</Text>
            <Text>R$ {data.price.toFixed(2)}</Text>
          </View>

          <View style={styles.quantityContainer}>

          <TouchableOpacity style={styles.buttonAdd} onPress={() => subFunc()}>
            <Text style={styles.somar}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityCustom}>{quantityItem}</Text>

          <TouchableOpacity style={styles.buttonAdd} onPress={() => addFunc()}>
            <Text style={styles.somar}>+</Text>
          </TouchableOpacity>
          
          </View>
 
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
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between'
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
  },
  quantityContainer : {
    marginTop: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  quantityCustom: {
    marginLeft: 14,
    marginRight: 14
  }
});