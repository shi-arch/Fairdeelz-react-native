import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Animated } from 'react-native';
import InternalHeader from '../container/Header'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { watch, trimmer, hamper, newGifts, grocery, mobiles, toys, travel, topoffers, electronics, fashion, home, fairdeelz } from '../utils/imageUrl'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: [
                { name: 'Top Offers', image: topoffers }, { name: 'Top Offers', image: topoffers }, { name: 'Mobiles', image: mobiles }, { name: 'Fashion', image: fashion },
                { name: 'Electronics', image: electronics }, { name: 'Home', image: home }, { name: 'Travel', image: travel },
                { name: 'Toys', image: toys }, { name: 'Grocery', image: grocery }, { name: 'Watch', image: watch }, { name: 'Watch', image: hamper }, { name: 'Watch', image: trimmer },
                { name: 'Top Offers', image: newGifts }
            ]
        }
    }
    render() {
        return (
            <>
                <InternalHeader navigation={this.props.navigation} tabName={"Items List"} />
                <View style={{ flexDirection: 'row', borderBottomWidth: .5, backgroundColor: 'white' }}>
                    <View style={{ flex: .5, alignItems: 'center', paddingVertical: 20, borderRightWidth: .5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginTop: 5, marginRight: 5 }}><FontAwesome name="sort" /></View>
                            <Text>Sort</Text>
                        </View>
                    </View>
                    <View style={{ flex: .5, alignItems: 'center', marginVertical: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginTop: 5, marginRight: 5 }}><FontAwesome name="filter" /></View>
                            <Text>Filter</Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.mainView}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {
                                this.state.categoryList.map((item) => (
                                    <>
                                        <View style={{ backgroundColor: 'white', margin: 3 }}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                                                <Image source={item.image} style={{ width: 180, height: 170 }} />
                                                <Text style={{ marginBottom: 5, marginLeft: 10 }}>{item.name}</Text>
                                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 10, marginBottom: 5 }}>
                                                    <Text style={{ color: '#8a8a5c' }}>Men Black ...</Text>
                                                    <Image source={fairdeelz} style={{ width: 80, height: 20, marginLeft: 5 }} />
                                                </View>
                                                <Text style={{ marginBottom: 10, marginLeft: 10 }}><FontAwesome size={15} name="rupee" /> <Text style={{ fontWeight: 'bold', marginRight: 8 }}>499</Text> <Text style={{ color: '#006600', fontWeight: 'bold' }}>50% OFF</Text></Text>
                                            </TouchableOpacity>

                                        </View>
                                    </>
                                ))
                            }
                        </View>
                    </View>
                </ScrollView>
            </>

        )
    }
}

const styles = StyleSheet.create({
    mainView: { marginHorizontal: 10, marginVertical: 10 }
})
export default ItemList