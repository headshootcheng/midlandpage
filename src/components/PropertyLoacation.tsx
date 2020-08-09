import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const PropertyLocation: React.FC<{
  latitude: number;
  longitude: number;
  point_latitude: number;
  point_longitude: number;
}> = ({latitude, longitude, point_latitude, point_longitude}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>物業位置</Text>
      <MapView
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        <Marker
          coordinate={{longitude: point_longitude, latitude: point_latitude}}
          pinColor="red"
        />
      </MapView>
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
  map: {
    marginTop: 20,
    height: 300,
    flex: 1,
  },
});

export default PropertyLocation;
