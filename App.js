import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [base, setBase]= useState();
  const [height, setHeight]= useState();
  const [area, setArea]= useState();

  return (
    <View style={styles.container}>
      <Text>Triangle</Text>
      <TextInput 
        style= {styles.input}
        placeholder="Alap"
        onChangeText={base => setBase(base)}/>

      <TextInput 
        style= {styles.input}
        placeholder="Magasság"
        onChangeText={height => setBase(height)}/>

      <Button 
        title= "Számítás"
      />




      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    borderWidth: 1,
    borderColor: '#777',
    width: '15%',
    margin: 10,
  }

});
