import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import AgentCard from './Cards/AgentCard';
const AgentList: React.FC<{agentList: any[]}> = ({agentList}) => {
  const filterList = agentList.filter((eachList, index) => {
    return index < 5;
  });

  const renderList: React.FC<{item: any}> = ({item}) => {
    return (
      <AgentCard
        chi_name={item.name.chi}
        eng_name={item.name.eng}
        position={item.title}
        licence_no={item.licence_no}
        icon={item.emp_photo}
      />
    );
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>推薦代理</Text>
      <FlatList
        data={filterList}
        renderItem={renderList}
        style={{marginTop: 50}}
      />
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

export default AgentList;
