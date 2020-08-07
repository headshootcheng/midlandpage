import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {toTenThousand, currencyFormat} from '../util/Numberformat';
import {PieChart} from 'react-native-svg-charts';
const PropertyCalculation: React.FC<{}> = ({}) => {
  const [activeIndex, setActive] = useState(0);
  interface pieChartData {
    label: string;
    data: number;
    color: string;
  }
  const mortgageData: pieChartData[] = [
    {label: '首期', data: 5400000, color: '#F0F30D'},
    {label: '印花稅', data: 405000, color: '#0AD4EE'},
    {label: '其他費用', data: 118000, color: 'gray'},
  ];
  const pieData = mortgageData.map(({data, color, label}, index) => ({
    value: data,
    svg: {
      fill: color,
      onPressOut: () => console.log('press'),
    },
    key: index,
  }));

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>按揭計算</Text>
      <View style={styles.mainInfoArea}>
        <Text style={styles.monthlyPayText}>
          每月供款: ${currencyFormat(21337)}
        </Text>
        <Text style={styles.monthlyIncomeText}>每月入息要求: $51,101 /月</Text>
      </View>
      <View style={styles.pieChartArea}>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text style={styles.pieChartInfoTextBold}>置業開支</Text>
          <Text style={styles.pieChartInfoTextNormal}>$5,923,000</Text>
          <Text style={[styles.pieChartInfoTextBold, {marginTop: 10}]}>
            樓價
          </Text>
          <Text style={styles.pieChartInfoTextNormal}>
            {toTenThousand(10800000)}
          </Text>
        </View>

        <PieChart
          style={{height: 140, left: 20}}
          data={pieData}
          outerRadius="100%"
          innerRadius="50%"
          padAngle={0}
        />
      </View>

      {mortgageData.map(({data, label, color}, index) => {
        return (
          <View style={styles.pieChartArea}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={[styles.colortag, {backgroundColor: color}]} />
              <Text style={styles.pieChartInfoTextNormal}>{label}</Text>
            </View>
            <Text style={styles.pieChartInfoTextNormal}>
              ${currencyFormat(data)}
            </Text>
          </View>
        );
      })}
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
  mainInfoArea: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthlyPayText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  monthlyIncomeText: {
    marginTop: 10,
    fontSize: 18,
  },
  pieChartArea: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  pieChartInfoTextBold: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  pieChartInfoTextNormal: {
    marginVertical: 5,
    fontSize: 18,
  },
  colortag: {
    borderRadius: 5,
    height: 18,
    width: 10,
    backgroundColor: 'black',
    marginRight: 10,
  },
});

export default PropertyCalculation;
