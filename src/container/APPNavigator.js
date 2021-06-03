import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screen/Dashboard';
import Login from '../screen/Login';
import DrawerStack from '../container/DrawerNavigator';
import Details from '../screen/Details';
import AllCategories from '../screen/AllCategories';
import Otp from '../screen/otp';
import ItemList from '../screen/ItemsList';
import SideNavBar from '../container/SideNavBar';
import MyTabs from './tabNavigator'

const AppStack = createStackNavigator()

export default function AppNavigator(props) {
  return (
    <AppStack.Navigator initialRouteName='Login' screenOptions={{
      headerShown: false
    }}>
      <AppStack.Screen name='Dashboard' component={MyTabs} />
      <AppStack.Screen name='Login' component={Login} />
      <AppStack.Screen name='Otp' component={Otp} />
      <AppStack.Screen name='Details' component={Details} />
      <AppStack.Screen name='DrawerStack' component={DrawerStack} />
      <AppStack.Screen name='AllCategories' component={AllCategories} />
      <AppStack.Screen name='SideNavBar' component={SideNavBar} />
      <AppStack.Screen name='ItemList' component={ItemList} />      
    </AppStack.Navigator>
  );
}

