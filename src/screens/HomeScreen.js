import React from "react";
import {Text, StyleSheet, View, Button} from "react-native";

const HomeScreen = ({navigation}) => {
  
  return (
  <View>
  <Text style={styles.text}>Alift Prototype App</Text>
  <Button
  onPress={()=>navigation.navigate('Components')}
  title="Page Demo 1" 
  />
  <Button 
  onPress={()=>navigation.navigate('List')}
  title="List Demo 1"
  />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical:20,
    textAlign:'center'
  }
});

export default HomeScreen;
