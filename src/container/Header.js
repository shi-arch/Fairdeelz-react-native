import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fairdeelz } from '../utils/imageUrl'
import { colors, theme } from '../utils/theme';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

class InternalHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { search: false }
    }
    onChangeSearch = () => {

    }
    render() {
        return (
            <View style={styles.mainView}>
                <View style={{ marginHorizontal: 20}}>
                    {
                        !this.state.search ?
                            <View style={[styles.middleView, {marginTop: 30 }]}>
                                <View style={{ flex: .6 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')} >
                                            <AntIcon name="arrowleft" size={25} />
                                        </TouchableOpacity>
                                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>{this.props.tabName}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: .4, }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <AntIcon onPress={() => this.setState({search: true})} name="search1" size={20} />
                                        <Icon name="user-o" size={20} style={{ marginRight: 20, marginLeft: 20 }} />
                                        <Icon name="shopping-bag" size={20} style={{ marginRight: 20 }} />
                                        <Icon name="heart-o" size={20} />
                                    </View>

                                </View>
                            </View> : <>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <View style={{flex: .1, marginTop: 10}}>
                                <AntIcon onPress={() => this.setState({search: false})} name="arrowleft" size={25} />
                                </View>
                                <View style={{flex: .9}}>
                                <Searchbar 
                                placeholder="Search for products"
                                onChangeText={this.onChangeSearch}
                            //value={''}
                            />
                                </View>
                            </View>
                            </>
                    }
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    animatedHeaderContainer: {
        position: 'absolute',
        top: (Platform.OS == 'ios') ? 20 : 0,
        left: 0,
        right: 0,
    },
    mainView: { backgroundColor: '#36e6ac', height: 80, width: 'auto' },
    title: { color: colors.WHITE, fontFamily: theme.SF_PRO_DISPLAY_BOLD, fontSize: 20 },
    backArrow: { width: 26, height: 26, marginRight: 15, },
    middleView: { flexDirection: 'row', justifyContent: 'center' },
    imagePic: { width: "100%", height: "100%" }
})
export default InternalHeader