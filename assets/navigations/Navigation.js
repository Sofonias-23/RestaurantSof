import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import{createBottomTabNavigator}from '@react-navigation/bottom-tabs'
//importaciones 
import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'
import { Icon } from 'react-native-elements'

const Tab=createBottomTabNavigator()
//colocamos el titulo para cada uno , atravez de los stack 
export default function Navigation() {

  const screenOptions=(route, color) =>{
    let iconName
    switch (route.name) {
      case "restaurants":
        iconName="google-maps"
        break;
        case "favorite":
        iconName="heart"
        break;
        case "Top":
        iconName="hexagram"
        break;
          case "Busquedas":
        iconName="crosshairs"
        break;
       case "Cuenta":
        iconName="account-lock"
        break;
      default:
        break;
    }
    return(
      <Icon
      type="material-community"
      name={iconName}
      size={22}
      color={color}

      />
    )
  }
    return (
      <NavigationContainer>
          <Tab.Navigator
          initialRouteName="restaurants"
          tabBarOptions={{
            inactiveTintColor:"#202020",
            activeTintColor:"#7c7c7c"
          }}
          screenOptions={({route})=>({
            tabBarIcon :({color})=>screenOptions(route,color)
          })}
          >
           <Tab.Screen
            name="restaurants"
            component={RestaurantsStack}
            options={{title:"Restaurantes"}}
           />
            <Tab.Screen
            name="favorite"
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


