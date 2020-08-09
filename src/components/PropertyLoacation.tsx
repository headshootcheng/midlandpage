import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const PropertyLocation: React.FC<{}> = ({}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>物業位置</Text>
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
});

export default PropertyLocation;
