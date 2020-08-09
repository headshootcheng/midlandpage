import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import _ from 'lodash';
import {toTenThousand, currencyFormat} from '../../util/Numberformat';
import moment from 'moment';
const TransactionCard: React.FC<{data: any}> = ({data}) => {
  //console.log(data);
  const estate_name = _.get(data, 'estate.name', '');
  const phase_name = _.get(data, 'phase.name', '');
  const building_name = _.get(data, 'building.name', '');
  const floor_level = _.get(data, 'floor_level.name', '');
  const flat = _.get(data, 'flat', '');
  const date = _.get(data, 'tx_date', '');
  const bedroom = _.get(data, 'bedroom', '');
  const price = _.get(data, 'price', 0);
  const net_area = _.get(data, 'net_area', 0);
  const area = _.get(data, 'area', 0);
  const net_area_price = price / net_area;
  const area_price = price / area;
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <Text style={styles.infoText}>
          {estate_name}
          {phase_name} {building_name} {floor_level} {flat}室
        </Text>
        <Text style={styles.priceText}>${toTenThousand(price)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.infoText}>
          {moment(date).format('DD/MM/YYYY')} {bedroom}房
        </Text>
        <Text style={styles.infoText}>
          實{net_area}呎 | 建{area}呎
        </Text>
      </View>

      <View style={styles.row}>
        <Image
          source={require('../../images/midlandTransactionLabel.jpg')}
          style={styles.labelImg}
        />
        <Text style={styles.grayText}>
          @ ${currencyFormat(net_area_price)} @ ${currencyFormat(area_price)}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  row: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  infoText: {
    fontSize: 20,
  },
  priceText: {
    fontSize: 20,
    color: 'orange',
  },
  labelImg: {
    height: 40,
    width: 100,
    resizeMode: 'contain',
  },
  grayText: {
    color: 'gray',
    fontSize: 18,
  },
});
export default TransactionCard;
