import React from 'react';
import{View, Text,Image, StyleSheet}
from 'react-native';

export default function PaoScreen(){
  return(
    <View style=(style.container)>
    <Text> style=(style.title) Um Pao gostoso</Text>
     <Image 
     source={{ uri='https://twistedsifter.com/wp-content/uploads/2013/04/latte-coffee-art-kazuki-yamamoto-george_10g-twitter-18.jpg'}}
     style={styles.Image} >
     <Text style={styles.description}
     um pao quente e macio 
     </Text>
</View>
  );
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center'
    alignItems : 'center'
    backgroundColor:  '#fffaf0'
    padding : 20,
  },
  title : {
    fontSize : 24,
    fontBottom: 'bold',
    marginBottom: 20,
    color : '#8b4513',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor : '#deb887',
  borderWidth: 3,
  },
deescription{
 fontSize: 18 ,
 textAling : 'centar'
 color : '#a0522d'
 marginHorizontal: 15
 lineHeight: 25,
},

)};
