import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const AgentCard: React.FC<{
  chi_name: string;
  eng_name: string;
  position: string;
  licence_no: any;
  icon: string;
}> = ({chi_name, eng_name, position, licence_no, icon}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.videoRow}>
        <Text style={styles.videoText}>影片</Text>
      </View>
      <View style={styles.agentInfoRow}>
        <Image style={styles.icon} source={{uri: icon}} />
        <View style={{marginLeft: 10}}>
          <Text style={styles.name}>
            {chi_name} {eng_name}
          </Text>
          <Text style={styles.position}>
            {position}({licence_no})
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 20,
  },
  videoRow: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  videoText: {
    fontSize: 20,
    color: 'orange',
  },
  agentInfoRow: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    //alignItems: 'center',
  },
  icon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 1,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  position: {
    marginTop: 10,
    fontSize: 18,
  },
});
export default AgentCard;
