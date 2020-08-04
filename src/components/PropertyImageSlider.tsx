import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {Button} from 'native-base';
import Carousel from 'react-native-snap-carousel';
const PropertyImageSlider: React.FC<{
  photoList: any[];
  videoList: any[];
  vrList: any[];
}> = ({photoList, videoList, vrList}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentMediaType, setMediaType] = useState<number>(0);
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
          style={styles.photo}
        />
        <View style={styles.photoIndexBox}>
          <Text style={styles.photoIndexBoxText}>
            {index + 1} / {mediaNumber}
          </Text>
        </View>
      </View>
    );
  };

  const onPressVR: () => void = () => {
    setMediaType(0);
    setActiveIndex(0);
  };
  const onPressVideo: () => void = () => {
    setMediaType(1);
    setActiveIndex(1);
  };
  const onPressPhoto: () => void = () => {
    setMediaType(2);
    setActiveIndex(4);
  };

  const onMediaChange: (index: number) => void = (index) => {
    setActiveIndex(index);
    if (index == 0) setMediaType(0);
    if (index > 0 && index < 4) setMediaType(1);
    if (index >= 4) setMediaType(2);
  };
  return (
    <View style={styles.wrapper}>
      <Carousel
        layout={'default'}
        data={mediaList}
        firstItem={activeIndex}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        renderItem={renderList}
        onSnapToItem={(index) => onMediaChange(index)}
      />
      <View style={styles.buttonRow}>
        <Button
          light
          style={[
            styles.button,
            currentMediaType == 0 && {backgroundColor: 'orange'},
          ]}
          onPress={onPressVR}>
          <Text>VR</Text>
        </Button>
        <Button
          light
          style={[
            styles.button,
            currentMediaType == 1 && {backgroundColor: 'orange'},
          ]}
          onPress={onPressVideo}>
          <Text>影片</Text>
        </Button>
        <Button
          light
          style={[
            styles.button,
            currentMediaType == 2 && {backgroundColor: 'orange'},
          ]}
          onPress={onPressPhoto}>
          <Text>相片</Text>
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  photoIndexBox: {
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
  },
  photoIndexBoxText: {
    fontSize: 18,
    color: 'white',
  },
  photo: {
    width: '100%',
    height: 300,
    resizeMode: 'stretch',
  },
  buttonRow: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 50,
  },
  button: {
    height: 30,
    width: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default PropertyImageSlider;
