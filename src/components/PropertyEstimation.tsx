import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, CheckBox} from 'native-base';
const PropertyEstimation: React.FC<{}> = ({}) => {
  const [checked, setCheck] = useState<boolean>(true);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>物業估值</Text>
      <View style={styles.row}>
        <Image
          source={require('../images/hangsenglogo.jpg')}
          style={styles.logo}
        />
        <Button success style={styles.button}>
          <Text style={styles.buttonText}>物業估值</Text>
        </Button>
      </View>
      <View style={styles.row2}>
        <CheckBox
          color="green"
          checked={checked}
          style={styles.checkbox}
          onPress={() => setCheck(!checked)}
        />
        <Text style={styles.declaimerText}>
          在此就恒生銀行有限公司之估值服務供應商提供的任何物業資料及估值，僅供參考之用，對本行並無約束力。本行並不保證任何該等資料及估值的準確性、及時性或完整性，或其是否適合作任何用途。本行亦不會就任何人士依賴該等資料及估值承擔任何責任。
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 20,
    padding: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row2: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 150,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkbox: {
    height: 35,
    width: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  declaimerText: {
    width: 320,
    marginHorizontal: 20,
  },
});

export default PropertyEstimation;
