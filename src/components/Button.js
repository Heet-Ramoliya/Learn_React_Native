import React, {useState} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const Button_task = () => {
  const [name, setName] = useState('Learn');

  const changeName = () => {
    setName('React-Native');
  };
  return (
    <View>
      <Text style={styles.text}>{name}</Text>
      <Button title="submit" onPress={changeName} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',
    margin:10
  },
});

export default Button_task;
