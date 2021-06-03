import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import InternalHeader from '../container/Header'
import { ScrollView } from 'react-native-gesture-handler';
import { mobiledetails, fairdeelz } from '../utils/imageUrl'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <>
                <InternalHeader navigation={this.props.navigation} tabName={"Item Details"} />
                <ScrollView>
                    <View style={styles.mainView}>
                        <Image source={mobiledetails} style={{ marginVertical: 20, width: '100%' }} />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ marginBottom: 5, fontSize: 16 }}>BRANDSOON</Text>
                            <Text style={{ color: '#8a8a5c', marginBottom: 10, fontSize: 16 }}>Brass Mangalsutra</Text>
                            <Text style={{ borderRadius: 5, width: 100, paddingVertical: 5, paddingHorizontal: 6, backgroundColor: '#36e6ac' }}>Special Prize</Text>
                            <Ionicons style={{ position: 'absolute', right: 0, bottom: 650, zIndex: 10000, color: 'red' }} size={50} name="heart-circle-outline" />
                            <Ionicons style={{ position: 'absolute', right: 8, bottom: 600, zIndex: 10000, color: '#8a8a5c' }} size={40} name="share-social-sharp" />
                            <Text style={{ marginTop: 10 }}><FontAwesome size={20} name="rupee" /> <Text style={{ fontWeight: 'bold', marginRight: 8, fontSize: 20 }}>499</Text> <Text style={{ color: '#006600', fontWeight: 'bold' }}>50% OFF</Text></Text>
                            <Text style={{ marginBottom: 10, marginTop: 10, width: 580 }}><Text style={{ borderRadius: 8, paddingVertical: 8, backgroundColor: 'green' }}>&nbsp;&nbsp;<Text style={{ color: 'white' }}>4</Text>&nbsp;<Foundation name="star" size={13} color={'white'} />&nbsp;&nbsp;</Text>&nbsp;&nbsp;<Text style={{ color: '#8a8a5c' }}>1,118,99  Ratings</Text>  <Image source={fairdeelz} style={{ width: 80, height: 20 }} /></Text>
                            <View style={{ width: 'auto', height: 1, backgroundColor: '#8a8a5c', marginVertical: 10, marginHorizontal: -10 }}></View>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Available Offers</Text>
                            <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                                <View style={{ flex: .1 }}>
                                    <Entypo name="pencil" size={20} />
                                </View>
                                <View style={{ flex: .8 }}>
                                    <Text>5% Unlimited cashback with Fairdeelz Axis Bank Credit Card</Text>
                                </View>
                                <View style={{ flex: .1, alignItems: 'flex-end' }}>
                                    <AntDesign name="right" size={20} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, marginBottom: 20 }}>
                                <View style={{ flex: .1 }}>
                                    <Entypo name="pencil" size={20} />
                                </View>
                                <View style={{ flex: .8 }}>
                                    <Text>5% Unlimited cashback with Fairdeelz Axis Bank Credit Card</Text>
                                </View>
                                <View style={{ flex: .1, alignItems: 'flex-end' }}>
                                    <AntDesign name="right" size={20} />
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#909aa0', borderRadius: 20, marginBottom: 10 }}>
                                <Text style={{ paddingHorizontal: 145, paddingTop: 10, paddingBottom: 10 }}>Add to Cart</Text>
                            </View>
                            <View style={{ backgroundColor: '#909aa0', borderRadius: 20, marginBottom: 10 }}>
                                <Text style={{ paddingHorizontal: 135, paddingTop: 10, paddingBottom: 10 }}>Add to Wishlist</Text>
                            </View>
                            <View style={{ backgroundColor: '#909aa0', borderRadius: 20, marginBottom: 10 }}>
                                <Text style={{ paddingHorizontal: 145, paddingTop: 10, paddingBottom: 10 }}>View Similar</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </>

        )
    }
}

const styles = StyleSheet.create({
    mainView: { marginVertical: 10 }
})
export default Details