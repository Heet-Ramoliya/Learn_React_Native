import React from 'react';
import {View, ToastAndroid, Button} from 'react-native';

const ToastMessage = () => {
  const showToast = () => {
    ToastAndroid.show('showToast', ToastAndroid.SHORT, ToastAndroid.TOP);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'showToastWithGravity',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <Button title="Show Toast" onPress={showToast} />
      <Button title="Show ToastwithGravity" onPress={showToastWithGravity} />
    </View>
  );
};

export default ToastMessage;
