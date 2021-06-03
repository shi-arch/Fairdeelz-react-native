import React from 'react';
import Dashboard from '../screen/Dashboard';
import AllCategories from '../screen/AllCategories';
import ItemList from '../screen/ItemsList';
import Details from '../screen/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        activeBackgroundColor: '#36e6ac'
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard}
      options={{
        tabBarLabel: 'Home',        
        tabBarIcon: ({ }) => (
          <Icon
          name="home"
          backgroundColor="#3b5998"
          size={30}
        />
        ),
      }}
      />
      <Tab.Screen name="Dashboaaard" component={AllCategories}
      options={{
        tabBarLabel: 'Categories',        
        tabBarIcon: ({ }) => (
          <Icon
          name="trophy"
          backgroundColor="#3b5998"
          size={30}
        />
        ),
      }}
      />
      <Tab.Screen name="Details" component={Details}
      options={{
        tabBarLabel: 'Details',        
        tabBarIcon: ({ }) => (
          <Icon
          name="certificate"
          backgroundColor="#3b5998"
          size={30}
        />
        ),
      }}
      />
      <Tab.Screen name="AllCategories" component={ItemList}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ }) => (
          <Icon name="bullhorn" color={'green'} size={30} />
        ),
        tabBarBadge: 3,
      }}
      />
    </Tab.Navigator>
  );
}