import {Pressable, View, StyleSheet, Text} from 'react-native';

const Pressable_task = () => {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={() => console.warn('onPress')}
        onLongPress={() => console.warn('onLongPress')}>
        <Text style={styles.btn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    fontSize: 20,
    backgroundColor: 'black',
    color: 'white',
    padding: 5,
    width: 130,
    textAlign: 'center',
  },
});

export default Pressable_task;
