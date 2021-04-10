import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import{createBottomTabNavigator}from '@react-navigation/bottom-tabs'
//importaciones 
import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'

const Tab=createBottomTabNavigator()
//colocamos el titulo para cada uno , atravez de los stack 
export default function Navigation() {
    return (
      <NavigationContainer>
          <Tab.Navigator>
           <Tab.Screen
            name="restaurantes"
            component={RestaurantsStack}
            options={{title:"Restaurantes"}}
           />
            <Tab.Screen
            name="favoritos"
            component={FavoritesStack}
            options={{title:"Favoritos"}}
           />
           <Tab.Screen
            name="Top"
            component={TopRestaurantsStack}
            options={{title:"Top 5"}}
           />
            <Tab.Screen
            name="Busquedas"
            component={SearchStack}
            options={{title:"Buscar"}}
           />
            <Tab.Screen
            name="Cuenta"
            component={AccountStack}
            options={{title:"Cuenta"}}
           />
            
        
          
          </Tab.Navigator>
      </NavigationContainer>
    )
}


