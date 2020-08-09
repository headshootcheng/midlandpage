import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {toTenThousand, currencyFormat} from '../util/Numberformat';
import {VictoryPie, Slice} from 'victory-native';
const PropertyCalculation: React.FC<{}> = ({}) => {
  const [activeIndex, setActive] = useState(0);
  interface pieChartData {
    label: string;
    y: number;
    color: string;
    index: number;
  }

  const initialData: pieChartData[] = [
    {label: '首期', y: 0, color: '#F0F30D', index: 1},
    {label: '印花稅', y: 0, color: '#0AD4EE', index: 2},
    {label: '其他費用', y: 100, color: 'gray', index: 3},
  ];
  const mortgageData: pieChartData[] = [
    {label: '首期', y: 5400000, color: '#F0F30D', index: 1},
    {label: '印花稅', y: 405000, color: '#0AD4EE', index: 2},
    {label: '其他費用', y: 118000, color: 'gray', index: 3},
  ];
  const [pieData, setPieData] = useState<pieChartData[]>(initialData);
  useEffect(() => {
    setTimeout(() => setPieData(mortgageData), 1500);
  }, []);
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
        <VictoryPie
          innerRadius={40}
          animate={{
            duration: 5000,
            easing: 'circle',
          }}
          colorScale={['#F0F30D', '#0AD4EE', 'gray']}
          labels={({datum}) => null}
          data={pieData}
          width={150}
          height={150}
          padding={{left: 20}}
        />
      </View>

      {mortgageData.map(({y, label, color}, index) => {
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
              ${currencyFormat(y)}
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
