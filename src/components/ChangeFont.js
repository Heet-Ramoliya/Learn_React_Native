import {View, Text} from 'react-native';
import React from 'react';

const ChangeFont = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          padding: 4,
          fontFamily: 'KodeMono-Bold',
        }}>
        Font-1
      </Text>
      {/* <Text style={{fontSize: 18, color: 'black', padding: 4}}>Font-2</Text>
      <Text style={{fontSize: 18, color: 'black', padding: 4}}>Font-3</Text>
      <Text style={{fontSize: 18, color: 'black', padding: 4}}>Font-4</Text>
      <Text style={{fontSize: 18, color: 'black', padding: 4}}>Font-5</Text> */}
    </View>
  );
};

export default ChangeFont;
