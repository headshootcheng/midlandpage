import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const LatestNews: React.FC<{}> = ({}) => {
  return (
    <View style={styles.wrapper}>
      <Text>LatestNews</Text>
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

export default LatestNews;
