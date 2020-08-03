import React, {useEffect, useState} from 'react';
import {
  Text,
  Button,
  ScrollView,
  StyleSheet,
  View,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropertyDetail from '../components/PropertyDetail';
import PropertyEstimation from '../components/PropertyEstimation';
import PropertyTransaction from '../components/PropertyTransaction';
import PropertyCalculation from '../components/PropertyCalculation';
import PropertyRecommendation from '../components/PropertyRecommendation';
import PropertyLocation from '../components/PropertyLoacation';
import AgentList from '../components/AgentList';
import LatestNews from '../components/LatestNews';
import _ from 'lodash';
const Homepage: React.FC<{navigation: any}> = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon name="chevron-back" size={25} style={{marginLeft: 10}} />
      ),
      headerTitle: () => <Text style={styles.headerText}>海怡半島</Text>,
      headerRight: () => (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: 10,
          }}>
          <Icon
            name="share-social-outline"
            size={25}
            style={{marginHorizontal: 5}}
          />
          <Icon name="heart-outline" size={25} style={{marginHorizontal: 5}} />
        </View>
      ),
    });
  }, [navigation]);

  const [yOffset, setYOffset] = useState(new Animated.Value(0));
  const [currentView, setCurrentView] = useState<number>(0);
  const propertyData = require('../data/property.json');
  const photo = _.get(propertyData, 'photos', []);
  const video = _.get(propertyData, 'video', []);
  const vr = _.get(propertyData, 'photo360', []);
  const MenuHeader = () => {
    return (
      <Animated.View
        style={[
          styles.menubar,
          {
            opacity: yOffset.interpolate({
              inputRange: [0, 50],
              outputRange: [0, 1],
            }),
            height: yOffset.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 40],
            }),
          },
        ]}>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text
            style={[styles.menutext, currentView == 0 && {fontWeight: 'bold'}]}>
            物業
          </Text>
          <View
            style={[
              styles.yellowbar,
              currentView == 0 && {borderTopColor: 'orange'},
            ]}
          />
        </View>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text
            style={[styles.menutext, currentView == 1 && {fontWeight: 'bold'}]}>
            成交
          </Text>
          <View
            style={[
              styles.yellowbar,
              currentView == 1 && {borderTopColor: 'orange'},
            ]}
          />
        </View>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text
            style={[styles.menutext, currentView == 2 && {fontWeight: 'bold'}]}>
            屋苑
          </Text>
          <View
            style={[
              styles.yellowbar,
              currentView == 2 && {borderTopColor: 'orange'},
            ]}
          />
        </View>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text
            style={[styles.menutext, currentView == 3 && {fontWeight: 'bold'}]}>
            代理
          </Text>
          <View
            style={[
              styles.yellowbar,
              currentView == 3 && {borderTopColor: 'orange'},
            ]}
          />
        </View>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text
            style={[styles.menutext, currentView == 4 && {fontWeight: 'bold'}]}>
            資訊
          </Text>
          <View
            style={[
              styles.yellowbar,
              currentView == 4 && {borderTopColor: 'orange'},
            ]}
          />
        </View>
      </Animated.View>
    );
  };
  return (
    <View style={styles.background}>
      <MenuHeader />
      <ScrollView
        style={styles.background}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: yOffset}}},
        ])}
        scrollEventThrottle={100}>
        <PropertyDetail photoList={photo} videoList={video} vrList={vr} />
        <PropertyEstimation />
        <PropertyTransaction />
        <PropertyCalculation />
        <PropertyRecommendation />
        <PropertyLocation />
        <AgentList />
        <LatestNews />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    //fontWeight: 'bold',
  },
  menubar: {
    // backgroundColor: 'gray',
    width: '100%',
    maxHeight: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 5,
    paddingHorizontal: 20,
  },
  menutext: {
    fontSize: 17,
    marginBottom: 4,
  },
  yellowbar: {
    borderColor: 'transparent',
    borderTopWidth: 3,
    borderStyle: 'solid',
  },
  background: {
    display: 'flex',
    flexDirection: 'column',
  },
});
export default Homepage;
