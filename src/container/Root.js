import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screen/Splash';
import DrawerStack from './rightNavigationDrawer';

const RootStack = createStackNavigator()
class Root extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isUserAuth:  true,
            token:null
         }
    }
    
    render() { 
        const {isUserAuth} = this.state
         if(isUserAuth) {
            setTimeout(() => {
                this.setState({isUserAuth: false})
             }, 3000);
           return   <Splash />
         }
        else {
            return ( 
                <NavigationContainer>
                <RootStack.Navigator headerMode="none">
                <RootStack.Screen 
                      name="drawer"
                      component={DrawerStack}
                      options={{
                        title: '',
                      }}
                    />
                </RootStack.Navigator>
              </NavigationContainer>
             );
        }
     
    }
}
export default Root