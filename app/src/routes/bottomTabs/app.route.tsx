import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'

import { Home } from '../../screens/Home'
import { User } from '../../screens/User'
import { Requisitar } from '../../screens/Requisitar'

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Navigator 
    initialRouteName='Home'
    screenOptions={{
      tabBarActiveTintColor: '#40DD67',
      tabBarInactiveTintColor: '#FFFFFF',
      tabBarStyle: {
        height: 82,
        paddingBottom: 0,
        borderTopWidth: 0,
        backgroundColor: '#0C0C0C',
      },
      tabBarLabel: () => null
    }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={40} />
          ),   
        }}
      />
        <Screen
          name="Requisitar"
          component={Requisitar}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="add" color={color} size={40} />
            ),
          }}
        />
      <Screen
        name="User"
        component={User}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={40} />
          ),
        }}
      />
    </Navigator>
  )
}