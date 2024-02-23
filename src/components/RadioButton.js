import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const RadioButton = () => {
  const skill = [
    {
      id: 1,
      name: 'JavaScript',
    },
    {
      id: 2,
      name: 'Java',
    },
    {
      id: 3,
      name: 'PHP',
    },
    {
      id: 4,
      name: 'Html',
    },
    {
      id: 5,
      name: 'CSS',
    },
  ];
  const [selectbutton, setSelectbutton] = useState(1);

  return (
    <View style={styles.main}>
      {skill.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectbutton(item.id)}
          style={styles.button}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.radio}>
              {selectbutton == item.id ? (
                <View style={styles.radioBG}></View>
              ) : null}
            </View>
            <Text style={styles.radiotext}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radiotext: {
    fontSize: 20,
    fontWeight: '500',
    margin: 6,
    color: 'black',
    alignItems: 'flex-start',
  },
  radio: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderRadius: 15,
  },
  radioBG: {
    height: 18,
    width: 18,
    backgroundColor: 'blue',
    borderRadius: 9,
    margin: 4,
  },
  button: {
    marginVertical: 10,
  },
});

export default RadioButton;
