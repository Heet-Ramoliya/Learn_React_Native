import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

const MySlider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const onSliderValueChange = value => {
    setSliderValue(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Slider Value: {sliderValue}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#00FF00"
        maximumTrackTintColor="#FF0000"
        thumbTintColor="#0000FF"
        step={1}
        value={sliderValue}
        onValueChange={onSliderValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  slider: {
    width: 300,
  },
});

export default MySlider;
