import React from 'react';
import{View, Text,Image, StyleSheet}
from 'react-native';

export default function BoloScreen(){
  return(
    <View style=(style.container)>
    <Text> style=(style.title) Um Bolo de Chocolate</Text>
     <Image 
     source={{ uri='https://www.tasteofhome.com/wp-content/uploads/2018/01/Mom-s-Italian-Bread_EXPS_TOHcom24_41847_P2_MD_04_19_2b.jpg?w=892'}}
     style={styles.Image} >
     <Text style={styles.description}
    um bolo saboroso e delicioso 
     </Text>
</View>
  );
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center'
    alignItems : 'center'
    backgroundColor:  '#f8f8ff'
    padding : 20,
  },
  title : {
    fontSize : 24,
    fontBottom: 'bold',
    marginBottom: 20,
    color: '#4a2c2a',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor : '#6b3e2e',
  borderWidth: 3,
  },
deescription{
 fontSize: 18 ,
 textAling : 'centar'
 color : '#5e403d'
 marginHorizontal: 15
 lineHeight: 25,
},

)};
