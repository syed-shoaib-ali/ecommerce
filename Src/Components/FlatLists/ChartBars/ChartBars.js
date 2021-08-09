import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class ChartBars extends Component {
  renderChart = ({item, index}) => {
    return (
      <View style={{justifyContent: 'flex-end'}}>
        <View
          style={{
            width: wp('2.5%'),
            // height: item.up,
            height: item.up,
            backgroundColor: item.color,
            marginEnd: 10,
            borderTopStartRadius: 5,
            borderTopEndRadius: 5,
          }}
        />
      </View>
    );
  };
  render() {
    return (
      <FlatList
        //   style={{marginTop: '30%'}}
        contentContainerStyle={{paddingStart: '5%'}}
        data={this.props.chartBars}
        renderItem={this.renderChart}
        horizontal
      />
    );
  }
}
