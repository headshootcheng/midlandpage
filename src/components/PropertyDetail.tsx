import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {toTenThousand, currencyFormat} from '../util/Numberformat';

const PropertyDetail: React.FC<{
  district: any;
  estate: any;
  phase: any;
  building: any;
  price: number;
  monthlyPay: number;
  net_area: number;
  area: number;
  price_net_area: number;
  price_area: number;
}> = ({
  district,
  estate,
  phase,
  building,
  price,
  monthlyPay,
  net_area,
  area,
  price_net_area,
  price_area,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.infoRow}>
        <View>
          <Text style={styles.titleText}>{estate.name}</Text>
          <Text style={styles.subTitleText}>
            {phase.name} {building.name}
          </Text>
          <Text style={styles.subTitleText}>高層 C室</Text>
          <View style={styles.eachRow}>
            <Icon name="location" size={25} color="gray" />
            <Text style={{color: 'gray', textDecorationLine: 'underline'}}>
              {district.name}
            </Text>
            <Text
              style={{
                color: 'gray',
                textDecorationLine: 'underline',
                marginHorizontal: 5,
              }}>
              {building.address}
            </Text>
          </View>
        </View>
        <View />
      </View>

      <View style={styles.infoRow}>
        <View>
          <View style={styles.eachRow}>
            <View style={styles.sellPriceBox}>
              <Text style={styles.sellPriceBoxText}>售</Text>
            </View>
            <Text style={styles.sellPriceText}>${toTenThousand(price)} </Text>
          </View>

          <Text style={{marginHorizontal: 50, fontSize: 18}}>
            月供 ${currencyFormat(monthlyPay)}
          </Text>
        </View>
      </View>
      <View />

      <View style={styles.infoRow}>
        <View>
          <Text style={styles.subTitleText}>實用 621呎</Text>
          <Text style={{marginHorizontal: 40, fontSize: 18, marginTop: 5}}>
            ${currencyFormat(price_net_area)}/呎
          </Text>
        </View>
        <View>
          <Text style={styles.subTitleText}>建築 784呎</Text>
          <Text style={{marginHorizontal: 40, fontSize: 18, marginTop: 5}}>
            ${currencyFormat(price_area)}/呎
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  eachRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subTitleText: {
    marginTop: 5,
    fontSize: 22,
  },
  sellPriceBox: {
    borderRadius: 5,
    height: 40,
    width: 40,
    backgroundColor: 'red',
  },
  sellPriceBoxText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  sellPriceText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 10,
  },
});

export default PropertyDetail;
