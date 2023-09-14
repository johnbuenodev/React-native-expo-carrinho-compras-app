import { StyleSheet, Text, View } from "react-native";


export function Carrinho() {
    return(
        <View style={styles.container}>
          <Text>Carrinho</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#FFF"
  }
});