import React, { Component } from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { toys } from '../utils/imageUrl';
import { colors, theme } from '../utils/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class SideNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdv: false,
      data: [
        {
          name: 'All Categories', icon: <MaterialIcons style={styles.icon}  name="category" size={20} /> ,
          children:
            [
              { name: 'Men wears', icon: <Icon name="suitcase" size={20} style={styles.icon} />},
              { name: 'Electronics', link: 'defectstatusenquiryadvocate', icon: <Icon name="suitcase" size={20} style={styles.icon} /> }, { name: 'test5', link: 'home', icon: <Icon name="suitcase" size={20} style={styles.icon} /> },
              { name: 'Women wears', link: 'home', icon: <Icon name="suitcase" size={20} style={styles.icon} /> }
            ], expend: false, link: 'certifiedcopy'
        },
        { name: 'My Ooders', icon: <FontAwesome name="first-order" size={20} style={styles.icon} />, link: 'casestatus' },
        { name: 'My Cart', icon: <Icon name="shopping-cart" size={20} style={styles.icon} />, link: 'causelist' },
        { name: 'My Wishlist', icon: <Icon name="heart" size={20} style={styles.icon} />, link: 'judgementorder' },
        { name: 'My Account', icon: <MaterialCommunityIcons name="account" size={20} style={styles.icon} />, link: 'judgementorder' },
        { name: 'My Notifications', icon: <Icon name="notification" size={20} style={styles.icon} />, link: '' }
      ]
    }
  }

  handleChangeExpend = (index) => {
    let temp = [...this.state.data]
    temp.forEach((element, elementIndex) => {
      if (elementIndex !== index) {
        element.expend = false
      } else {
        element.expend = !element.expend
      }
    });

    this.setState({
      data: temp
    })
  }
  render() {
    return (
      <>
          <View style={[styles.header, { paddingHorizontal: 20, backgroundColor: '#616161', paddingVertical:40}]}>
            <Image source={toys} style={styles.profileImg} resizeMode="contain" />
            <View style={{marginRight: 50}}>
              <Text numberOfLines={1} style={styles.userName}>Khalid Akhtar</Text>
              <Text numberOfLines={1} style={styles.profileDesc}>Profile</Text>
            </View>
          </View>
          <View style={[styles.list, {backgroundColor: '#616161', paddingBottom: 360}]}>
            {this.state.data.map((item, index) => (
              <><TouchableOpacity key={index} onPress={() => item.children ? this.handleChangeExpend(index) : this.props.navigation.navigate(item.link)} ><View style={styles.itemMainView}>
                <View style={styles.leftView} key={index}>
                <View>{item.icon}</View>
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
                {item.children && <View>
                  {item.expend === true ? <MaterialIcons name="expand-more" size={30} /> : <MaterialIcons name="expand-less" size={30} /> }
                </View>}
              </View></TouchableOpacity>
                {item.expend && item.expend === true && <View style={{ backgroundColor: '#000', marginHorizontal: -15 }}>
                  {item.children && item.children.map((childData, childIndex) => (
                    <View key={childIndex} style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <TouchableOpacity style={{ marginTop: 9, flexDirection: 'row', marginLeft: 35 }} onPress={() => this.props.navigation.navigate('AllCategories')}>
                        <View>{childData.icon}</View>
                        <Text style={styles.childText}>{childData.name}</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>}
                <View style={{ color: 'black', borderBottomColor: 'black', borderBottomWidth: 1, marginHorizontal: -15 }}></View>
              </>
            ))}
          </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  icon: { marginRight: 5, color: '#36e6ac' },
  mainView: { flex: 1, paddingVertical: 10 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  profileImg: { width: 65, height: 65 },
  userName: { fontFamily: theme.SF_PRO_DISPLAY_REGULAR, fontSize: 20, lineHeight: 28, color: colors.WHITE, marginBottom: 2 },
  profileDesc: { fontFamily: theme.SF_PRO_DISPLAY_REGULAR, fontSize: 14, lineHeight: 21, opacity: 0.56, color: colors.WHITE },
  rightView: { alignItems: 'center' },
  pImg: { width: 36, height: 36, },
  list: { paddingHorizontal: 15, borderTopColor: colors.WHITE_LOW_OPACITY, borderTopWidth: 1, paddingVertical: 15, marginBottom: 15 },
  itemMainView: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  leftView: { flexDirection: 'row', paddingVertical: 15, alignItems: 'center' },
  iconStyle: { marginRight: 17 },
  childIconStyle: { width: 15, height: 15, marginRight: 17 },
  itemText: { fontSize: 16, color: 'white' },
  chevronIcon: { alignSelf: 'center' },
  childText: { marginHorizontal: 5, color: colors.WHITE, opacity: 0.87, fontFamily: theme.SF_PRO_DISPLAY_REGULAR, fontSize: 16, marginBottom: 12 },
  version: { color: colors.WHITE_LOW_OPACITY, fontFamily: theme.SF_PRO_DISPLAY_REGULAR, fontSize: 16, lineHeight: 28, marginHorizontal: 15, marginBottom: 20 },
  bottomText: { fontSize: 16, fontFamily: theme.SF_PRO_DISPLAY_REGULAR, color: colors.WHITE, marginHorizontal: 15 }
})
export default SideNavBar