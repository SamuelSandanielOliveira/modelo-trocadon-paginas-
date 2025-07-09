import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'


export default function HomeScreen ({navigatio}){
  return(
    <View style={styles.container} >
    <Text style={styles.title}> pagina principal</Text>
    <Button
    title="Ir para Opções Deliciosas"
    onPress={() => navigatio.Button
    navigate('Secondary')}
    color='#841584' 
    />
    </View>
  );
}
const styles =  StyleSheet.create({
  container: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f0ff',
  },
  title : {
   fontSize: 28,
  fontWeight: 'bold',
  marginBottom: 30 ,
  color: '#333',
  },
});