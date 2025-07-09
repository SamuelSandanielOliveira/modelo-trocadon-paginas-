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
   <stack.Navigator intialRouteName= "Home">
 <stack.Screen name="Home" component= {HomeScreen} options = {{title : 'Bem-vindo '}}/>
<stack.Screen name="Secondary" component= {SecondaryScreen} options = {{title : 'Opções Deliciosas'}}/>
<stack.Screen name="Cafe" component= {CafeScreen} options = {{title : 'Nosso Café'}}/>
<stack.Screen name="Bolo" component= {BoloScreen} options = {{title : 'Bolo de Chocolate'}}/>
<stack.Screen name="Pao" component= {PaoScreen} options = {{title : 'Pão Caseiro'}}/>
</stack.Navigator>
</NavigationContainer>
 );
}
