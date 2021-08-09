import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Home from '../Home/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Theme from '../../Utils/Theme';
import Button from '../../Components/Button/Button';
import {slides} from './slides';
import styles from './Style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');
import Intro1 from '../../assets/svgs/intor1.js';
import Intro2 from '../../assets/svgs/intro2.js';
import Intro3 from '../../assets/svgs/intro3.js';
export default class IntroSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }

  _renderItem = ({item, index}) => {
    if (index == 2) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.picContainer}>
            {/* <Image source={item.image} /> */}
            <Intro3 />
          </View>
          <View style={styles.headingAndTxtContainer}>
            <Text style={styles.headingTxt}>{item.title}</Text>
            <Text style={styles.simpleTxt}>{item.text}</Text>
          </View>
          <Button onPress={() => this.props.navigation.navigate('SignUp')} />
          {/* <AntDesign
        style={{position:'absolute',bottom:0,right:10}}
        name="right"
        color="rgba(255, 255, 255, .9)"
        size={24}
        onPress={index==0?() => this.slider?.goToSlide(1):index==1?() => this.slider?.goToSlide(2):null}
      /> */}
        </View>
      );
    }
    if (index == 1) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.picContainer}>
            {/* <Image style={{}} source={item.image} />
             */}
            <Intro2 />
          </View>
          <View style={styles.headingAndTxtContainer}>
            <Text style={styles.headingTxt}>{item.title}</Text>
            <Text style={styles.simpleTxt}>{item.text}</Text>
          </View>

          <AntDesign
            style={{position: 'absolute', bottom: hp('5%'), right: 20}}
            name="right"
            color="rgba(255, 255, 255, .9)"
            size={24}
            onPress={
              index == 0
                ? () => this.slider?.goToSlide(1)
                : index == 1
                ? () => this.slider?.goToSlide(2)
                : null
            }
          />
        </View>
      );
    }
    return (
      <View style={styles.mainContainer}>
        <View style={styles.picContainer}>
          {/* <Image style={{}} source={item.image} />
           */}
          <Intro1 />
        </View>
        <View style={styles.headingAndTxtContainer}>
          <Text style={styles.headingTxt}>{item.title}</Text>
          <Text style={styles.simpleTxt}>{item.text}</Text>
        </View>

        <AntDesign
          style={{position: 'absolute', bottom: hp('5%'), right: 20}}
          name="right"
          color="rgba(255, 255, 255, .9)"
          size={24}
          onPress={
            index == 0
              ? () => this.slider?.goToSlide(1)
              : index == 1
              ? () => this.slider?.goToSlide(2)
              : null
          }
        />
      </View>
    );
  };
  renderNextButton = () => {
    return <AntDesign name="right" color="rgba(255, 255, 255, .9)" size={24} />;
  };
  _renderDoneButton = () => {
    return (
      <View style={{}}>
        <Text>Done</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({showRealApp: true});
  };
  renderPagination = index => {
    switch (index) {
      case 0:
        return (
          <View style={styles.mainContainerOfPagination}>
            <View style={styles.selectedPagination} />
            <View style={styles.unSelectedPagination} />
            <View style={[styles.unSelectedPagination, {marginStart: 20}]} />
          </View>
        );
      case 1:
        return (
          <View style={styles.mainContainerOfPagination}>
            <View style={[styles.unSelectedPagination, {marginStart: 0}]} />
            <View style={[styles.selectedPagination, {marginStart: 10}]} />
            <View style={[styles.unSelectedPagination, {marginStart: 20}]} />
          </View>
        );
      case 2:
        return (
          <View style={styles.mainContainerOfPagination}>
            <View style={[styles.unSelectedPagination, {marginStart: 0}]} />
            <View style={styles.unSelectedPagination} />
            <View style={[styles.selectedPagination, {marginStart: 20}]} />
          </View>
        );
    }
  };
  render() {
    if (this.state.showRealApp) {
      return <Home />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          // onDone={this._onDone}
          renderNextButton={this.renderNextButton}
          renderPagination={index => this.renderPagination(index)}
          // renderDoneButton={this._renderDoneButton}
          showNextButton
          ref={ref => (this.slider = ref)}
        />
      );
    }
  }
}
