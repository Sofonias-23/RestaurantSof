import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Restaurans from '../screens/Restaurans'


const Stack=createStackNavigator()

export default function RestaurantsStack() {
    return (
       <Stack.Navigator>
           <Stack.Screen 
           name="restaurants"
           component={Restaurans}
           options={{title:"Restaurantes"}}
           />
       </Stack.Navigator>
    )
}

