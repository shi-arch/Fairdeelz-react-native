import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fairdeelz } from '../utils/imageUrl'
import { colors, theme } from '../utils/theme';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { favCount: 10 }
    }
    onChangeSearch = () => {

    }
    render() {
        return (
                <View style={styles.mainView}>
                <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                    <View style={styles.middleView}>
                        <View style={{ flex: .3,  flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                            <Icon name="bars" size={20} style={{ marginRight: 20 }} />
                            </TouchableOpacity>                            
                            <Image source={fairdeelz} style={styles.imagePic} />
                        </View>
                        <View style={{ flex: .43 }}>
                        </View>
                        <View style={{ flex: .27 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="user-o" size={20} style={{ marginRight: 17 }} />
                                <Icon name="shopping-bag" size={20} style={{ marginRight: 17 }} />
                                <Icon name="heart-o" size={20} />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 25 }}>
                        <Searchbar
                            placeholder="Search for products"
                            onChangeText={this.onChangeSearch}
                        //value={''}
                        />
                    </View>
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
    mainView: { backgroundColor: '#36e6ac', height: 145, width: 'auto' },
    title: { color: colors.WHITE, fontFamily: theme.SF_PRO_DISPLAY_BOLD, fontSize: 20 },
    backArrow: { width: 26, height: 26, marginRight: 15, },
    middleView: { flexDirection: 'row', justifyContent: 'center' },
    imagePic: { width: "100%", height: "100%" }
})
export default Header