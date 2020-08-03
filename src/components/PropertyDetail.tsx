import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
const PropertyDetail: React.FC<{
  photoList: any[];
  videoList: any[];
  vrList: any[];
}> = ({photoList, videoList, vrList}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const mediaList = vrList.concat(videoList).concat(photoList);

  const mediaNumber: number = mediaList.length;
  const renderList: React.FC<{item: any; index: number}> = ({item, index}) => {
    return (
      <View style={{width: '100%'}}>
        <Image
          source={{
            uri: item.vr_link
              ? item.vr_thumbnail
              : item.video_thumbnail || item.wan_doc_path,
          }}
          style={{width: '100%', height: 300, resizeMode: 'stretch'}}
        />
        <View
          style={{
            position: 'absolute',
            top: 260,
            left: '78%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            opacity: 0.8,
            height: 30,
            width: 80,
            borderRadius: 15,
          }}>
          <Text style={{fontSize: 18, color: 'white'}}>
            {index + 1} / {mediaNumber}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.wrapper}>
      <Carousel
        layout={'default'}
        data={mediaList}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        renderItem={renderList}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      {/* <Image
        source={{uri: photoList[0].wan_doc_path}}
        style={{width: '100%', height: 500}}
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    //height: 250,
    marginBottom: 20,
    backgroundColor: 'white',
  },
});

export default PropertyDetail;
