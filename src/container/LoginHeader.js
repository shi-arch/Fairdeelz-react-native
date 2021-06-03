import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { fairdeelz } from '../utils/imageUrl'
import { colors, theme } from '../utils/theme';
import Entypo from 'react-native-vector-icons/Entypo';

class LoginHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { favCount: 10 }
    }
    render() {
        return (
                <View style={styles.mainView}>
                <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
                    <View style={styles.middleView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
                            <View style={{flex: .2}}>
                            <Entypo  name="cross" size={30} color={"white"} style={{ marginRight: 20 }} />
                            </View>                            
                            </TouchableOpacity> 
                            <View style={{flex: .8}}>
                            <Image source={fairdeelz} style={styles.imagePic} />
                                </View>                           
                            
                        </View>  
                </View>
            </View>            
        )
    }
}

const styles = StyleSheet.create({
    mainView: { backgroundColor: '#36e6ac', width: 'auto' },
    title: { color: colors.WHITE, fontFamily: theme.SF_PRO_DISPLAY_BOLD, fontSize: 20 },
    backArrow: { width: 26, height: 26, marginRight: 15, },
    middleView: { flexDirection: 'row' },
    imagePic: { width: 110, height: 30, alignSelf: 'center' }
})
export default LoginHeader