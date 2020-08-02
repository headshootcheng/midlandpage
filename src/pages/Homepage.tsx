import React from 'react';
import {Text, Button, ScrollView, StyleSheet} from 'react-native';

const Homepage: React.FC<{navigation: any}> = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => console.log('123')} title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.background}>
      <Text>Homepage13</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },
});
export default Homepage;
