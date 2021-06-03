import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { splash } from '../utils/imageUrl';
import { colors, theme } from '../utils/theme';


const Splash = (props) => {

    return (
        <View style={styles.splash}>
            <Image source={splash} style={{width: '100%', height: '100%'}} />
            <Text style={styles.splashTitle}>Fairdeelz</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    splash_icon: {
        marginHorizontal: 55, resizeMode: 'contain'
    },
    splashTitle: { color: colors.WHITE, fontFamily: theme.SF_PRO_DISPLAY_BOLD, fontSize: 44, lineHeight: 58, position: 'absolute', top: 300 }
})
export default Splash