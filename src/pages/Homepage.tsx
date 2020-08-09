import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropertyImageSlider from '../components/PropertyImageSlider';
import PropertyDetail from '../components/PropertyDetail';
import PropertyEstimation from '../components/PropertyEstimation';
import PropertyTransaction from '../components/PropertyTransaction';
import PropertyCalculation from '../components/PropertyCalculation';
import PropertyRecommendation from '../components/PropertyRecommendation';
import PropertyLocation from '../components/PropertyLoacation';
import AgentList from '../components/AgentList';
// import LatestNews from '../components/LatestNews';
import _ from 'lodash';
const Homepage: React.FC<{navigation: any}> = ({navigation}) => {
  const [initialPostion, setInitialPosition] = useState<number>(0);
  const [yOffset, setYOffset] = useState(new Animated.Value(0));
  const [propertyLocation, setPropertyLocation] = useState<number>(0);
  const [transcationLocation, setTransactonLocation] = useState<number>(0);
  const [estateLocation, setEstateLocation] = useState<number>(0);
  const [agentLocation, setAgentLocation] = useState<number>(0);
  const [currentView, setCurrentView] = useState<number>(0);
  const propertyData = require('../data/property.json');
  const photo = _.get(propertyData, 'photos', []);
  const video = _.get(propertyData, 'video', []);
  const vr = _.get(propertyData, 'photo360', []);
  const district = _.get(propertyData, 'district', {});
  const estate = _.get(propertyData, 'estate', {});
  const phase = _.get(propertyData, 'phase', {});
  const building = _.get(propertyData, 'building', {});
  const price = _.get(propertyData, 'price', 0);
  const monthlyPay = _.get(propertyData, 'monthly_pay', 0);
  const net_area = _.get(propertyData, 'net_area', 0);
  const area = _.get(propertyData, 'area', 0);
  const price_net_area = _.get(propertyData, 'price_over_net_area', 0);
  const price_area = _.get(propertyData, 'area', 0);
  const buyTransactionList = _.get(propertyData, 'sell_tx', []);
  const rentTransactionList = _.get(propertyData, 'rent_tx', []);
  const agentList = _.get(propertyData, 'agent', []);
  const myScrollView = useRef();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon name="chevron-back" size={25} style={{marginLeft: 10}} />
      ),
      headerTitle: () => <Text style={styles.headerText}>{estate.name}</Text>,
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

  const MenuHeader = () => {
    const ViewScaleValue = yOffset.interpolate({
      inputRange: [0, 150],
      outputRange: [0, 50],
      extrapolate: 'clamp',
      // useNativeDriver: true,
    });

    return (
      <Animated.View
        style={[
          styles.menubar,
          {
            opacity: yOffset.interpolate({
              inputRange: [0, 50],
              outputRange: [0, 1],
            }),
            height: ViewScaleValue,
          },
        ]}>
        <TouchableHighlight
          onPress={() => {
            setInitialPosition(propertyLocation);
            myScrollView.current.scrollTo({
              x: 0,
              y: propertyLocation,
              animated: true,
            });
          }}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text
              style={[
                styles.menutext,
                currentView == 0 && {fontWeight: 'bold'},
              ]}>
              物業
            </Text>
            <View
              style={[
                styles.yellowbar,
                currentView == 0 && {borderTopColor: 'orange'},
              ]}
            />
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            setInitialPosition(propertyLocation);
            myScrollView.current.scrollTo({
              x: 0,
              y: transcationLocation,
              animated: true,
            });
          }}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text
              style={[
                styles.menutext,
                currentView == 1 && {fontWeight: 'bold'},
              ]}>
              成交
            </Text>
            <View
              style={[
                styles.yellowbar,
                currentView == 1 && {borderTopColor: 'orange'},
              ]}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            setInitialPosition(propertyLocation);
            myScrollView.current.scrollTo({
              x: 0,
              y: estateLocation,
              animated: true,
            });
          }}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text
              style={[
                styles.menutext,
                currentView == 2 && {fontWeight: 'bold'},
              ]}>
              屋苑
            </Text>
            <View
              style={[
                styles.yellowbar,
                currentView == 2 && {borderTopColor: 'orange'},
              ]}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            setInitialPosition(propertyLocation);
            myScrollView.current.scrollTo({
              x: 0,
              y: agentLocation,
              animated: true,
            });
          }}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text
              style={[
                styles.menutext,
                currentView == 3 && {fontWeight: 'bold'},
              ]}>
              代理
            </Text>
            <View
              style={[
                styles.yellowbar,
                currentView == 3 && {borderTopColor: 'orange'},
              ]}
            />
          </View>
        </TouchableHighlight>
        {/* <View style={{display: 'flex', flexDirection: 'column'}}>
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
        </View> */}
      </Animated.View>
    );
  };

  const handlePosition: (position: number) => void = (position: number) => {
    if (position >= propertyLocation && position < transcationLocation)
      setCurrentView(0);
    if (position >= transcationLocation && position < estateLocation)
      setCurrentView(1);
    if (position >= estateLocation && position < agentLocation)
      setCurrentView(2);
    if (position >= agentLocation) setCurrentView(3);
  };

  return (
    <View style={styles.background}>
      <MenuHeader />
      <ScrollView
        style={styles.background}
        ref={myScrollView}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: yOffset}}}],
          {
            listener: (event) =>
              handlePosition(event.nativeEvent.contentOffset.y),
          },
        )}
        scrollEventThrottle={100}
        contentOffset={{x: 0, y: initialPostion}}>
        <View
          onLayout={({nativeEvent}) => {
            // console.log('1', nativeEvent);
            setPropertyLocation(nativeEvent.layout.y);
          }}>
          <PropertyImageSlider
            photoList={photo}
            videoList={video}
            vrList={vr}
          />
          <PropertyDetail
            district={district}
            estate={estate}
            phase={phase}
            building={building}
            price={price}
            monthlyPay={monthlyPay}
            net_area={net_area}
            area={area}
            price_net_area={price_net_area}
            price_area={price_area}
          />
          <PropertyEstimation />
        </View>
        <View
          //ref={(e) => (location = e)}
          onLayout={({nativeEvent}) => {
            // console.log('2', nativeEvent);
            setTransactonLocation(nativeEvent.layout.y);
          }}>
          <PropertyTransaction
            buyTransactionList={buyTransactionList}
            rentTransactionList={rentTransactionList}
          />
        </View>
        <View
          onLayout={({nativeEvent}) => {
            // console.log('3', nativeEvent);
            setEstateLocation(nativeEvent.layout.y);
          }}>
          <PropertyCalculation />

          <PropertyRecommendation />
          <PropertyLocation
            latitude={building.latitude}
            longitude={building.longitude}
            point_latitude={building.streetview_latitude}
            point_longitude={building.streetview_longitude}
          />
        </View>
        <View
          onLayout={({nativeEvent}) => {
            // console.log('4', nativeEvent);
            setAgentLocation(nativeEvent.layout.y);
          }}>
          <AgentList agentList={agentList} />
        </View>
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
