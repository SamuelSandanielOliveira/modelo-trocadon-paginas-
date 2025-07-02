import react from 'react';
import{NavigationContainer} from  '@react-navigation/native';
import {createStackNavigator} from  '@react-navigation/stack';
import HomeScreen from './Screem/HomeScreen';
import SecondaryScreen from './Screem/SecondaryScreen';
import CafeScreen from './Screem/CafeScreen';
import BoloScreen from './Screem/BoloScreen';
import PaoScreen from './Screem/PaoScreen';

const stack = createStackNavigator();

export default function App(){
 return (
   <NavigationContainer>
   <Stack.Navigator intialRouteName= "Home">
 <Stack.Screen name="Home" component= {HomeScreen} options ={{title : 'Bem-vindo '}}/>
<Stack.Screen name="Secondary" component= {SecondaryScreen} options = {{title : 'Opções Deliciosas'}}/>
<Stack.Screen name="Cafe" component= {CafeScreen} options = {{title : 'Nosso Café'}}/>
<Stack.Screen name="Bolo" component= {BoloScreen} options = {{title : 'Bolo de Chocolate'}}/>
<Stack.Screen name="Pao" component= {PaoScreen} options = {{title : 'Pão Caseiro'}}/>
</Stack.Navigator>
</NavigationContainer>
 );
}
