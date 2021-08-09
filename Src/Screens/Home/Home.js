import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import {BarChart, Grid} from 'react-native-svg-charts';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ChartBars from '../../Components/FlatLists/ChartBars/ChartBars';
import ProductFlatList from '../../Components/FlatLists/ProductFlatList/ProductFlatList';
import styles from './Style';
const {width, height} = Dimensions.get('window');
import SelectDropdown from 'react-native-select-dropdown';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
const countries = ['1 week', '1 Month', '1 year', 'All'];
import OrderLogo from '../../assets/svgs/orderLogo';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartBars: [
        {
          up: 80,
          color: '#3C85D8',
        },
        {
          up: 100,
          color: '#3C85D8',
        },
        {
          up: 110,
          color: '#000000',
        },
        {
          up: 100,
          color: '#3C85D8',
        },
        {
          up: 100,
          color: '#3C85D8',
        },
        {
          up: 70,
          color: '#000000',
        },
        {
          up: 110,
          color: '#3C85D8',
        },
        {
          up: 50,
          color: '#000000',
        },

        {
          up: 40,
          color: '#3C85D8',
        },
        {
          up: 30,
          color: '#3C85D8',
        },
        {
          up: 20,
          color: '#000000',
        },
        {
          up: 80,
          color: '#3C85D8',
        },
        {
          up: 40,
          color: '#3C85D8',
        },
        {
          up: 30,
          color: '#3C85D8',
        },
        {
          up: 20,
          color: '#000000',
        },
        {
          up: 80,
          color: '#3C85D8',
        },
        {
          up: 90,
          color: '#3C85D8',
        },
        {
          up: 20,
          color: '#000000',
        },
        {
          up: 80,
          color: '#3C85D8',
        },
      ],
      products: [
        {
          image: require('../../assets/shoes1jpg.jpg'),
          name: 'Brown Sneaker',
          price: '11.05',
        },
        {
          image: require('../../assets/profilePic.png'),
          name: 'Brown Sneaker',
          price: '11.05',
        },
        {
          image: require('../../assets/profilePic.png'),
          name: 'Brown Sneaker',
          price: '11.05',
        },
        {
          image: require('../../assets/profilePic.png'),
          name: 'Brown Sneaker',
          price: '11.05',
        },
      ],
    };
  }
  renderIcon = () => {
    return (
      <FontAwesome
        style={{marginStart: '5%', bottom: 2}}
        size={10}
        name={'sort-down'}
        color={'#000000'}
      />
    );
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* <View style={{backgroundColor: 'blue', padding: '5%'}}>
          <Text style={{color: 'white'}}>Drawer</Text>
        </View> */}
        <IonIcon
          style={{marginStart: '5%'}}
          size={20}
          name={'menu'}
          color={'#ffffff'}
        />
        <View style={styles.containerForPicAndName}>
          <Image
            style={styles.profilePic}
            source={require('../../assets/profilePic.png')}
          />
          <View style={{marginStart: 10}}>
            <Text style={{color: '#ffffff', fontSize: hp('1.8%')}}>
              Robin Shoes Store
            </Text>
            <View style={styles.containerForRating}>
              {/* <Image source={require('../../assets/rating.png')} /> */}
              <OrderLogo />
              <Text style={styles.txtRating}>Rating</Text>
              <Text style={[styles.txtRating, {color: '#F1C800'}]}>4.9</Text>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.headerForContentContainer}>
            <View style={styles.earningContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: hp('1.8%'),
                    fontWeight: 'bold',
                    fontFamily: 'Montserrat',
                    color: '#707070',
                  }}>
                  Earning
                </Text>
                <SelectDropdown
                  data={countries}
                  buttonTextStyle={{fontSize: hp('1.7%'), color: '#3C85D8'}}
                  defaultButtonText="Today"
                  renderDropdownIcon={this.renderIcon}
                  buttonStyle={{
                    width: 80,
                    height: 20,
                    backgroundColor: 'transparent',
                  }}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                />
                {/* <Text style={{color: 'red'}}>Today</Text> */}
              </View>
              <Text style={{fontSize: hp('1.8%')}}>$10900</Text>
            </View>
          </View>
          <ScrollView>
            <View style={styles.chartContainer}>
              <ChartBars chartBars={this.state.chartBars} />
              <View style={{padding: '5%', overflow: 'hidden'}}>
                <View style={styles.salesAndReturnContainer}>
                  <View style={styles.eachSale}>
                    <View style={styles.containerOfSaleAndBar}>
                      <Text style={styles.txtOfSalesAndReturn}>Sales</Text>
                      <View style={styles.bar} />
                    </View>
                    <View
                      style={{
                        paddingStart: 5,
                        paddingEnd: 5,
                        backgroundColor: '#ffffff',
                        borderRadius: 5,
                        shadowColor: '#000000',
                        shadowOffset: {width: 1, height: 1},
                        shadowOpacity: 0.1,
                        shadowRadius: 3,
                        elevation: 2,
                      }}>
                      <Text>65%</Text>
                    </View>
                  </View>
                  <View style={styles.eachSale}>
                    <View style={styles.containerOfSaleAndBar}>
                      <Text style={styles.txtOfSalesAndReturn}>Returns</Text>
                      <View style={[styles.bar, {backgroundColor: 'red'}]} />
                    </View>
                    <View
                      style={{
                        paddingStart: 5,
                        paddingEnd: 5,
                        backgroundColor: '#ffffff',
                        borderRadius: 5,
                        shadowColor: '#000000',
                        shadowOffset: {width: 1, height: 1},
                        shadowOpacity: 0.1,
                        shadowRadius: 3,
                        elevation: 2,
                      }}>
                      <Text>35%</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.txtHeading}>Most Popular Products</Text>
            <View style={styles.containerOfProductFlatList}>
              <ProductFlatList products={this.state.products} />
            </View>
            <Text style={styles.txtHeading}>Store Management</Text>
            <View style={styles.containerOfManagementBtns}>
              <View style={styles.eachManagementBtn}>
                <IonIcon name="md-add-circle-sharp" size={24} />
                <Text style={styles.txtOfManagementBtn}>Add Product</Text>
              </View>
              <View style={styles.eachManagementBtn}>
                <IonIcon name="md-add-circle-sharp" size={24} />
                <Text style={styles.txtOfManagementBtn}>Orders</Text>
              </View>
              <View style={styles.eachManagementBtn}>
                <IonIcon name="md-add-circle-sharp" size={24} />
                <Text style={styles.txtOfManagementBtn}>Your Product</Text>
              </View>
            </View>
            <View style={{height: 50, backgroundColor: 'transparent'}} />
          </ScrollView>
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}
