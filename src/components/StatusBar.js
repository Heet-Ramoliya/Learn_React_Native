import {useState} from 'react';
import {StatusBar, View, StyleSheet, Button} from 'react-native';

const StatusBar_task = () => {
  const [hide, setHide] = useState(false);

  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
        hidden={hide}
      />
      <Button title="press me" onPress={() => setHide(!hide)} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default StatusBar_task;
