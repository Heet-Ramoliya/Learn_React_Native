import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const TouchableHeighlight_task = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight onPress={() => console.warn('button click')}>
        <Text style={styles.button}>button</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  button: {
    fontSize: 25,
    color: 'white',
    backgroundColor: 'skyblue',
    textAlign: 'center',
    padding: 7,
    borderRadius: 100,
    fontWeight: '400',
  },
});


export default TouchableHeighlight_task;
