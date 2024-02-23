import React, {useRef, useState} from 'react';
import {View, Text, Animated, TouchableOpacity, StyleSheet} from 'react-native';

const AnimatedExample = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.main}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              },
            ],
          },
        ]}></Animated.View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          startAnimation();
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            fontFamily: 'KodeMono-Medium',
          }}>
          Start Animation
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  btn: {
    marginTop: 50,
    width: 200,
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedExample;
