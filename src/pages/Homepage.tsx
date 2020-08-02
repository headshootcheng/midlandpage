import React, {useEffect, useState} from 'react';
import {
  Text,
  Button,
  ScrollView,
  StyleSheet,
  View,
  Animated,
} from 'react-native';
import PropertyDetail from '../components/PropertyDetail';
import PropertyEstimation from '../components/PropertyEstimation';
import PropertyTransaction from '../components/PropertyTransaction';
import PropertyCalculation from '../components/PropertyCalculation';
import PropertyRecommendation from '../components/PropertyRecommendation';
import PropertyLocation from '../components/PropertyLoacation';
import AgentList from '../components/AgentList';
import LatestNews from '../components/LatestNews';

const Homepage: React.FC<{navigation: any}> = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => console.log('123')} title="Update count" />
      ),
    });
  }, [navigation]);

  const [yOffset, setYOffset] = useState(new Animated.Value(0));

  return (
    <View style={styles.background}>
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
              outputRange: [0, 90],
            }),
          },
        ]}>
        <Text>123</Text>
      </Animated.View>
      <ScrollView
        style={styles.background}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: yOffset}}},
        ])}
        scrollEventThrottle={100}>
        <PropertyDetail />
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
  menubar: {
    backgroundColor: 'gray',
    width: '100%',
    maxHeight: 50,
  },
  background: {
    display: 'flex',
    flexDirection: 'column',
  },
});
export default Homepage;
