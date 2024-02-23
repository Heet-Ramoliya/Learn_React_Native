import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AxiosTask = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/weather?lat=23.022505&lon=72.571365&appid=c7adfd77adf04f0345596f78feea11c1',
      )
      .then(res => {
        setData([res.data]);
        setIsloading(false);
      })
      .catch(error => {
        console.log(error);
        setIsloading(false);
      });
  }, []);

  if (isloading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={{flex: 1, paddingTop: 20}}>
      {console.log(data)}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              padding: 10,
            }}>
            <Text style={styles.text}>City: {item.name}</Text>
            <Text style={styles.text}>Temperature: {item.main.temp}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AxiosTask;
