import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import React from 'react';

const DateTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    console.warn(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = time => {
    console.warn('A Time has been picked: ', time);
    const tm = new Date(time);
    const y = tm.toLocaleTimeString();
    console.warn(y);
    hideTimePicker();
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          showDatePicker();
        }}>
        <Text style={styles.text}>Date Picker</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          showTimePicker();
        }}>
        <Text style={styles.text}>Time Picker</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: 'skyblue',
    margin: 8,
  },
  text: {
    fontSize: 18,
    padding: 8,
    color: 'white',
  },
});

export default DateTimePicker;
