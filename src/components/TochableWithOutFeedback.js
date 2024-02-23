import {
  View,
  Text,
  TouchableWithoutFeedback,
  Alert,
  StyleSheet,
} from 'react-native';

const TochableWithOutFeedback_task = () => {
  const handlePress = () => {
    Alert.alert('Alert', 'TouchableWithoutFeedback pressed');
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={{backgroundColor: 'skyblue'}}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              padding: 5,
              fontWeight: '600',
            }}>
            Press me
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TochableWithOutFeedback_task;
