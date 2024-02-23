import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const ScrollViewExample = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 1</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 2</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 3</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 4</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 5</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 6</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 7</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 8</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 9</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 10</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 11</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 12</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 13</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Item 14</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 200,
    height: 50,
    backgroundColor: 'lightblue',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScrollViewExample;
