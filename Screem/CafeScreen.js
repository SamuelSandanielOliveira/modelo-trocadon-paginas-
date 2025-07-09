import React from 'react';
import{View, Text,Image, StyleSheet}
from 'react-native';

export default function CafeScreen(){
  return(
    <View style=(style.container)>
    <Text> style=(style.title) Um Cafe</Text>
     <Image 
     source={{ uri='https://twistedsifter.com/wp-content/uploads/2013/04/latte-coffee-art-kazuki-yamamoto-george_10g-twitter-18.jpg'}}
     style={styles.Image} >
     <Text style={styles.description}
     comece o dia com uma xicara
     cafe aromatico e revigorante.
     </Text>
</View>
  );
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center'
    alignItems : 'center'
    backgroundColor:  '#f5f5dc'
    padding : 20,
  },
  title : {
    fontSize : 24,
    fontBottom: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor : '#d2b48c',
  borderWidth: 3,
  },
deescription{
 fontSize: 18 ,
 textAling : 'centar'
 color : '#654321'
 marginHorizontal: 15
 lineHeight: 25,
},

)};
