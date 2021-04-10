import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TopResTaurants from '../screens/TopResTaurants'




const Stack=createStackNavigator()

export default function TopRestaurantsStack() {
    return (
       <Stack.Navigator>
           <Stack.Screen 
           name="topRestaurants"
           component={TopResTaurants}
           options={{title:"Los mejores Restaurants"}}
           />
       </Stack.Navigator>
    )
}

