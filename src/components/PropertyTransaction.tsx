import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import TransactionCard from './Cards/TransactionCard';
const PropertyTransaction: React.FC<{
  buyTransactionList: any[];
  rentTransactionList: any[];
}> = ({buyTransactionList, rentTransactionList}) => {
  const [currentTab, setTab] = useState<number>(0);
  const filterBuyList = buyTransactionList.filter((eachList, index) => {
    return index < 5;
  });
  const filterRentList = rentTransactionList.filter((eachList, index) => {
    return index < 5;
  });
  const renderList: React.FC<{item: any}> = ({item}) => {
    return <TransactionCard data={item} />;
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>屋苑成交</Text>
      <View style={styles.tabRow}>
        <View>
          <TouchableHighlight onPress={() => setTab(0)}>
            <Text
              style={[styles.tabText, currentTab == 0 && {fontWeight: 'bold'}]}>
              買賣
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
              租務
            </Text>
          </TouchableHighlight>
          <View
            style={[{marginTop: 5}, currentTab == 1 && styles.underlineBlack]}
          />
        </View>
      </View>
      <View style={styles.underlineGray} />
      <FlatList
        data={currentTab == 0 ? filterBuyList : filterRentList}
        renderItem={renderList}
      />
      <View style={styles.moreBtnLocation}>
        <TouchableHighlight style={styles.moreBtn}>
          <Text style={styles.moreBtnText}>更多成交紀錄</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 20,
    //padding: 10,
    //paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  title: {
    marginTop: 30,
    paddingHorizontal: 20,
    fontSize: 25,
    fontWeight: 'bold',
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
  moreBtnLocation: {
    marginTop: 20,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  moreBtn: {
    width: 200,
    height: 50,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreBtnText: {
    fontSize: 20,
    color: 'red',
  },
});

export default PropertyTransaction;
