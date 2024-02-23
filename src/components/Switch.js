import {Switch, View} from 'react-native';

const Switch_task = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Switch value={true} thumbColor="green" />
    </View>
  );
};

export default Switch_task;
