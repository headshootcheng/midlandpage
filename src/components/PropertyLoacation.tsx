import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const PropertyLocation: React.FC<{}> = ({}) => {
  return (
    <View style={styles.wrapper}>
      <Text>PropertyLocation</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 250,
    marginBottom: 20,
    backgroundColor: 'white',
  },
});

export default PropertyLocation;
