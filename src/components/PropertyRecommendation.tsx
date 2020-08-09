import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
const PropertyRecommendation: React.FC<{}> = ({}) => {
  const [currentTab, setTab] = useState<number>(0);
  return (
    <View style={styles.wrapper}>
      <View style={styles.tabRow}>
        <View>
          <TouchableHighlight onPress={() => setTab(0)}>
            <Text
              style={[styles.tabText, currentTab == 0 && {fontWeight: 'bold'}]}>
              同屋苑推介
            </Text>
          </TouchableHighlight>
          <View
            style={[{marginTop: 5}, currentTab == 0 && styles.underlineBlack]}
          />
        </View>
        <View style={{marginLeft: 20}}>
          <TouchableHighlight onPress={() => setTab(1)}>
            <Text
              style={[styles.tabText, currentTab == 1 && {fontWeight: 'bold'}]}>
              同區推介
            </Text>
          </TouchableHighlight>
          <View
            style={[{marginTop: 5}, currentTab == 1 && styles.underlineBlack]}
          />
        </View>
        <View style={{marginLeft: 20}}>
          <TouchableHighlight onPress={() => setTab(2)}>
            <Text
              style={[styles.tabText, currentTab == 2 && {fontWeight: 'bold'}]}>
              同校網推介
            </Text>
          </TouchableHighlight>
          <View
            style={[{marginTop: 5}, currentTab == 2 && styles.underlineBlack]}
          />
        </View>
      </View>

      <ScrollView horizontal={true} style={styles.horizontalList}>
        <View style={{backgroundColor: 'black', height: 200, width: 200}} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 20,
    flex: 1,
    height: 250,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  tabRow: {
    marginTop: 30,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  tabText: {
    fontSize: 18,
  },
  underlineBlack: {
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    borderStyle: 'solid',
  },
  underlineGray: {
    flex: 1,
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
  horizontalList: {
    marginTop: 20,
    flex: 1,
    paddingLeft: 20,
  },
});

export default PropertyRecommendation;
