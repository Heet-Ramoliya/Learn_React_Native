import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const LearnFlex = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.box1}>
        <Text style={styles.text1}>Box1</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.box4}></View>
        <View style={styles.box5}></View>
      </View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'black',
    margin: 5,
    backgroundColor: 'black',
  },
  box1: {
    flex: 1,
    backgroundColor: 'green',
    margin: 8,
  },
  text1: {
    fontSize: 25,
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  box2: {
    flex: 2,
    backgroundColor: 'aqua',
    margin: 8,
    flexDirection: 'row',
  },
  box3: {
    flex: 1,
    backgroundColor: 'yellow',
    margin: 8,
  },
  box4: {
    flex: 1,
    backgroundColor: 'red',
    margin: 10,
  },
  box5: {
    flex: 1,
    backgroundColor: 'purple',
    margin: 10,
  },
});

export default LearnFlex;
