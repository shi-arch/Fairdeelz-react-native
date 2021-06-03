import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../container/newHeader'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { watch, trimmer, hamper, newGifts, grocery, mobiles, toys, travel, topoffers, electronics, fashion, home, gifts } from '../utils/imageUrl'
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios'
import Swiper from 'react-native-swiper'
import Spinner from 'react-native-loading-spinner-overlay';
import { config, validateEmail } from '../utils/Constants'

const Dashboard = (props) => {
    const [slider, setSlider] = useState([newGifts, gifts, newGifts, hamper])
    const [categoryList, setCategoryList] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [itemList, setItemList] = useState([ { name: 'Top Offers', image: topoffers }, { name: 'Mobiles', image: mobiles }, { name: 'Fashion', image: fashion }])
    const [newItems, setNewItems] = useState([ 
        { name: 'Home', image: home }, { name: 'Travel', image: travel },
        { name: 'Toys', image: toys }, { name: 'Grocery', image: grocery }
    ])
    const [moreItems, setMoreItems] = useState([
        { name: 'Electronics', image: electronics }, { name: 'Travel', image: travel },
        { name: 'Toys', image: toys }, { name: 'Grocery', image: grocery }
    ])
    const init = async () => {
        setIsloading(true)
        const response = await axios.post(config.BASE_URL + 'getallcategories')
        if (response && response.data && response.data.status) {
            setCategoryList(response.data.data)
        } else {
            setIsloading(false)
        }
        setIsloading(false)
    }
    useEffect(() => {
        init()
      }, []);
    return (
        <>
            <Header navigation={props.navigation} />
            <Spinner
                    visible={isLoading}
                    textContent={'Loading...'}
                    textStyle={{color: '#fff'}}
                />
            <ScrollView>
                <View style={styles.container}>
                    <ScrollView style={{ marginBottom: 20 }} horizontal showsHorizontalScrollIndicator={false}>
                        {
                            categoryList.map((item) => (
                                <View style={{ marginHorizontal: 7 }}>
                                    <Image style={styles.img} source = {{uri:item.img_url}} />
                                    <Text style={{ fontSize: 12 }}>{item.category_name}</Text>
                                </View>
                            ))
                        }
                    </ScrollView>

                    <Swiper style={{ marginBottom: 10 }} height={200} autoplay>
                        {
                            slider.map((item) => (
                                <>
                                    <View style={styles.slide1}>
                                        <Image source={item} style={{ width: 400 }} />
                                    </View>
                                    <Text style={{ borderRadius: 10, position: 'absolute', top: 10, left: 10, color: 'white', paddingVertical: 10, paddingHorizontal: 10, backgroundColor: 'blue' }}>UP TO 25% OFF*</Text>
                                </>
                            ))
                        }

                    </Swiper>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -3, marginBottom: 10 }}>
                        {
                            itemList.map((item) => (
                                <View style={{ marginHorizontal: 3, backgroundColor: 'white', width: 120 }}>
                                    <Image source={item.image} style={{ width: 100 }} />
                                    <Text style={{ borderRadius: 5, position: 'absolute', bottom: 35, color: 'white', paddingVertical: 5, paddingHorizontal: 5, backgroundColor: 'blue' }}>EXTRA 25% OFF*</Text>
                                    <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginBottom: 10 }}>Sale on 9th Feb</Text>
                                </View>
                            ))
                        }
                    </View>
                    <View style={{ backgroundColor: '#36e6ac', marginHorizontal: -10, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', flex: 1, marginTop: 60, marginBottom: 20, marginHorizontal: 10 }}>
                            <View style={{ flex: .5 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 5, color: 'white' }}>
                                    Deals of the day
                                </Text>
                            </View>
                            <View style={{ flex: .5, alignItems: 'flex-end' }}>
                                <Text style={{ borderRadius: 3, fontWeight: 'bold', paddingVertical: 8, paddingHorizontal: 5, backgroundColor: 'white', width: 80, marginRight: 5 }}>View All<AntDesign onPress={() => navigation.closeDrawer()} name="right" size={15} style={{ marginRight: -5 }} /></Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10, marginHorizontal: 5 }}>
                            {
                                newItems.map((item) => (
                                    <View style={{ backgroundColor: 'white', width: 181, marginHorizontal: 5, marginBottom: 10 }}>
                                        <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
                                            <Image style={{ alignSelf: 'center' }} source={item.image} />
                                            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>Sale on 9th Feb</Text>
                                            <Text style={{ fontSize: 16, color: '#36e6ac', marginBottom: 10, alignSelf: 'center' }}>EXTRA 20% OFF*</Text>
                                        </TouchableOpacity>

                                    </View>
                                ))
                            }
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#2874f0', marginHorizontal: -10, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', flex: 1, marginTop: 60, marginBottom: 20, marginHorizontal: 10 }}>
                            <View style={{ flex: .5 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 5, color: 'white' }}>
                                    Deals of the day
                                </Text>
                            </View>

                            <View style={{ flex: .5, alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('AllCategories')}>
                                    <Text style={{ borderRadius: 3, fontWeight: 'bold', paddingVertical: 8, paddingHorizontal: 5, backgroundColor: 'white', width: 80, marginRight: 5 }}>View All<AntDesign name="right" size={15} style={{ marginRight: -5 }} /></Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10, marginHorizontal: 5 }}>
                            {
                                moreItems.map((item) => (
                                    <View style={{ backgroundColor: 'white', width: 181, marginHorizontal: 5, marginBottom: 10 }}>
                                        <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
                                            <Image style={{ alignSelf: 'center' }} source={item.image} />
                                            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>Sale on 9th Feb</Text>
                                            <Text style={{ fontSize: 16, color: '#36e6ac', marginBottom: 10, alignSelf: 'center' }}>EXTRA 20% OFF*</Text>
                                        </TouchableOpacity>

                                    </View>
                                ))
                            }
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', marginHorizontal: -10, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', flex: 1, marginTop: 60, marginBottom: 20, marginHorizontal: 10 }}>
                            <View style={{ flex: .5 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 5 }}>
                                    Recently Viewed
                                </Text>
                            </View>
                            <View style={{ flex: .5, alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('AllCategories')}>
                                    <Text style={{ borderRadius: 3, fontWeight: 'bold', paddingVertical: 8, paddingHorizontal: 5, backgroundColor: 'white', width: 80, marginRight: 5 }}>View All<AntDesign name="right" size={15} style={{ marginRight: -5 }} /></Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {
                            [1, 1, 1, 1].map(() => (
                                <>
                                    <View style={{ flexDirection: 'row', marginVertical: 15, marginHorizontal: 5, flex: 1 }}>
                                        <View style={{ flex: .4 }}>
                                            <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
                                                <Image style={{ alignSelf: 'center' }} source={watch} style={{ height: 100, width: 100 }} />
                                            </TouchableOpacity>

                                        </View>
                                        <View style={{ flex: .6, alignItems: 'flex-start', marginTop: 30 }}>
                                            <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
                                                <Text>Fairdeelz smartbuy flip 1000 ml</Text>
                                                <Text><FontAwesome size={20} name="rupee" /> <Text style={{ fontWeight: 'bold', marginRight: 8 }}>499</Text> <Text style={{ color: '#006600', fontWeight: 'bold' }}>50% OFF</Text></Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                    <View style={{ width: 'auto', height: 2, backgroundColor: '#8a8a5c' }}></View>
                                </>
                            ))
                        }


                    </View>
                </View>
            </ScrollView>
            {/* <TouchableOpacity onPress={props.navigation.dangerouslyGetParent().dangerouslyGetParent().dangerouslyGetParent().openDrawer} >
                <View style={{ backgroundColor: 'white', width: 65, borderRadius: 10, borderWidth: 1, borderColor: '#616161', position: 'absolute', bottom: 20, right: 20, zIndex: 22000 }}><Icon style={{ paddingHorizontal: 20, paddingVertical: 15 }} name="shopping-cart" size={30} /></View>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.floating} onPress={props.navigation.dangerouslyGetParent().dangerouslyGetParent().dangerouslyGetParent().openDrawer}>
                <View style={{ backgroundColor: 'white', width: 65, borderRadius: 10, borderWidth: 1, borderColor: '#616161' }}><Icon style={{ paddingHorizontal: 20, paddingVertical: 15 }} name="shopping-cart" size={30} /></View>
            </TouchableOpacity>

        </>
    )
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 'auto',
        flex: 1
    },
    img: { width: 50, height: 50, alignSelf: 'center' },
    floating: { alignSelf: 'flex-end', position: 'absolute', bottom: 20, right: 10 },
    container: { marginHorizontal: 10, marginTop: 10 }
})
export default Dashboard