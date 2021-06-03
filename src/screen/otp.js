import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Animated, Button } from 'react-native';
import LoginHeader from '../container/LoginHeader'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import OTPInput from 'react-native-otp';
import { config } from '../utils/Constants'
import Spinner from 'react-native-loading-spinner-overlay';

class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: '',
            isOtpValid: true,
            errorMsg: '',
            isOtpexists: true,
            spinner: false
        }
    }
    handleOTPChange = (otp) => {
        this.setState({ otp })
    }
    sendOtp = async () => {
        this.setState({ spinner: true })
        if (this.state.otp) {
            if (this.state.otp && this.state.otp.length == 6) {
                this.setState({ isOtpValid: true })
                let response = await axios.post(config.BASE_URL + 'otpverification', { otp })
                if (response && response.data && response.data.status) {
                    this.props.navigation.navigate('Dashboard')
                }
            } else {
                this.setState({ isOtpValid: false, errorMsg: response.data.message })
            }
        } else {
            this.setState({ isOtpexists: false, errorMsg: 'Otp is mandatory *' })
        }
        this.setState({ spinner: false })
    }
    render() {
        return (
            <>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Loading...'}
                    textStyle={{ color: '#fff' }}
                />
                <LoginHeader navigation={this.props.navigation} />
                <ScrollView>
                    <View style={{ marginTop: 30, marginHorizontal: 40 }}>
                        <Text style={{ fontWeight: 'bold' }}>Login to get started</Text>
                        <Text style={{ marginVertical: 20 }}>Enter the otp</Text>
                        <View style={{ alignSelf: 'center', height: 60 }}>
                            <OTPInput
                                value={this.state.otp}
                                onChange={this.handleOTPChange}
                                tintColor="#FB6C6A"
                                offTintColor="#BBBCBE"
                                otpLength={6}
                            />
                        </View>
                        {
                            this.state.isOtpexists ?
                                !this.state.isOtpValid ? <Text style={{ color: 'red' }}>Invalid Otp</Text>
                                    : <Text></Text>
                                : <Text style={{ color: 'red', marginTop: 20 }}>Otp is mandatory *</Text>
                        }
                        <View style={{ marginTop: 20 }}>
                            <Button
                                onPress={this.sendOtp}
                                title="Next"
                                color="#841584"
                                accessibilityLabel="Learn more about this purple button"
                            />
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
export default Otp