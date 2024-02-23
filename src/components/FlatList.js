import {View, Text, StyleSheet, FlatList} from 'react-native';

const FlatList_task = () => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  return (
    <View>
      <Text style={styles.text}>FlatList_task</Text>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <Text style={styles.list}>{item.title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  list: {
    fontSize: 20,
    padding: 5,
    color: 'blue',
  },
});

export default FlatList_task;
