import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const AgentList: React.FC<{}> = ({}) => {
  return (
    <View style={styles.wrapper}>
      <Text>AgentList</Text>
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

export default AgentList;
