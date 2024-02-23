import React, {useState} from 'react';
import {ActivityIndicator, View, Text, StyleSheet, Button} from 'react-native';

const ActivityIndicator_task1 = () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ActivityIndicator_task1;
