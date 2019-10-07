import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txtprincipal}>Hello World!</Text>
      <Button 
        onPress={()=> {
        alert('Você clicou no botão.');
      }}
        title = "Clique aqui"
      />
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
  txtprincipal: {
    fontWeight: 'bold',
    fontSize: 30
  }

});
