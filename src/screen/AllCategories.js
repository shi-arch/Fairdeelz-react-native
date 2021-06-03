import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import InternalHeader from '../container/Header'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { watch, grocery, mobiles, toys, travel, topoffers, electronics, fashion, home, gifts } from '../utils/imageUrl'

class AllCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: [
                { name: 'Top Offers', image: topoffers }, { name: 'Mobiles', image: mobiles }, { name: 'Fashion', image: fashion },
                { name: 'Electronics', image: electronics }, { name: 'Home', image: home }, { name: 'Travel', image: travel },
                { name: 'Toys', image: toys }, { name: 'Grocery', image: grocery }, { name: 'Watch', image: watch }
            ]
        }
    }
    render() {
        return (
            <>
                <InternalHeader navigation={this.props.navigation} tabName={"All Categories"} />
                <ScrollView>
                    <View style={styles.mainView}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {
                                this.state.categoryList.map((item) => (
                                    <View style={{ backgroundColor: 'white', margin: 2 }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemList')}>
                                            <Image source={item.image} style={{ width: 120, height: 120 }} />
                                            <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginBottom: 5 }}>{item.name}</Text>
                                        </TouchableOpacity>

                                    </View>

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
export default AllCategories