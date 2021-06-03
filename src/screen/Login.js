import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import LoginHeader from '../container/LoginHeader'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import PhoneInput from "react-native-phone-number-input";
import axios from 'axios'
import { config, validateEmail } from '../utils/Constants'
import Spinner from 'react-native-loading-spinner-overlay';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneInput: '',
            inValid: false,
            useEmail: true,
            email: '',
            isEmailValid: true,
            isEmailexists: true,
            errorMsg: '',
            spinner: false
        }
    }
    getInput = (value) => {
        this.setState({ email: value, isEmailexists: true })
        if (validateEmail(value)) {
            this.setState({ isEmailValid: true })
        }
    }
    sendOtp = async () => {
        this.setState({spinner: true})
        if (this.state.email) {
            if (validateEmail(this.state.email)) {
                this.setState({ isEmailValid: true })
                let response = await axios.post(config.BASE_URL + 'getnewuser', { email: this.state.email })
                if (response && response.data && response.data.status) {
                    this.props.navigation.navigate('Otp')
                } else {
                    this.setState({ isEmailValid: false, errorMsg: response.data.message })
                }
            } else {
                this.setState({ isEmailValid: false, errorMsg: 'Invalid email' })
            }
        } else {
            this.setState({ isEmailexists: false, errorMsg: 'Email is mandatory *' })
        }
        this.setState({spinner: false})
    }
    render() {
        return (
            <>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Loading...'}
                    textStyle={{color: '#fff'}}
                />
                <LoginHeader navigation={this.props.navigation} tabName={"Items List"} />
                <ScrollView>
                    <View style={{ marginTop: 30, marginHorizontal: 40 }}>
                        <Text style={{ fontWeight: 'bold' }}>Login to get started</Text>
                        <Text style={{ marginVertical: 20 }}>Experience all new Fairdeelz</Text>
                        {
                            this.state.useEmail ?
                                <>
                                    <TextInput autoCapitalize="none" placeholder="Enter you e-mail adress" onChangeText={(text) => this.getInput(text)} autoCorrect={false} style={{ height: 50, width: 'auto', backgroundColor: 'white' }} />
                                    {
                                        this.state.isEmailexists ?
                                            !this.state.isEmailValid ? <Text style={{ color: 'red' }}>Invalids email</Text>
                                                : <Text></Text>
                                            : <Text style={{ color: 'red' }}>Email is mandatory *</Text>
                                    }
                                    {/* <Text style={{ marginTop: 10, textAlign: 'right', color: '#36e6ac' }} onPress={() => this.setState({ useEmail: false })}>Use Phone number Instead</Text> */}
                                </> :
                                <>
                                    <View style={{ alignSelf: 'center', height: 60 }}>
                                        <PhoneInput
                                            textInputStyle={{ marginVertical: -18 }}
                                            ref={this.state.phoneInput}
                                            //defaultValue={}
                                            defaultCode="IN"
                                            onChangeText={this.getInput}
                                            onChangeFormattedText={this.getInput}
                                            withDarkTheme
                                            withShadow
                                            autoFocus
                                        />
                                    </View>
                                    <Text style={{ marginTop: 10, textAlign: 'right', color: '#36e6ac' }} onPress={() => this.setState({ useEmail: true })}>Use Email-Id instead</Text>
                                </>

                        }

                        <View style={{ marginTop: 20 }}>
                            <TouchableOpacity onPress={this.sendOtp}>
                                <Button
                                    title="Next"
                                    color="#841584"
                                    accessibilityLabel="Learn more about this purple button"
                                />
                            </TouchableOpacity>

                        </View>

                        {
                            this.state.inValid ? <Text style={{ color: 'red', alignSelf: 'center' }}>Please enter the correct number</Text> : <Text></Text>
                        }

                    </View>
                </ScrollView>
            </>

        )
    }
}

const styles = StyleSheet.create({
    mainView: { marginHorizontal: 10, marginVertical: 10 }
})
export default Login