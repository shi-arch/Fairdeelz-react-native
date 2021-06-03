import React, { Component } from 'react';
import { SafeAreaView,Dimensions, StatusBar, StyleSheet, Text, View, Button } from 'react-native';
import RootComponent from './Root';
import { colors } from '../utils/theme';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware,compose } from 'redux'
//import rootReducers from '../reducers/rootReducer/rootReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Root} from 'native-base';
import NetInfo from '@react-native-community/netinfo';
 const middleWare = [thunk];

 function MiniOfflineSign() {
    return (
      <View style={styles.offlineContainer}>
        <View style={styles.content}>
          <View style={styles.contentBox}>
            <View>
              <Text style={styles.connectionText}>Connection interrupted</Text>
            </View>
            <View style={styles.instructionBox}>
              <Text style={styles.instructionText}>
                Please check your internet connection or hold a moment while we
                try to reconnect
              </Text>
            </View>
            <View style={styles.instructionBox}>
              <Button rounded style={styles.button}>
                <Text style={styles.buttonText}>TRY NOW</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
//const store = createStore(rootReducers, compose(applyMiddleware(...middleWare,logger)))
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: true,
        }
    }
    componentDidMount() {
        // this.createLive();
        NetInfo.addEventListener((state) => {
          this.handleConnectivityChange(state.isConnected);
        });
      }
    
      componentWillUnmount() {
        NetInfo.addEventListener((state) => {
          this.handleConnectivityChange(state.isConnected);
        });
      }
      handleConnectivityChange = (isConnected) => {
        this.setState({isConnected});
      };
    render() {
        if (!this.state.isConnected) {
            return <MiniOfflineSign />;
          } else {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.WHITE }}>              
                <Root>
                {/* <Provider store={store}> */}
                        {/* <NavigationContainer /> */}
                    <RootComponent />
                {/* </Provider> */}
                </Root>
            </SafeAreaView>
        );
          }
    }
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
  },
  content: {
    height: height * 0.35,
    width: width * 0.85,
    backgroundColor: '#fff',
  },
  contentBox: {
    height: height * 0.33,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  connectionText: {
    color: '#3D98EC',
    fontSize: 20,
  },
  instructionBox: {
    marginTop: 22,
  },
  instructionText: {
    lineHeight: 20,
    fontSize: 15,
  },
  button: {
    backgroundColor: '#990000',
    justifyContent: 'center',
    minHeight: 40,
  },
  buttonText: {
    color: '#fff',
    width: '100%',
    textAlign: 'center',
  },
});

export default App;