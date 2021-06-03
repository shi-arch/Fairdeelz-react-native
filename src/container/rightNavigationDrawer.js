import React, { useEffect } from 'react';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { mobile } from '../utils/imageUrl';
import LeftDrawer from './DrawerNavigator';

const Drawer = createDrawerNavigator();

export default ({ navigation }) => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerComp {...props} />}>
      <Drawer.Screen name="LeftDrawer" component={LeftDrawer} />
    </Drawer.Navigator>
  );
};

export const CustomDrawerComp = (props) => {
  const { navigation } = props;

  return (
    <>
      <DrawerContentScrollView {...props}>
        <View>
          <View style={{ marginHorizontal: 13, marginBottom: 10, marginTop: 8, flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
            <View style={{ flex: .5 }}>
              <Text style={{ fontSize: 22, color: '#868b90' }}>Your Cart</Text>
            </View>
            <View style={{ flex: .5, alignItems: 'flex-end' }}>
              <Entypo onPress={() => navigation.closeDrawer()} name="cross" size={20} />
            </View>
          </View>
          <View style={{ height: 2, width: 'auto', backgroundColor: '#b0b2b5', marginBottom: 10 }}></View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginHorizontal: 20 }}>
            <View style={{ flex: .4 }}>
              <Image source={mobile} style={{ width: 70, height: 70 }} />
              <Entypo style={{ marginLeft: 20 }} onPress={() => navigation.closeDrawer()} name="cross" size={20} />
            </View>
            <View style={{ flex: .6 }}>
              <Text style={{ color: '#0095ff', marginBottom: 10 }}>Portable mobile with portable price and battery</Text>
              <Text>
                1<Entypo style={{ marginTop: 5 }} name="cross" size={17} /><Text><FontIcon name="rupee" color="black" size={13} /> 6,499</Text> = <Text><FontIcon name="rupee" color="black" size={13} /> 6,499</Text>
              </Text>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={{ height: 300, width: 'auto' }}>
        <View style={{ height: 2, width: 'auto', backgroundColor: '#b0b2b5', marginBottom: 10 }}></View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#909aa0', marginBottom: 10 }}>
            Subtotal<Text style={{ fontWeight: 'bold', fontSize: 20, color: '#909aa0' }}><FontIcon name="rupee" color="#909aa0" size={18} /> 6,499</Text>
          </Text>
          <Text style={{ marginHorizontal: 25, alignContent: 'center', marginBottom: 5 }}>To find your shipping cost, please</Text>
          <Text style={{ marginLeft: 25, marginBottom: 10 }}>porceed to checkout</Text>
          <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
              <View style={{ backgroundColor: '#909aa0', borderRadius: 20 }}>
                <Text style={{ paddingHorizontal: 100, paddingTop: 10, paddingBottom: 10 }}>View cart</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
              <View style={{ backgroundColor: '#909aa0', borderRadius: 20 }}>
                <Text style={{ paddingHorizontal: 100, paddingTop: 10, paddingBottom: 10 }}>Checkout</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
              <View style={{ backgroundColor: '#909aa0', borderRadius: 20 }}>
                <Text style={{ paddingHorizontal: 65, paddingTop: 10, paddingBottom: 10 }}>Continew shopping</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </>
  );
};