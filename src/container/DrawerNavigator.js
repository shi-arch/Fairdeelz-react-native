import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideNavBar from './SideNavBar';
import AppNavigator from './APPNavigator';

const DrawerStack = () => {
   const Drawer = createDrawerNavigator();
   return (
      <Drawer.Navigator 
         screenOptions={{headerShown: false}} 
         drawerContent={(props) => <CustomDrawer  {...props} />} >
         <Drawer.Screen name="app" component={AppNavigator} />
      </Drawer.Navigator>
   );
}

const CustomDrawer = (props) => {
   return (
      <SideNavBar {...props} />
   )
}
export default DrawerStack;